"use client";

import { faker } from "@faker-js/faker";
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";
import { FC, ReactElement } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Annual Booking Statistics",
    },
  },
  responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const data = {
  datasets: [
    {
      backgroundColor: "rgba(251, 113, 133, 0.5)",
      borderColor: "rgb(251, 113, 133)",
      data: labels.map(() => faker.number.int({ max: 1000, min: 0 })),
      label: "This Year",
    },
    {
      backgroundColor: "rgba(229, 231, 235, 0.5)",
      borderColor: "rgb(229, 231, 235)",
      data: labels.map(() => faker.number.int({ max: 1000, min: 0 })),
      label: "Last Year",
    },
  ],
  labels,
};

export const Content: FC = (): ReactElement => (
  <aside className="grow space-y-5 overflow-y-auto">
    <div className="rounded-lg border px-2 pb-2 shadow-md">
      <Line data={data} options={options} />
    </div>

    <div className="flex w-full gap-5">
      <div className="mb-2 h-96 basis-1/2 rounded-lg border p-3 shadow-md">
        <h3 className="text-lg font-semibold">Last Bookings</h3>
      </div>
      <div className="mb-2 h-96 basis-1/2 rounded-lg border p-3 shadow-md">
        <h3 className="text-lg font-semibold">Last Reviews</h3>
      </div>
    </div>
  </aside>
);
