import { z } from "zod";

const asideFormSchema = z.object({
  kmMin: z.coerce.number().nullish(),
  kmMax: z.coerce.number().nullish(),
  priceMin: z.coerce.number().nullish(),
  priceMax: z.coerce.number().nullish(),
});

export default asideFormSchema;
