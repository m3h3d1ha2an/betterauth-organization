"use server";

import { headers } from "next/headers";
import { auth } from "../server";

type SignInWithUsernameProps = {
  username: string;
  password: string;
  rememberMe: boolean;
  callbackURL: "/app/dashboard";
};

export const signinWithUsername = async (props: SignInWithUsernameProps) => {
  const { username, password, rememberMe, callbackURL } = props;
  try {
    const result = await auth.api.signInUsername({
      headers: await headers(),
      body: { username, password, rememberMe, callbackURL },
    });
  } catch (error) {
    console.error(error);
  }
};
