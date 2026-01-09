import { redirect } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCurrentUser } from "@/lib/queries";

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center relative">
      <ThemeToggle className="absolute top-4 right-4" size="icon-lg" variant="outline" />
      {children}
    </main>
  );
};
export default PrivateLayout;
