"use client";

import { toast } from "sonner";
import z from "zod";
import { useAppForm } from "@/components/form/form-hooks";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/better-auth/client";

export const AccountForm = () => {
  const { data } = authClient.useSession();
  const form = useAppForm({
    defaultValues: {
      name: data?.user.name ?? "",
    },
    validators: {
      onSubmit: z.object({
        name: z
          .string()
          .trim()
          .min(2, "Name must be at least 2 characters long")
          .max(100, "Name must be at most 100 characters long"),
      }),
    },
    onSubmit: async ({ value }) => {
      await authClient.updateUser(
        { name: value.name },
        {
          onSuccess: () => {
            toast.success("Account updated successfully.");
          },
          onError: (error) => {
            console.error(error);
            toast.error(error.error.message || "Failed to update account. ");
          },
        },
      );
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="w-full px-4"
    >
      <form.AppField name="name">
        {(field) => (
          <field.Input
            label="Display Name"
            description="Please enter your full name, or a display name you are comfortable with."
          />
        )}
      </form.AppField>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" className="text-base mt-2" disabled={!canSubmit}>
            {isSubmitting && <Spinner />}
            Save Changes
          </Button>
        )}
      />
    </form>
  );
};
