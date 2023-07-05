import { z } from "zod"


export const editCommentSchema = z.object({
    text: z.string()
})

export type EditCommentData = z.infer<typeof editCommentSchema>
