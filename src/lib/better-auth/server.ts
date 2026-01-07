import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth/minimal";
import { nextCookies } from "better-auth/next-js";
import { emailVerificationHtml, emailVerificationText } from "@/lib/emails/email-verification";
import { getTestMessageUrl, transporter } from "@/lib/nodemailer";
import { db } from "@/lib/prisma";
import { resetPasswordHtml, resetPasswordText } from "../emails/reset-password";

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
    resetPasswordTokenExpiresIn: 60 * 60 * 24 * 1, // Seconds * Minutes * Hours * Days
    sendResetPassword: async ({ user: { name, email }, url }) => {
      const result = await transporter.sendMail({
        from: "BetterAuth Organization <support@betterauth-org.com",
        to: email,
        subject: "Reset your password",
        text: await resetPasswordText(name, url, "24 hours"),
        html: await resetPasswordHtml(name, url, "24 hours"),
      });
      console.log({ url });
      console.log("Preview: %s", getTestMessageUrl(result));
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignIn: true,
    sendOnSignUp: true,
    expiresIn: 60 * 60 * 24 * 1, // Seconds * Minutes * Hours * Days
    sendVerificationEmail: async ({ user: { name, email }, url }) => {
      const result = await transporter.sendMail({
        from: "BetterAuth Organization <support@betterauth-org.com",
        to: email,
        subject: "Verify your email",
        text: await emailVerificationText(name, url, "24 hours"),
        html: await emailVerificationHtml(name, url, "24 hours"),
      });
      console.log({ url });
      console.log("Preview: %s", getTestMessageUrl(result));
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // Seconds * Minutes * Hours * Days
    updateAge: 60 * 60 * 24 * 1, // Seconds * Minutes * Hours * Days
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 1, // Seconds * Minutes * Hours * Days
    },
  },
  plugins: [nextCookies()],
});
