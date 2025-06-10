import { z } from "zod";

import { PACKAGES_DATA } from "@/src/libs";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const HomeBookingSchema = (screenWidth: number) =>
  z.object({
    date: z.string().min(1, { message: errorMessage.string.required("Tanggal") }),
    email: screenWidth <= 1024 ? z.string().optional() : z.string().email({ message: errorMessage.string.email("Email") }),
    name: screenWidth <= 1024 ? z.string().optional() : z.string().min(3, { message: errorMessage.string.min("Nama", 3) }),
    package: z.enum(PACKAGES_DATA.map((dt) => dt.title) as [string, ...string[]], {
      errorMap: () => ({ message: errorMessage.string.enum("Paket") }),
    }),
    phoneNumber: screenWidth <= 1024 ? z.string().optional() : z.string().min(10, { message: errorMessage.string.min("Nomor Telepon", 10) }),
  });

export type THomeBookingSchema = z.infer<ReturnType<typeof HomeBookingSchema>>;
