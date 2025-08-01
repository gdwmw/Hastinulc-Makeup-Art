"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useEffect, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoLogoWhatsapp } from "react-icons/io";

import accentDot from "@/public/assets/images/background/Accent-Dot.svg";
import homeImage from "@/public/assets/images/model/Home.png";
import { DatePickerInput, Input, SectionHeader, Select, SubmitButton } from "@/src/components";
import { useGlobalStates } from "@/src/context";
import { inputValidations } from "@/src/hooks";
import { PACKAGES_DATA } from "@/src/libs";
import { HomeBookingSchema, THomeBookingSchema } from "@/src/schemas";
import { IBookingResponse } from "@/src/types";

interface IFormField {
  id: number;
  label?: string;
  maxLength?: number;
  name: keyof THomeBookingSchema;
  onKeyDown?: (e: KeyboardEvent) => void;
  options?: string[];
  type?: HTMLInputTypeAttribute;
}

const FORM_FIELDS_DATA: IFormField[] = [
  {
    id: 1,
    label: "Name",
    maxLength: 50,
    name: "name",
    onKeyDown: (e) => inputValidations.name(e),
    type: "text",
  },
  {
    id: 2,
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    id: 3,
    label: "Phone",
    maxLength: 15,
    name: "phoneNumber",
    onKeyDown: (e) => inputValidations.phoneNumber(e),
    type: "tel",
  },
  {
    id: 4,
    label: "Package",
    name: "package",
    options: PACKAGES_DATA.map((dt) => dt.title),
  },
  {
    id: 5,
    label: "Date",
    name: "date",
  },
];

interface I {
  response: IBookingResponse[] | null | undefined;
  session: null | Session;
}

