import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
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
        <CardTitle className="text-lg md:text-xl">Welcome back!</CardTitle>
        <CardDescription className="text-xs md:text-sm">Enter your credentials below to login.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default Login;
