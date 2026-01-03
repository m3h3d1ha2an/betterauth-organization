import z from "zod";

const LOWERCASE_REGEX = /[a-z]/;
const UPPERCASE_REGEX = /[A-Z]/;
const NUMBER_REGEX = /[0-9]/;
const SPECIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

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
    .refine((value) => value.match(LOWERCASE_REGEX), "Password must contain at least one lowercase letter")
    .refine((value) => value.match(UPPERCASE_REGEX), "Password must contain at least one uppercase letter")
    .refine((value) => value.match(NUMBER_REGEX), "Password must contain at least one number")
    .refine((value) => value.match(SPECIAL_CHAR_REGEX), "Password must contain at least one special character"),
});
