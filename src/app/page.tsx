import Link from "next/link";
import Image from "next/image";
import { Compass, Send, FileText } from "lucide-react";

import alCutout from "../../public/bustin-out-al-cutout.png";
import tonyCutout from "../../public/bustin-out-tony-cutout.png";
import vonDittoCutout from "../../public/bustin-out-vonditto-cutout.png";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import Chip from "@/components/site/chip";
import NotifyForm from "@/components/ui/notify-form";
import ContactForm from "@/components/ui/contact-form";
import {
  getProduct,
  productsByType,
  contactTopics,
  type Product,
} from "@/content/products";

const NAV: HeaderLink[] = [
  { label: "Apps", href: "#apps" },
  { label: "Games", href: "#games" },
  { label: "Web tools", href: "#web" },
  { label: "About", href: "/about" },
  { label: "Get in touch", href: "#contact" },
];

const pillPrimary =
  "inline-flex items-center gap-2 rounded-full bg-ink px-[26px] py-[15px] text-base font-semibold text-bg no-underline";
const pillOutline =
  "inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-[26px] py-[15px] text-base font-semibold text-ink no-underline";
const storeBtn =
  "inline-flex items-center gap-2.5 rounded-[14px] bg-bg px-[22px] py-3.5 text-[15px] font-semibold text-ink no-underline";

function BarsIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 3v18M12 3v18M16 3v18" />
    </svg>
  );
}

