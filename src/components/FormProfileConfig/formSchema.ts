import { z } from "zod";

const userUpdateFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres" })
    .max(50, { message: "Máximo de 50 caracteres" }),
  email: z
    .string()
    .email({ message: "O email precisa ser válido" })
    .max(50, { message: "Máximo de 50 caracteres" }),
  cpf: z
    .string()
    .min(3, { message: "Mínimo de 3 caracteres" })
    .max(12, { message: "Máximo de 12 caracteres" }),
  phone: z
    .string()
    .min(3, { message: "Mínimo de 3 caracters" })
    .max(12, { message: "Máximo de 12 caracters" }),
  birthday: z.string().nonempty("Data de nascimento é obrigatória"),
  description: z.string().nonempty("Descrição é obrigatória"),
});

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

export default userUpdateFormSchema;
