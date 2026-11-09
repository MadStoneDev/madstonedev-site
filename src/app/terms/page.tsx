import type { Metadata } from "next";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the madstone.dev website.",
  alternates: { canonical: "/terms" },
};

const NAV: HeaderLink[] = [
  { label: "Apps", href: "/#apps" },
  { label: "Games", href: "/#games" },
  { label: "Web apps", href: "/#web" },
  { label: "About", href: "/about" },
  { label: "Get in touch", href: "/#contact" },
];

export default function TermsPage() {
  return (
    <>
      <SiteHeader links={NAV} />

      <main className="site-container max-w-[760px] py-20">
        <h1 className="m-0 font-display text-[clamp(40px,6vw,64px)] font-bold leading-[0.98] tracking-[-0.035em]">
          Terms
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: 9 November 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-lg leading-[1.75] text-body">
          <p className="m-0">
            This is the website for MadStoneDev, where I publish my own apps and
            games. Based and made entirely here in Australia, only!
          </p>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">Using this site</h2>
            <p className="m-0">
              You&apos;re welcome to read and link to anything here. The site and
              its content are provided as they are, and I may change or update
              them at any time.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">The apps</h2>
            <p className="m-0">
              Each app has its own terms and privacy policy. When you use one of
              my apps, those terms apply to that app, not these.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">Business and client work</h2>
            <p className="m-0">
              MadStoneDev is where I build my own things. If you need a website
              or software for your business, that goes through my agency,{" "}
              <a
                href="https://ravenci.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                RAVENCI Solutions
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="m-0 text-2xl text-ink">Contact</h2>
            <p className="m-0">
              Questions can be sent to{" "}
              <a
                href="mailto:hello@madstone.dev"
                className="text-accent underline underline-offset-2"
              >
                hello@madstone.dev
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
