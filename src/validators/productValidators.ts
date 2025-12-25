import { z } from "zod";

export const getProductByIdSchema = z.object({
  params: z.object({
    id: z.uuid("Invalid product ID"),
  }),
});

export const createProductSchema = z.object({
  body: z.object({
    name: z
      .string("Name is required")
      .min(3, "Name must be at least 3 letters")
      .max(255, "Name must not pass 255 letters"),
    description: z.string("Description is required"),
    image: z.string().max(255).optional(),
    price: z
      .float32("Price is required and must be a number")
      .min(0)
      .positive("Price must be a positive number"),
    quantity: z.number().min(0).nonnegative().optional(),
    brand: z.string().max(255).optional(),
  }),
});

export const updateProductSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 letters")
    .max(255, "Name must not pass 255 letters")
    .optional(),
  description: z.string().optional(),
  image: z.string().max(255).optional(),
  price: z
    .float32("Price is required and must be a number")
    .min(0)
    .positive("Price must be a positive number")
    .optional(),
  quantity: z.number().min(0).nonnegative().optional(),
  brand: z.string().max(255).optional(),
});
