import z from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must be at most 100 characters long"),
  email: z
    .email()
    .min(2, "Email must be at least 2 characters long")
    .max(100, "Email must be at most 100 characters long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long")
    .refine((value) => value.match(/[a-z]/), "Password must contain at least one lowercase letter")
    .refine((value) => value.match(/[A-Z]/), "Password must contain at least one uppercase letter")
    .refine((value) => value.match(/[0-9]/), "Password must contain at least one number")
    .refine(
      (value) => value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/),
      "Password must contain at least one special character",
    ),
});
