import { z } from "zod"

export const resetPassSchema = z.object({
    email: z.string().email("Deve ser um email")
})

export type ResetPassData = z.infer<typeof resetPassSchema>
