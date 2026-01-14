// import { createAuthMiddleware } from "better-auth/api";
import type { AuthOptions } from "./server";

type BetterAuthHooksFunction = NonNullable<AuthOptions["hooks"]>;

export const betterAuthHooks: BetterAuthHooksFunction = {
  // after: createAuthMiddleware(async (payload) => {
    // =====================================================
    //  Send Welcome Mail After Sign Up Before Verification
    // =====================================================
    // if (payload.path.startsWith("/sign-up")) {
    //   const user = payload.context.newSession?.user ?? { name: payload.body.name, email: payload.body.email };
    //   if (user) {
    //     await sendWelcomeEmail(user.name, user.email);
    //   }
    // }
  // }),
};
