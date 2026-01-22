import { Shield, User } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountForm } from "./auth/account-form";

type SettingsModalProps = { open: boolean; onOpenChange: Dispatch<SetStateAction<boolean>> };
export const SettingsDialog = ({ open, onOpenChange }: SettingsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl!">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Settings</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="account" orientation="vertical">
          <div className="bg-muted">
            <TabsList className="p-4 gap-4 w-40">
              <TabsTrigger value="account" className="text-base">
                <HugeiconsIcon icon={User} className="size-5" /> <p className="mt-1">Account</p>
              </TabsTrigger>
              <TabsTrigger value="security" className="text-base">
                <HugeiconsIcon icon={Shield} className="size-5" /> <p className="mt-1">Security</p>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="account" className="w-full max-w-7xl h-150">
            <AccountForm />
          </TabsContent>
          <TabsContent value="security" className="w-full max-w-7xl h-150">
            <div className="text-sm">Security settings content goes here...</div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
