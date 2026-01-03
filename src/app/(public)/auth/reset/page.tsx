import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Reset = () => {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden">
      <CardHeader className="text-center">
        <Image
          alt="Logo"
          height={50}
          src="https://github.com/m3h3d1ha2an/betterauth-nextjs/blob/main/public/betterauth.png?raw=true"
          width={50}
          className="mx-auto"
        />
        <CardTitle className="text-lg md:text-xl">Reset your password</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email address and we'll send you a 6-digit code to reset your account.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default Reset;
