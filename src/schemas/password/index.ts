import { z } from "zod";

import { schemaErrorMessage } from "../schema-error-message";

// ----------------------------

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: schemaErrorMessage.string.required("Password Saat Ini") }),
  password: z
    .string()
    .min(8, { message: schemaErrorMessage.string.min("Password Baru", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password harus memiliki minimal 1 huruf besar" })
    .regex(/^(?=.*\d)/, { message: "Password harus memiliki minimal 1 angka" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password harus memiliki minimal 1 simbol (!@#$%^&*)" }),
  passwordConfirmation: z.string().min(1, { message: schemaErrorMessage.string.required("Konfirmasi Password") }),
});

export type TChangePasswordSchema = z.infer<typeof ChangePasswordSchema>;
