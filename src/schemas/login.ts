import z from "zod";

export const loginSchema = z.object({
  email: z
    .email()
    .min(2, "Email must be at least 2 characters long")
    .max(100, "Email must be at most 100 characters long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long"),
  rememberMe: z.boolean(),
});
