// app/about/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MadStoneDev - Where Brilliance Meets Madness",
  description:
    "Learn about MadStoneDev's philosophy of breaking conventions and building digital experiences that matter. Full-stack development with creativity and purpose.",
  keywords: [
    "web development",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "creative development",
    "digital solutions",
  ],
  openGraph: {
    title: "About MadStoneDev - Where Brilliance Meets Madness",
    description:
      "Breaking conventions and building digital experiences that matter.",
    url: "https://madstonedev.com/about",
    siteName: "MadStoneDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MadStoneDev",
    description:
      "Breaking conventions and building digital experiences that matter.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
