import "./globals.css";

import { ReactNode } from "react";
import { Lexend, Lilita_One } from "next/font/google";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-dvh bg-neutral-900 ${lexend.variable} ${lilitaOne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
