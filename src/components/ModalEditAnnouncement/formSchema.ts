import { z } from "zod";

const announcementEditForm = z.object({
  description: z.string().min(10).optional(),
  brand: z.string().min(3, "brand very small").optional(),
  model: z.string().min(3, "model very small").max(50, "model very largue").optional(),
  color: z.string().min(3, "color very small").max(20, "color very largue").optional(),
  year: z.string().min(4, "year very small").max(4, "year very largue").optional(),
  fuel: z.string().min(3, "fuel very small").max(9, "fuel very largue").optional(),
  km: z.string().min(4, "km very small").default("0").optional(),
  price: z.string().optional(),
  fipeTablePrice: z.coerce.string().optional(),
  coverImage: z.string().url().optional(),
  firstImage: z.string().url().optional(),
  secondImage: z.string().url().optional(),
  thirdImage: z.string().url().nullable().default(null).optional(),
  fourthImage: z.string().url().nullable().default(null).optional(),
  fifthImage: z.string().url().nullable().default(null).optional(),
  sixthImage: z.string().url().nullable().default(null).optional(),
  isPublic: z.boolean().default(true).optional()
});

export default announcementEditForm;
