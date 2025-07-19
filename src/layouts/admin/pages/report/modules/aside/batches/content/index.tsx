"use client";

import { useQuery } from "@tanstack/react-query";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFileExport } from "react-icons/fa";

import { DatePickerInput, ExampleA, Input, Select } from "@/src/components";
import { currencyFormat } from "@/src/hooks";
import { IBookingResponse, IMetaResponse } from "@/src/types";
import { GETBooking } from "@/src/utils";

const columns = [
  { key: "id", label: "ID" },
  { key: "documentId", label: "ID Dokumen" },
  { key: "username", label: "Username" },
  { key: "name", label: "Nama" },
  { key: "package", label: "Paket" },
  { key: "date", label: "Tanggal" },
  { key: "time", label: "Waktu" },
  { key: "indicator", label: "Status" },
  { key: "total", label: "Total" },
];

export const Content: FC = (): ReactElement => {
  const [enabledCols, setEnabledCols] = useState<Record<string, boolean>>(
    columns.reduce((acc, col) => ({ ...acc, [col.key]: col.key !== "documentId" }), {}),
  );
  const [dateA, setDateA] = useState<Date | null>(null);
  const [dateB, setDateB] = useState<Date | null>(null);

  const { data } = useQuery<{ data: IBookingResponse[] } & IMetaResponse>({
    queryFn: () => GETBooking("sort[0]=createdAt:desc"),
    queryKey: ["booking"],
  });

  const { register, watch } = useForm();
  const search = watch("search") || "";
  const by = watch("by") || "documentId";

  const handleToggleCol = (key: string) => {
    setEnabledCols((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredData = (data?.data || []).filter((dt) => {
    let passDate = true;
    if (dateA) {
      const bookingDate = new Date(dt.date);
      passDate = bookingDate >= dateA;
    }
    if (dateB && passDate) {
      const bookingDate = new Date(dt.date);
      const dateBEnd = new Date(dateB);
      dateBEnd.setHours(23, 59, 59, 999);
      passDate = bookingDate <= dateBEnd;
    }

    let passSearch = true;
    if (search && by) {
      let value = "";
      switch (by) {
        case "date":
          value = dt.date ?? "";
          break;
        case "documentId":
          value = dt.documentId ?? "";
          break;
        case "id":
          value = String(dt.id ?? "");
          break;
        case "indicator":
        case "status":
          value = dt.indicator ?? "";
          break;
        case "name":
          value = dt.name ?? "";
          break;
        case "package":
          value = dt.package ?? "";
          break;
        case "time":
          value = dt.time ?? "";
          break;
        case "total":
          value = String(dt.total ?? "");
          break;
        case "username":
          value = dt.username ?? "";
          break;
        default:
      }
      passSearch = value.toLowerCase().includes(search.toLowerCase());
    }

    return passDate && passSearch;
  });

  return (
    <aside className="grow space-y-5 overflow-y-auto">
      <section className="rounded-lg border px-2 pb-2 shadow-md">
        <div className="flex items-center gap-4 overflow-x-auto p-4">
          <span className="-mb-1.5">Dari</span>

          <DatePickerInput
            className={{ container: "min-w-[200px]" }}
            color="rose"
            label="Tanggal"
            onChange={(value: Date | null) => setDateA(value)}
            selected={dateA}
          />

          <span className="-mb-1.5">Sampai</span>

          <DatePickerInput
            className={{ container: "min-w-[200px]" }}
            color="rose"
            label="Tanggal"
            onChange={(value: Date | null) => setDateB(value)}
            selected={dateB}
          />

          <Input className={{ container: "min-w-[300px] grow" }} color="rose" label="Cari" {...register("search")} />

          <Select className={{ container: "min-w-[112px]" }} color="rose" defaultValue={"id"} label="Berdasarkan" {...register("by")}>
            <option value="id">ID</option>
            <option value="documentId">ID Dokumen</option>
            <option value="username">Username</option>
            <option value="name">Nama</option>
            <option value="package">Paket</option>
            <option value="date">Tanggal</option>
            <option value="time">Waktu</option>
            <option value="status">Status</option>
            <option value="total">Total</option>
          </Select>
        </div>
      </section>

      <section className="space-y-4 rounded-lg border p-4 shadow-md">
        <h3 className="text-lg font-semibold">Tabel Booking</h3>

        <div className="flex flex-wrap gap-2">
          {columns.map((col) => (
            <label className="flex items-center gap-1" key={col.key}>
              <input
                checked={enabledCols[col.key]}
                className="size-3 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-[3px] checked:border-rose-400"
                onChange={() => handleToggleCol(col.key)}
                type="checkbox"
              />
              <span className="whitespace-nowrap">{col.label}</span>
            </label>
          ))}
        </div>

        <div className="overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {columns.map(
                  (col) =>
                    enabledCols[col.key] && (
                      <th className="border p-2" key={col.key}>
                        {col.label}
                      </th>
                    ),
                )}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((dt) => (
                <tr className="text-center" key={dt.documentId}>
                  {columns.map(
                    (col) =>
                      enabledCols[col.key] && (
                        <td className="border p-2" key={col.key}>
                          {col.key === "id" ? (
                            dt.id
                          ) : col.key === "documentId" ? (
                            dt.documentId
                          ) : col.key === "username" ? (
                            dt.username
                          ) : col.key === "name" ? (
                            dt.name
                          ) : col.key === "package" ? (
                            dt.package
                          ) : col.key === "date" ? (
                            dt.date
                          ) : col.key === "time" ? (
                            dt.time.slice(0, 5)
                          ) : col.key === "indicator" ? (
                            <div
                              className={`mx-auto flex h-6 w-full min-w-fit max-w-24 items-center justify-center whitespace-nowrap rounded-full px-5 text-xs font-semibold text-white ${
                                {
                                  Canceled: "bg-red-400",
                                  "Down Pay": "bg-orange-400",
                                  Expired: "bg-red-400",
                                  "Final Pay": "bg-orange-400",
                                  "On Going": "bg-blue-400",
                                  Rejected: "bg-red-400",
                                  Success: "bg-green-400",
                                  Waiting: "bg-yellow-400",
                                }[dt.indicator] ?? "bg-gray-400"
                              }`}
                            >
                              {dt.indicator}
                            </div>
                          ) : col.key === "total" ? (
                            currencyFormat(dt.total, "IDR")
                          ) : (
                            "-"
                          )}
                        </td>
                      ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ExampleA
          color="rose"
          onClick={() => {
            const doc = new jsPDF();
            doc.setFontSize(16);
            doc.text("Rekapitulasi Booking Makeup", doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });
            const tableColumn = columns.filter((col) => enabledCols[col.key]).map((col) => col.label);
            const tableRows = filteredData.map((dt) =>
              columns
                .filter((col) => enabledCols[col.key])
                .map((col) => {
                  if (col.key === "total") {
                    return currencyFormat(dt.total, "IDR");
                  }
                  if (col.key === "indicator") {
                    return dt.indicator;
                  }
                  if (col.key === "time") {
                    return dt.time?.slice(0, 5);
                  }
                  switch (col.key) {
                    case "date":
                      return dt.date ?? "-";
                    case "documentId":
                      return dt.documentId ?? "-";
                    case "id":
                      return dt.id ?? "-";
                    case "indicator":
                      return dt.indicator ?? "-";
                    case "name":
                      return dt.name ?? "-";
                    case "package":
                      return dt.package ?? "-";
                    case "time":
                      return dt.time?.slice(0, 5) ?? "-";
                    case "total":
                      return currencyFormat(dt.total, "IDR");
                    case "username":
                      return dt.username ?? "-";
                    default:
                      return "-";
                  }
                }),
            );
            autoTable(doc, {
              body: tableRows,
              head: [tableColumn],
              startY: 28,
            });
            doc.save("Rekapitulasi-Booking-Makeup.pdf");
          }}
          size="sm"
          variant="solid"
        >
          <FaFileExport />
          <span>Ekspor ke PDF</span>
        </ExampleA>
      </section>
    </aside>
  );
};
