import { z } from "zod";

const announcementFormResolver = z.object({
  description: z.string().min(10),
  brand: z.string().min(3, "brand very small"),
  model: z.string().min(3, "model very small").max(50, "model very largue"),
  color: z.string().min(3, "color very small").max(20, "color very largue"),
  year: z.string().min(4, "year very small").max(4, "year very largue"),
  fuel: z.string().min(3, "fuel very small").max(9, "fuel very largue"),
  km: z.string().min(4, "km very small").nullable().default("0"),
  price: z.string(),
  fipeTablePrice: z.string(),
  coverImage: z.string().url(),
  firstImage: z.string().url(),
  secondImage: z.string().url(),
  thirdImage: z.string().url().nullable().default(null),
  fourthImage: z.string().url().nullable().default(null),
  fifthImage: z.string().url().nullable().default(null),
  sixthImage: z.string().url().nullable().default(null),
  isPublic: z.boolean().nullable().default(true)
});

export default announcementFormResolver;
