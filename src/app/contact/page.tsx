import type { Metadata } from "next";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import ContactForm from "@/components/ui/contact-form";
import { contactTopics } from "@/content/products";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Found a bug, got a question about one of my apps, or have an idea? Send me a message.",
  alternates: { canonical: "/contact" },
};

const NAV: HeaderLink[] = [
  { label: "Apps", href: "/#apps" },
  { label: "Games", href: "/#games" },
  { label: "Web apps", href: "/#web" },
  { label: "About", href: "/about" },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader links={NAV} />

      <main className="site-container flex flex-wrap gap-14 py-24">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
          <h1 className="m-0 font-display text-[clamp(44px,6vw,72px)] font-bold leading-none tracking-[-0.03em]">
            Got something brewing?
          </h1>
          <p className="m-0 text-lg leading-[1.6] text-muted">
            Found a bug, got a question about one of my apps, or have an idea?
            Send me a message.
          </p>
          <p className="m-0 text-base text-muted">
            Prefer email? I&apos;m at{" "}
            <a
              href="mailto:hello@madstone.dev"
              className="text-ink underline underline-offset-2 hover:text-accent"
            >
              hello@madstone.dev
            </a>
            . For business and client work, that goes through{" "}
            <a
              href="https://ravenci.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-2 hover:text-accent"
            >
              RAVENCI
            </a>
            .
          </p>
        </div>
        <ContactForm topics={contactTopics} />
      </main>

      <SiteFooter />
    </>
  );
}
