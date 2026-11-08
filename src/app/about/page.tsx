import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "About Richard",
  description:
    "I'm Richard Haddad. I live just north of Brisbane and I've been writing code since I was 11. MadStoneDev is where I build my own apps and games.",
  openGraph: {
    title: "About Richard — MadStoneDev",
    description:
      "I'm Richard Haddad. MadStoneDev is where I build my own apps and games.",
  },
};

const NAV: HeaderLink[] = [
  { label: "Apps", href: "/#apps" },
  { label: "Games", href: "/#games" },
  { label: "Web apps", href: "/#web" },
  { label: "About", href: "/about", current: true },
  { label: "Get in touch", href: "/#contact" },
];

const TIMELINE: { when: string; what: string }[] = [
  { when: "Age 11", what: "Started coding" },
  { when: "[Year]", what: "Bachelor of Civil Engineering, UNSW (structural)" },
  {
    when: "[Years]",
    what: "Construction sites, steel detailing and structural drafting",
  },
  {
    when: "[Year]",
    what: "Diploma of Graphic Design and a Certificate in Journalism",
  },
  { when: "[Year]", what: "Started 1VINE Design, now RAVENCI Solutions" },
  {
    when: "[Year]",
    what: "Azimuth Compass, my first app on the App Store and Google Play",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader links={NAV} />

      <main>
        {/* Hero */}
        <section className="site-container flex flex-wrap items-center gap-14 py-24 pb-[72px]">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
            <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
              About
            </span>
            <h1 className="m-0 font-display text-[clamp(44px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]">
              The mad scientist
            </h1>
            <p className="m-0 max-w-[620px] text-xl leading-[1.6] text-body">
              I&apos;m Richard Haddad. I live just north of Brisbane, and
              I&apos;ve been writing code since I was 11. MadStoneDev is where I
              build my own apps and games.
            </p>
          </div>
          <div className="flex aspect-[4/5] min-w-0 flex-[1_1_320px] max-w-[420px] items-center justify-center rounded-[28px] bg-line-strong p-6 text-center font-mono text-[13px] text-muted">
            [Photo of you, optional]
          </div>
        </section>

        {/* How I got here */}
        <section className="border-t border-line">
          <div className="site-container flex flex-wrap gap-14 py-[88px]">
            <h2 className="m-0 flex-[1_1_320px] text-[40px] leading-[1.05]">
              How I got here
            </h2>
            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5 text-lg leading-[1.7] text-body">
              <p className="m-0">
                I was born overseas and came to Australia when I was 10. I grew
                up in Sydney, and I was building websites as a hobby long before
                anyone paid me to.
              </p>
              <p className="m-0">
                I studied civil engineering at UNSW and specialised in
                structural. After that I worked on construction sites, then in
                steel detailing and structural drafting. At one firm I ended up
                setting up the IT for their Brisbane office and writing tools to
                speed up everyone&apos;s work, which told me where I really
                wanted to be.
              </p>
              <p className="m-0">
                About 8 years ago I started my own agency, now RAVENCI
                Solutions, building websites and doing SEO for small businesses.
                That&apos;s still my day job. MadStoneDev is the other side: apps
                and games I want to exist, built my way.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-t border-line">
          <div className="site-container flex flex-wrap gap-14 py-[88px]">
            <h2 className="m-0 flex-[1_1_320px] text-[40px] leading-[1.05]">
              Along the way
            </h2>
            <ol className="m-0 min-w-0 flex-[999_1_560px] list-none border-t border-line p-0">
              {TIMELINE.map((t) => (
                <li
                  key={t.what}
                  className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-[22px]"
                >
                  <span className="flex-[0_0_160px] font-mono text-sm text-muted">
                    {t.when}
                  </span>
                  <span className="flex-[1_1_320px] text-lg">{t.what}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* How I build things */}
        <section className="on-dark bg-ink text-bg">
          <div className="site-container flex flex-wrap gap-14 py-[88px]">
            <h2 className="m-0 flex-[1_1_320px] text-[40px] leading-[1.05]">
              How I build things
            </h2>
            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5 text-lg leading-[1.7] text-dark-muted">
              <p className="m-0">
                Most of my apps start because something annoyed me. Azimuth came
                from a camping trip when a friend in the army was talking about
                prismatic compasses. JustNoted started because I wanted a
                notepad I could trust. I use what I build, every day in some
                cases.
              </p>
              <p className="m-0">
                I don&apos;t put ads in my apps. If something costs money to run,
                I&apos;d rather charge a small amount for it than sell your
                attention.
              </p>
            </div>
          </div>
        </section>

        {/* Away from the keyboard */}
        <section className="site-container flex flex-wrap gap-14 py-[88px]">
          <h2 className="m-0 flex-[1_1_320px] text-[40px] leading-[1.05]">
            Away from the keyboard
          </h2>
          <p className="m-0 min-w-0 flex-[999_1_560px] text-lg leading-[1.7] text-body">
            [A few lines about you. For example: camping and 4WD trips, board
            games and trading card games, running D&amp;D campaigns, writing
            fantasy.]
          </p>
        </section>

        {/* CTA */}
        <section className="border-t border-line">
          <div className="site-container flex flex-wrap items-center justify-between gap-6 py-[88px]">
            <h2 className="m-0 font-display text-5xl leading-none tracking-[-0.03em]">
              Got something brewing?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="rounded-full bg-accent px-[26px] py-[15px] font-semibold text-white no-underline"
              >
                Send me a message
              </Link>
              <a
                href="https://ravenci.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-[1.5px] border-ink px-[26px] py-[15px] font-semibold text-ink no-underline"
              >
                Business work: RAVENCI
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
