import { z } from "zod";

import { schemaErrorMessage } from "../schema-error-message";

// ----------------------------

export const ProfileSchema = z.object({
  email: z.string().email({ message: schemaErrorMessage.string.email("Email") }),
  image: z
    .any()
    .refine((files) => files instanceof FileList, "Daftar file tidak valid")
    .refine((files) => files.length <= 1, "Maksimal 1 file")
    .refine((files) => Array.from(files).every((file) => file.size <= 5 * 1024 * 1024), "Ukuran file maksimal 5 MB")
    .optional(),
  name: z.string().min(3, { message: schemaErrorMessage.string.min("Nama", 3) }),
  phoneNumber: z.string().min(10, { message: schemaErrorMessage.string.min("Nomor Telepon", 10) }),
  username: z.string().min(4, { message: schemaErrorMessage.string.min("Username", 4) }),
});

export type TProfileSchema = z.infer<typeof ProfileSchema>;
