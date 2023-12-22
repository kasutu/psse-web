"use client";

import { ThemeProvider } from "next-themes";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes/dist/themes/src/";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider
        afterSignInUrl="/"
        afterSignUpUrl="/"
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "blue" },
        }}
      >
        <ClerkLoaded>{children}</ClerkLoaded>
      </ClerkProvider>
    </ThemeProvider>
  );
}
