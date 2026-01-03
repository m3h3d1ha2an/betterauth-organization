"use client";

import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import { signupSchema } from "@/schemas/signup";
import { signupDefaults } from "@/types/signup";
import { useAppForm } from "./form/hook";

export const SignupForm = () => {
  const form = useAppForm({
    defaultValues: signupDefaults,
    validators: { onSubmit: signupSchema },
    onSubmit: async ({ value }) => {
      toast.success("Login successful", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <FieldSet>
        <FieldGroup>
          <form.AppField name="name">{(field) => <field.Input label="Name" />}</form.AppField>
          <form.AppField name="email">{(field) => <field.Input label="Email" type="email" />}</form.AppField>
          <form.AppField name="password">{(field) => <field.Input label="Password" type="password" />}</form.AppField>
          <Button type="submit" className="hover:bg-blue-800">
            Create Account
          </Button>
          <div className="flex items-center justify-center">
            Already have an account?
            <Link href="/auth/login">
              <Button type="button" variant="link">
                Login
              </Button>
            </Link>
          </div>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};
