import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "The name must be contain 3 characters",
    })
    .max(255),
  description: z
    .string({
      invalid_type_error: "description must be a string",
    })
    .optional(),
  price: z.string().refine((value) => {
    return !isNaN(parseFloat(value));
  }),
  imagen: z
    .string()
    .url({
      message: "The image should be a URL",
    })
    .optional(),
});
