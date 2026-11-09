import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "About Richard",
  description:
    "The story behind MadStoneDev, a one-person studio in Australia building apps, games and web apps that fill real gaps instead of copying what already works.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Richard — MadStoneDev",
    description:
      "A one-person studio in Australia. I build apps, games and web apps that fill the gaps the copycats miss.",
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
  {
    when: "2016",
    what: "Diploma of Graphic Design and a Certificate in Journalism",
  },
  { when: "2023", what: "Started MadStoneDev" },
  {
    when: "2023",
    what: "LFU Companion, my first app on the App Store and Google Play",
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
              MadStoneDev came out of a passion to build and make what is genuinely missing. Imitations and copycat projects are saturating every market and people have forgotten that drive to make something crazy. Like solve a problem.
            </p>
          </div>
          {/*<div className="flex aspect-[4/5] min-w-0 flex-[1_1_320px] max-w-[420px] items-center justify-center rounded-[28px] bg-line-strong p-6 text-center font-mono text-[13px] text-muted">*/}
          {/*  [Photo of you, optional]*/}
          {/*</div>*/}
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
                up in Sydney, and I was building websites and software long before
                anyone paid me to.
              </p>
              <p className="m-0">
                My very first program was written in Visual Basic 6 for those who know it. Throughout the years, I coded in Basic, PHP, JavaScript, Python, C#, Ruby and Node. I feel like I'm missing some stuff but you get the idea. I love to code.  
              </p>
              <p className="m-0">
                MadStoneDev came out of wanting to build things that fill gaps in the market. If you are after any type of app or game or website, I guarantee you won't find just one result. That's actually a good thing. The problem isn't in having many choices, it's in the fact that so many apps or games or websites are almost exact copies of whatever worked for someone else.  
              </p>
              <p className="m-0">
                That's not what I'm about. I may make another note app, or another puzzle game or even yet another compass but not just because I'm filling gaps that all the others are missing. That's the point of MadStoneDev.
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
                Most of my apps start because something annoyed me. Honestly, that's it in summary. It only takes a few issues in a certain app and we all decide to start looking for an alternative and I got tired of switching apps.
              </p>
              <p className="m-0">
                I use what I build and, in some cases, every day.
                </p>
              <p className="m-0">
                Before any app I build, I ask three questions: 
              </p>
              <p className="m-0">
                Is there a problem that needs solving? Why don't the solutions out there solve it? How can I solve it?
              </p>
              <p className="m-0">
                Based on my own answers to those questions, I decide whether an app is worth the investment of time and money, or not. Not just for me to build it, but for people like you to use it too.
              </p>
            </div>
          </div>
        </section>

        {/* Away from the keyboard */}
        <section className="site-container flex flex-wrap gap-14 py-[88px]">
          <h2 className="m-0 flex-[1_1_320px] text-[40px] leading-[1.05]">
            AFK
          </h2>
          <p className="m-0 min-w-0 flex-[999_1_560px] text-lg leading-[1.7] text-body">
            If you spend a few moments looking at the apps I've build and am working on, you'll know exactly what I'm into when I'm not at my keyboard coding. Writing, reading, board games, trading card games, camping, watching good shows. Like I said before, I use what I build and, in some cases, every day. 
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
