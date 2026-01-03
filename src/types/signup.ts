import type z from "zod";
import type { signupSchema } from "@/schemas/signup";

export type Signup = z.infer<typeof signupSchema>;

export const signupDefaults: Signup = {
  name: "",
  email: "",
  password: "",
};
