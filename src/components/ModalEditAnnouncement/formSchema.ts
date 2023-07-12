import { z } from "zod";

const announcementEditForm = z.object({
  description: z.string().min(10),
  brand: z.string().min(3, "brand very small"),
  model: z.string().min(3, "model very small").max(50, "model very largue"),
  color: z.string().min(3, "color very small").max(20, "color very largue"),
  year: z.string().min(4, "year very small").max(4, "year very largue"),
  fuel: z.string().min(3, "fuel very small").max(9, "fuel very largue"),
  km: z.string().min(4, "km very small").default("0"),
  price: z.string(),
  fipeTablePrice: z.coerce.string(),
  coverImage: z.string().url(),
  firstImage: z.string().url(),
  secondImage: z.string().url(),
  thirdImage: z.string().url().nullable().default(null).optional(),
  fourthImage: z.string().url().nullable().default(null).optional(),
  fifthImage: z.string().url().nullable().default(null).optional(),
  sixthImage: z.string().url().nullable().default(null).optional(),
  isPublic: z.boolean().default(true).optional()
});

export default announcementEditForm;
