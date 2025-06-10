/* eslint-disable perfectionist/sort-objects */
export const schemaErrorMessage = {
  string: {
    min: (label: string, min: number) => `Harap masukkan ${label} minimal ${min} karakter`,
    max: (label: string, max: number) => `${label} maksimal ${max} karakter`,
    required: (label: string) => `Harap masukkan ${label}`,
    email: (label: string) => `${label} harus berupa alamat email yang valid`,
    url: (label: string) => `${label} harus berupa URL yang valid`,
    enum: (label: string) => `Harap pilih ${label}`,
  },
  number: {
    min: (label: string, min: number) => `${label} minimal ${min}`,
    max: (label: string, max: number) => `${label} maksimal ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */
