import { z } from "zod"

export const forgetPasswordSchema = z.object({
    password: z.string().nonempty("Senha obrigatória com no mínimo 4 caracteres")
    .min(4)
    .max(50),
    confirmPassword: z.string().nonempty("Confirmação de senha obrigatória")
}).refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "Senhas não coincidem!",
    path: ["confirmPassword"],
  });

export type ForgetPasswordData = z.infer<typeof forgetPasswordSchema>
