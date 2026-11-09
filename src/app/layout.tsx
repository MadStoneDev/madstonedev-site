import "./globals.css";

import type { Metadata } from "next";
import { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://madstone.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MadStoneDev — Perfecting the method, embracing the madness.",
    template: "%s — MadStoneDev",
  },
  description:
    `MadStoneDev came out of a passion to build and make what is genuinely missing. Imitations and copycat projects are saturating every market and people have forgotten that drive to make something crazy. Like solve a problem.`,
  applicationName: "MadStoneDev",
  authors: [{ name: "Richard Haddad" }],
  creator: "Richard Haddad",
  openGraph: {
    type: "website",
    siteName: "MadStoneDev",
    url: SITE_URL,
    title: "MadStoneDev — Perfecting the method, embracing the madness.",
    description:
      "Mobile apps, games and web apps, built in Brisbane, Australia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadStoneDev — Perfecting the method, embracing the madness.",
    description:
      "Mobile apps, games and web apps, built in Brisbane, Australia.",
  },
  icons: {
    icon: "/madstone-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-941WTWYYVW" />
    </html>
  );
}
