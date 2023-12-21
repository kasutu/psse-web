import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import { cookies } from "next/headers";
import { Inter as FontSans } from "next/font/google";
import Providers from "./providers";
import { cn } from "@/utils/styles";

// TODO(kasutu): change font to [future forces]
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ninjas Esports",
  description: "Play, build, commit, and enjoy with PSSE Ninjas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <Providers>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
