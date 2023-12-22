import { Button } from "./ui/button";

export function SignUp() {
  return (
    <Button variant={"default"} className="text-sm font-semibold">
      Sign up
    </Button>
  );
}

export function SignIn() {
  return (
    <Button variant={"ghost"} className="text-sm font-semibold">
      Sign in
    </Button>
  );
}
