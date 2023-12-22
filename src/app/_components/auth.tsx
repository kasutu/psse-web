"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function SignUp() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/auth/sign-up")}
      variant={"default"}
      className="text-sm font-semibold"
    >
      Sign up
    </Button>
  );
}

export function SignIn() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/auth/sign-in")}
      variant={"ghost"}
      className="text-sm font-semibold"
    >
      Sign in
    </Button>
  );
}
