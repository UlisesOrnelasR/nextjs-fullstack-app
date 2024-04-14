import { z } from "zod";

export const createCategorySchema = z.object({
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
  published: z
    .boolean({
      invalid_type_error: "The field should be a boolean",
    })
    .default(false),
});
