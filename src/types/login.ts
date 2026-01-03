import type z from "zod";
import type { loginSchema } from "@/schemas/login";

export type Login = z.infer<typeof loginSchema>;

export const loginDefaults: Login = {
  email: "",
  password: "",
  rememberMe: false,
};
