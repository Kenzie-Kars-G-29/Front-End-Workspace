import { z } from "zod";

const userAddressUpdateFormSchema = z.object({
  cep: z
    .string()
    .min(3, { message: "mínimo de 3 caracters" })
    .max(12, { message: "maximo de 12 caracters" }),
  state: z
    .string()
    .min(3, { message: "mínimo de 3 caracters" })
    .max(45, { message: "maximo de 45 caracters" }),
  city: z
    .string()
    .min(3, { message: "mínimo de 3 caracters" })
    .max(45, { message: "maximo de 45 caracters" }),
  street: z
    .string()
    .min(3, { message: "mínimo de 3 caracters" })
    .max(45, { message: "maximo de 45 caracters" }),
  number: z.string().min(1).max(5, { message: "maximo de 5 caracters" }),
  complement: z.string(),
});

export default userAddressUpdateFormSchema;