export const Home: FC<I> = (props): ReactElement => {
  const router = useRouter();
  const { setBooking } = useGlobalStates();
  const [screenWidth, setScreenWidth] = useState(0);
  const [date, setDate] = useState<Date | undefined>();
  const [loading, setTransition] = useTransition();

  const bookedDates = props.response
    ? props.response
        .map((dt) => (dt.indicator === "On Going" || dt.indicator === "Success" ? new Date(dt.date) : null))
        .filter((date): date is Date => date !== null)
    : [];

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<THomeBookingSchema>({
    defaultValues: {
      email: props.session?.user?.email ?? undefined,
      name: props.session?.user?.name ?? undefined,
      phoneNumber: props.session?.user?.phoneNumber,
    },
    resolver: zodResolver(HomeBookingSchema(screenWidth)),
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setValue]);

  useEffect(() => {
    if (props.session?.user?.status) {
      const pendingBooking = localStorage.getItem("pendingBooking");
      if (pendingBooking) {
        const data: THomeBookingSchema = JSON.parse(pendingBooking);
        setDate(new Date(data.date));
        setValue("package", data.package ?? "");
        localStorage.removeItem("pendingBooking");
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (date) {
      setValue(
        "date",
        `${date.getFullYear().toString()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
        { shouldValidate: true },
      );
    } else {
      setValue("date", "");
    }
    // eslint-disable-next-line
  }, [date]);

  const onSubmit: SubmitHandler<THomeBookingSchema> = (dt) => {
    setTransition(() => {
      if (props.session?.user?.status) {
        setBooking(dt);
        router.push("/booking");
        reset();
      } else {
        localStorage.setItem("pendingBooking", JSON.stringify(dt));
        router.push("/authentication/login");
      }
    });
  };

  return (
    <section className="bg-rose-200" id="home">
      <div className="flex h-[calc(100svh-88px)] max-h-[1080px] flex-col">
        <section className="relative h-full overflow-hidden">
          <Image
            alt="Home Image"
            className="absolute right-[-450px] top-0 h-full min-h-[680px] w-fit min-w-fit md:-right-80 lg:-right-36 xl:right-0"
            priority
            src={homeImage}
            unoptimized
          />

          <div className="container mx-auto size-full px-5">
            <SectionHeader
              className={{
                container: "flex h-full flex-col justify-center gap-6 space-y-0",
                description: "z-[1] max-w-[450px] text-base md:max-w-[550px] md:text-lg lg:max-w-[650] lg:text-xl",
                subtitle: "z-[1] -mb-5",
                title: "z-[1] max-w-[500px] text-5xl sm:max-w-[600px] sm:text-6xl md:max-w-[700px] md:text-7xl lg:max-w-[800px] lg:text-8xl",
              }}
              description="Delivering elegant and professional beauty touches for your special moments. Trust us to bring out your best look."
              subtitle="BEAUTIFY"
              title="Professional Makeup Artist"
            />
          </div>
        </section>

        <section className="relative h-56 w-full bg-white shadow-lg">
          <Image alt="Accent Dot" className="absolute -top-8 left-16 sm:left-36" src={accentDot} width={64} />

          <div className="container mx-auto size-full px-5">
            <div className="flex size-full items-center justify-center gap-20">
              <form className="flex w-full flex-col items-center justify-center lg:w-fit" onSubmit={handleSubmit(onSubmit)}>
                <div className="hidden w-full items-center gap-5 lg:flex">
                  {FORM_FIELDS_DATA.slice(0, 3).map((dt) => (
                    <Input
                      className={{ container: "w-64" }}
                      color="rose"
                      disabled={loading}
                      errorMessage={errors[dt.name]?.message}
                      key={dt.id}
                      label={dt.label ?? ""}
                      maxLength={dt.maxLength}
                      onKeyDown={dt.onKeyDown}
                      type={dt.type}
                      {...register(dt.name)}
                    />
                  ))}
                </div>

                <div className="flex w-full items-center gap-1 sm:gap-3 md:gap-5">
                  {FORM_FIELDS_DATA.slice(3).map((dt) => {
                    if (dt.name === "package") {
                      return (
                        <Select
                          className={{ container: "w-full lg:w-64", select: "h-[26px]" }}
                          color="rose"
                          disabled={loading}
                          errorMessage={errors[dt.name]?.message}
                          key={dt.id}
                          label={dt.label ?? ""}
                          {...register(dt.name)}
                        >
                          <option value="-">-</option>
                          {dt.options?.map((opt, i) => (
                            <option key={i} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </Select>
                      );
                    }

                    if (dt.name === "date") {
                      return (
                        <DatePickerInput
                          className={{ container: "z-[2] w-full lg:w-64" }}
                          color="rose"
                          dateFormat="yyyy/MM/dd"
                          disabled={loading}
                          errorMessage={errors[dt.name]?.message}
                          excludeDates={[...bookedDates, new Date()]}
                          key={dt.id}
                          label={dt.label ?? ""}
                          minDate={new Date()}
                          onChange={(value: Date | null) => value && setDate(value)}
                          selected={date}
                        />
                      );
                    }
                  })}

                  <SubmitButton className="mt-2 hidden w-64 lg:flex" color="rose" disabled={loading} label="BOOKING NOW" size="sm" variant="solid" />
                </div>

                {/* Components For Responsive Purposes Only */}
                <SubmitButton className="mt-2 w-full lg:hidden" color="rose" disabled={loading} label="BOOKING NOW" size="sm" variant="solid" />
              </form>

              <address className="hidden items-center gap-2 xl:flex">
                <Link
                  className="flex size-20 items-center justify-center rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 active:scale-95 active:bg-rose-100 active:text-rose-400"
                  href={"https://wa.me/100000000000"}
                  prefetch={false}
                  target="_blank"
                >
                  <IoLogoWhatsapp size={40} />
                </Link>
                <div>
                  <span className="-mb-1 block text-lg">Need Help? Contact us</span>
                  <Link
                    className="inline-block text-2xl font-semibold not-italic text-rose-500 active:scale-95 active:text-rose-400"
                    href={"https://wa.me/100000000000"}
                    target="_blank"
                  >
                    (+1) 000-000-0000
                  </Link>
                </div>
              </address>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
