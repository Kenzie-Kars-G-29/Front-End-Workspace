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

export default userUpdateFormSchema;
