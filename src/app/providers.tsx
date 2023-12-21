import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider cookies={cookies().toString()}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TRPCReactProvider>
  );
}
