import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";

// TODO(kasutu): change font to [future forces]
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
