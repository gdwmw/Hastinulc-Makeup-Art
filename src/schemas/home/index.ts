import { z } from "zod";

import { useGlobalStates } from "@/src/context";
import { useLanguage } from "@/src/hooks";
import { PACKAGES_DATA } from "@/src/libs";

import { schemaErrorMessage } from "../schema-error-message";

// ----------------------------

export const HomeBookingSchema = (screenWidth: number) => {
  const { language } = useGlobalStates();

  const fetchLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  };

  const getLanguage = useLanguage().get(language ?? fetchLocalStorage("language")).input;

  return z.object({
    date: z.string().min(1, { message: schemaErrorMessage.string.required(getLanguage[4]) }),
    email: screenWidth <= 1024 ? z.string().optional() : z.string().email({ message: schemaErrorMessage.string.email(getLanguage[1]) }),
    name: screenWidth <= 1024 ? z.string().optional() : z.string().min(3, { message: schemaErrorMessage.string.min(getLanguage[0], 3) }),
    package: z.enum(PACKAGES_DATA().map((dt) => dt.title) as [string, ...string[]], {
      errorMap: () => ({ message: schemaErrorMessage.string.enum(getLanguage[3]) }),
    }),
    phoneNumber: screenWidth <= 1024 ? z.string().optional() : z.string().min(10, { message: schemaErrorMessage.string.min(getLanguage[2], 10) }),
  });
};

export type THomeBookingSchema = z.infer<ReturnType<typeof HomeBookingSchema>>;
