import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import { cookies } from "next/headers";
import Providers from "./providers";
import { cn } from "@/utils/styles";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { Metadata } from "next/types";
import { fontSans } from "@/lib/fonts";
import { SiteFooter } from "./_components/site-footer";
import { useVisitorSession } from "@/components/hooks/useVisitorSession";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "kasutu",
      url: "https://jeromecabugwason.com",
    },
  ],
  creator: "kasutu",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@dev_kasutu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="container relative">{children}</main>
              <SiteFooter />
            </div>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