export default function HomePage() {
  const azimuth = getProduct("azimuth")!;
  const justsent = getProduct("justsent")!;
  const justnoted = getProduct("justnoted")!;
  const bustin = getProduct("bustin-out")!;
  const webApps = productsByType("web");

  const mobileCards: { product: Product; icon: typeof Send }[] = [
    { product: justsent, icon: Send },
    { product: justnoted, icon: FileText },
  ];

  return (
    <>
      <SiteHeader links={NAV} />

      <main id="top">
        {/* Hero */}
        <section className="site-container flex flex-wrap items-center gap-14 py-24 pb-[72px]">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
            <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              MadStoneDev · Brisbane, Australia
            </span>
            <h1 className="m-0 font-display text-[clamp(44px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]">
              Perfecting the method,
              <br />
              embracing the madness.
            </h1>
            <p className="m-0 max-w-[600px] text-xl leading-[1.55] text-body">
              I&apos;m Richard. I make mobile apps, games and web apps, usually
              because I wanted something and couldn&apos;t find it. Things might
              go boom, but I promise you&apos;ll enjoy my projects until that
              point.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#apps" className={pillPrimary}>
                Browse the Lab
              </Link>
              <Link href="#contact" className={pillOutline}>
                Get in touch
              </Link>
            </div>
          </div>

          <div className="grid min-w-0 flex-[1_1_340px] grid-cols-2 gap-4">
            <div className="flex aspect-square items-center justify-center rounded-[28px] bg-ink text-accent-dark">
              <Compass size={72} strokeWidth={1.5} aria-label="Azimuth" />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-[28px] bg-accent text-white">
              <Send size={72} strokeWidth={1.5} aria-label="JustSent" />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-[28px] border border-line bg-surface text-ink">
              <FileText size={72} strokeWidth={1.5} aria-label="JustNoted" />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-[28px] bg-game text-ink">
              <BarsIcon />
            </div>
          </div>
        </section>

        {/* Mobile apps */}
        <section
          id="apps"
          className="site-container flex flex-col gap-10 pt-[104px] pb-10"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                The Laboratory
              </span>
              <h2 className="m-0 text-5xl leading-[1.05]">Mobile apps</h2>
            </div>
            <p className="m-0 max-w-[420px] text-[17px] leading-[1.55] text-muted">
              Some are out, some are still cooking.
            </p>
          </div>

          {/* Featured: Azimuth */}
          <article className="on-dark flex flex-wrap items-center gap-12 rounded-[32px] bg-ink p-8 text-bg sm:p-12">
            <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-5">
              <div className="flex flex-wrap gap-2.5">
                <Chip variant="accent-dark">Out now</Chip>
                <Chip variant="outline" onDark>
                  iPhone · Android
                </Chip>
                <Chip variant="outline" onDark>
                  Free
                </Chip>
              </div>
              <h3 className="m-0 font-display text-[clamp(40px,5vw,56px)] leading-none tracking-[-0.03em]">
                {azimuth.name}
              </h3>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.55] text-dark-muted">
                {azimuth.tagline} Point it at a landmark, lock the bearing and it
                tells you which way to turn. Degrees or NATO mils, true or
                magnetic north.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={azimuth.store?.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={storeBtn}
                >
                  App Store
                </a>
                <a
                  href={azimuth.store?.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={storeBtn}
                >
                  Google Play
                </a>
                <Link
                  href={`/${azimuth.slug}`}
                  className="px-2 py-3.5 font-semibold text-bg no-underline hover:text-accent-dark"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="flex min-w-0 flex-[1_1_240px] justify-center">
              <div className="relative h-[480px] w-[240px] overflow-hidden rounded-[44px] border-[10px] border-dark-line bg-dark-surface-2">
                <Image
                  src="/azimuth-screenshot.jpg"
                  alt="Azimuth Compass showing an 018 degree true-north bearing on the compass dial"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </article>

          {/* JustSent + JustNoted cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {mobileCards.map(({ product, icon: Icon }) => (
              <article
                key={product.slug}
                className="flex flex-col gap-[18px] rounded-[28px] border border-line bg-surface p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-bg">
                    <Icon size={30} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <Chip variant="solid">{product.statusLabel}</Chip>
                </div>
                <h3 className="m-0 font-display text-3xl tracking-[-0.02em]">
                  {product.name}
                </h3>
                <p className="m-0 text-base leading-[1.6] text-muted">
                  {product.tagline}
                </p>
                <div className="mt-auto flex flex-wrap gap-4 pt-2">
                  <Link
                    href={`/${product.slug}`}
                    className="font-semibold text-ink no-underline hover:text-accent"
                  >
                    More about {product.name} →
                  </Link>
                </div>
                {product.notify && (
                  <div className="border-t border-line pt-[18px]">
                    <NotifyForm
                      productKey={product.notify.key}
                      label={product.notify.label}
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Games */}
        <section
          id="games"
          className="site-container flex flex-col gap-8 pt-[72px] pb-10"
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
              Coming soon
            </span>
            <h2 className="m-0 text-5xl leading-[1.05]">Games</h2>
          </div>

          <article className="flex flex-wrap items-center gap-10 rounded-[32px] bg-game p-8 sm:p-12">
            <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-5">
              <Chip variant="game" className="self-start">
                In development · iPhone &amp; Android
              </Chip>
              <h3 className="m-0 font-display text-[clamp(40px,5vw,56px)] leading-none tracking-[-0.03em] text-ink">
                {bustin.name}
              </h3>
              <p className="m-0 max-w-[560px] text-[19px] leading-[1.55] text-[#2B2A25]">
                Al Cologne, Tony Oregano and Von Ditto Funnybone got framed for
                the heist they&apos;d been planning for years. Now they want out.
                Each of them moves differently, so you&apos;ll have to work out
                who goes where to get them out of each room. Turn-based puzzles,
                no ads.
              </p>
              <Link
                href={`/${bustin.slug}`}
                className="self-start font-semibold text-ink no-underline hover:text-accent"
              >
                More about the game →
              </Link>
              {bustin.notify && (
                <NotifyForm
                  productKey={bustin.notify.key}
                  label={bustin.notify.label}
                  tone="game"
                />
              )}
            </div>
            <div className="flex min-w-0 flex-[1_1_300px] items-end justify-center gap-2 sm:gap-4">
              <Image
                src={tonyCutout}
                alt="Tony Oregano"
                className="h-[150px] w-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] sm:h-[180px]"
              />
              <Image
                src={alCutout}
                alt="Al Cologne"
                className="h-[170px] w-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] sm:h-[205px]"
              />
              <Image
                src={vonDittoCutout}
                alt="Von Ditto Funnybone"
                className="h-[185px] w-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] sm:h-[220px]"
              />
            </div>
          </article>
        </section>

        {/* Web apps */}
        <section
          id="web"
          className="site-container flex flex-col gap-8 pt-[72px] pb-[104px]"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                The Laboratory
              </span>
              <h2 className="m-0 text-5xl leading-[1.05]">Web apps</h2>
            </div>
            <p className="m-0 max-w-[420px] text-[17px] leading-[1.55] text-muted">
              Things I&apos;ve built for the browser.
            </p>
          </div>

          <ul className="m-0 list-none border-t border-line p-0">
            {webApps.map((app, i) => {
              const href = app.hasPage ? `/${app.slug}` : app.externalUrl!;
              const external = !app.hasPage;
              return (
                <li key={app.slug} className="border-b border-line">
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex flex-wrap items-baseline gap-x-8 gap-y-2 px-1 py-6 no-underline"
                  >
                    <span className="w-8 font-mono text-[13px] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-[0_0_240px] font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                      {app.name}
                    </span>
                    <span className="flex-[1_1_320px] text-base text-muted">
                      {app.listNote ?? app.tagline}
                    </span>
                    <span className="font-mono text-[13px] text-body">
                      {app.statusLabel}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* About teaser */}
        <section id="about" className="on-dark bg-ink text-bg">
          <div className="site-container flex flex-wrap gap-14 py-[104px]">
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent-dark">
                About
              </span>
              <h2 className="m-0 text-5xl leading-[1.05]">The mad scientist</h2>
            </div>
            <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5 text-lg leading-[1.65] text-dark-muted">
              <p className="m-0">
                I&apos;ve been coding since I was 11. I studied civil
                engineering, spent years in steel detailing and structural
                drafting, and I&apos;ve run my own web agency for about 8 years.
                MadStoneDev is where I build my own stuff.
              </p>
              <p className="m-0">
                Azimuth started on a camping trip. A friend in the army was
                talking about prismatic compasses, and I couldn&apos;t find a
                single app that used the camera to do it. So I built one.
              </p>
              <p className="m-0">
                If you need a website or software for your business, I do that
                through my agency,{" "}
                <a
                  href="https://ravenci.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bg underline underline-offset-2 hover:text-accent-dark"
                >
                  RAVENCI Solutions
                </a>
                .
              </p>
              <Link
                href="/about"
                className="font-semibold text-bg no-underline hover:text-accent-dark"
              >
                More about me →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="site-container flex flex-wrap gap-14 py-[104px]"
        >
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
            <h2 className="m-0 font-display text-[clamp(40px,5vw,56px)] leading-none tracking-[-0.03em]">
              Got something brewing?
            </h2>
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
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
