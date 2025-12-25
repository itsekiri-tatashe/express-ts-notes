import { z } from "zod";

export const registerUserSchema = z.object({
  body: z.object({
    email: z.email("Email is required").min(3).max(255),
    password: z.string("Password is required").min(7).max(255),
    name: z.string().min(3).max(255).optional(),
    address: z.string().min(3).max(255).optional(),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
    email: z.email("Email is required").min(3).max(255),
    password: z.string("Password is required").min(7).max(255),
  }),
});
