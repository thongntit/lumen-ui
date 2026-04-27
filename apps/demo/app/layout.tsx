import type { Metadata } from "next";
import { Inter, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
  adjustFontFallback: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Lumen — Landing pages that earn the click.",
  description:
    "Done-for-you landing pages for SMEs and modern brands. Brief Monday, ship Friday.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${ibmPlexMono.variable}`}
      style={{
        // Override Lumen's font stacks with Next-loaded variants for no-CLS swap
        // The fallback stack inside tokens.css still applies if these fail.
        ["--font-sans" as string]: `${inter.style.fontFamily}, ui-sans-serif, system-ui, sans-serif`,
        ["--font-serif" as string]: `${lora.style.fontFamily}, "Times New Roman", Georgia, serif`,
        ["--font-mono" as string]: `${ibmPlexMono.style.fontFamily}, ui-monospace, "SF Mono", Menlo, monospace`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
