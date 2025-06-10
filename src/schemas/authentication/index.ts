import { z } from "zod";

import { schemaErrorMessage as errorMessage } from "../schema-error-message";

// ----------------------------

export const LoginSchema = (label: string) =>
  z.object({
    identifier:
      label === "Email"
        ? z.string().email({ message: errorMessage.string.email(label) })
        : z.string().min(1, { message: errorMessage.string.required(label) }),
    password: z.string().min(1, { message: errorMessage.string.required("Password") }),
  });

export type TLoginSchema = z.infer<ReturnType<typeof LoginSchema>>;

// ----------------------------

export const RegisterSchema = z.object({
  confirmPassword: z.string().min(1, { message: errorMessage.string.required("Konfirmasi Password") }),
  email: z.string().email({ message: errorMessage.string.email("Email") }),
  name: z.string().min(3, { message: errorMessage.string.min("Nama", 3) }),
  password: z
    .string()
    .min(8, { message: errorMessage.string.min("Password", 8) })
    .regex(/^(?=.*[A-Z])/, { message: "Password harus memiliki minimal 1 huruf besar" })
    .regex(/^(?=.*\d)/, { message: "Password harus memiliki minimal 1 angka" })
    .regex(/^(?=.*[!@#$%^&*])/, { message: "Password harus memiliki minimal 1 simbol (!@#$%^&*)" }),
  phoneNumber: z.string().min(10, { message: errorMessage.string.min("Nomor Telepon", 10) }),
  username: z.string().min(4, { message: errorMessage.string.min("Username", 4) }),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
