import { z } from "zod";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: errorMessage.string.required("Password Saat Ini") }),
  password: z
    .string()
    .min(8, { message: errorMessage.string.min("Password Baru", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password harus memiliki minimal 1 huruf besar" })
    .regex(/^(?=.*\d)/, { message: "Password harus memiliki minimal 1 angka" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password harus memiliki minimal 1 simbol (!@#$%^&*)" }),
  passwordConfirmation: z.string().min(1, { message: errorMessage.string.required("Konfirmasi Password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
