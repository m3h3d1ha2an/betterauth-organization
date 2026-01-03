"use client";

import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { loginSchema } from "@/schemas/login";
import { loginDefaults } from "@/types/login";
import { useAppForm } from "./form/hook";
import { Spinner } from "./ui/spinner";

export const LoginForm = () => {
  const form = useAppForm({
    defaultValues: loginDefaults,
    validators: { onSubmit: loginSchema },
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
      <FieldGroup>
        <form.AppField name="username">{(field) => <field.Input label="Username" />}</form.AppField>
        <form.AppField name="password">{(field) => <field.Input label="Password" type="password" />}</form.AppField>
        <Field orientation="horizontal">
          <form.AppField name="remember">{(field) => <field.Checkbox label="Remember me" horizontal />}</form.AppField>
          <Link href="/auth/reset">
            <Button type="button" variant="link" className="text-sm">
              Forgot password?
            </Button>
          </Link>
        </Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" className="hover:bg-blue-800 text-base" disabled={!canSubmit} >
              {isSubmitting && <Spinner />}
              Login
            </Button>
          )}
        />
        <div className="flex items-center justify-center text-sm">
          Don't have an account?
          <Link href="/auth/signup">
            <Button type="button" variant="link" className="text-sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </FieldGroup>
    </form>
  );
};
