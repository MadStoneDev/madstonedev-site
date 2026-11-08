import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import Chip from "@/components/site/chip";
import NotifyForm from "@/components/ui/notify-form";
import type { Product, CrewMember } from "@/content/products";

const crewBg: Record<CrewMember["colorToken"], string> = {
  al: "bg-al",
  tony: "bg-tony",
  vonditto: "bg-vonditto",
};

export default function GameTemplate({ product }: { product: Product }) {
  const nav: HeaderLink[] = [
    { label: "The crew", href: "#crew" },
    { label: "How it plays", href: "#how" },
    { label: "Get notified", href: "#notify" },
    { label: "All games", href: "/#games" },
  ];

  return (
    <div className="min-h-dvh bg-game text-ink">
      <SiteHeader links={nav} />

      <main>
        {/* Hero */}
        <section className="site-container flex flex-wrap items-center gap-14 py-[88px]">
          <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-6">
            <Chip variant="game" className="self-start">
              Coming to iPhone and Android
            </Chip>
            <h1 className="m-0 font-display text-[clamp(56px,8vw,112px)] font-bold leading-[0.92] tracking-[-0.045em]">
              {product.name}
            </h1>
            <p className="m-0 max-w-[560px] text-[21px] leading-[1.55] text-[#2B2A25]">
              {product.heroBody ?? product.tagline}
            </p>
            {product.notify && (
              <div id="notify" className="max-w-[560px] scroll-mt-28">
                <NotifyForm
                  productKey={product.notify.key}
                  label={product.notify.label}
                  tone="game"
                />
              </div>
            )}
          </div>
          <div className="flex aspect-[4/3] min-w-0 flex-[1_1_380px] items-center justify-center rounded-[32px] bg-ink p-6 text-center font-mono text-[13px] text-dark-muted-2">
            [Key art or trailer still — the trio in a cell]
          </div>
        </section>

        {/* The crew */}
        {product.crew && product.crew.length > 0 && (
          <section id="crew" className="on-dark bg-ink text-bg">
            <div className="site-container flex flex-col gap-12 py-[104px]">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-game">
                  The crew
                </span>
                <h2 className="m-0 text-5xl leading-[1.05]">
                  Each one moves differently
                </h2>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                {product.crew.map((c) => (
                  <article
                    key={c.name}
                    className="flex flex-col overflow-hidden rounded-[28px] border border-dark-line bg-dark-surface"
                  >
                    <div
                      className={`flex h-[260px] items-center justify-center font-mono text-[13px] text-ink ${crewBg[c.colorToken]}`}
                    >
                      [{c.name} character art]
                    </div>
                    <div className="flex flex-col gap-3 p-7">
                      <span className="font-mono text-[13px] text-dark-muted-2">
                        {c.role}
                      </span>
                      <h3 className="m-0 text-[28px] tracking-[-0.02em]">
                        {c.name}
                      </h3>
                      <p className="m-0 text-base leading-[1.6] text-dark-muted">
                        {c.moves}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How it plays */}
        {product.mechanics && product.mechanics.length > 0 && (
          <section id="how" className="bg-bg text-ink">
            <div className="site-container flex flex-wrap gap-14 py-[104px]">
              <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                  How it plays
                </span>
                <h2 className="m-0 text-5xl leading-[1.05]">Room by room</h2>
                <p className="m-0 text-lg leading-[1.6] text-body">
                  It&apos;s turn-based, so take your time. Tap a character, move
                  them, and work out the order that gets everyone out without
                  getting caught.
                </p>
              </div>
              <div className="grid min-w-0 flex-[999_1_560px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                {product.mechanics.map((m) => (
                  <div
                    key={m.title}
                    className="flex flex-col gap-2 rounded-[20px] border border-line bg-surface p-6"
                  >
                    <h3 className="m-0 text-xl">{m.title}</h3>
                    <p className="m-0 text-[15px] leading-[1.55] text-muted">
                      {m.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Screenshots */}
        {product.screenshots && product.screenshots.length > 0 && (
          <section className="border-t border-line bg-bg text-ink">
            <div className="site-container flex flex-col gap-8 py-[88px]">
              <h2 className="m-0 text-[40px] leading-[1.05]">Screenshots</h2>
              <div className="flex gap-5 overflow-x-auto pb-2">
                {product.screenshots.map((shot) => (
                  <div
                    key={shot}
                    className="flex h-[500px] flex-[0_0_240px] items-center justify-center rounded-[36px] border-8 border-ink bg-line-strong p-5 text-center font-mono text-[13px] text-muted"
                  >
                    {shot}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What it costs */}
        {product.costRows && product.costRows.length > 0 && (
          <section className="border-t border-line bg-bg text-ink">
            <div className="site-container flex flex-wrap gap-14 py-[88px]">
              <h2 className="m-0 flex-[1_1_340px] text-[40px] leading-[1.05]">
                What it costs
              </h2>
              <dl className="m-0 min-w-0 flex-[999_1_560px] border-t border-line">
                {product.costRows.map((row) => (
                  <div
                    key={row.term}
                    className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-[22px]"
                  >
                    <dt className="flex-[0_0_200px] font-semibold">
                      {row.term}
                    </dt>
                    <dd className="m-0 flex-[1_1_300px] leading-[1.6] text-body">
                      {row.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* Launch note */}
        {product.launchNote && (
          <section className="bg-game">
            <div className="site-container flex flex-wrap items-center justify-between gap-8 py-[88px]">
              <div className="flex max-w-[620px] flex-col gap-3">
                <h2 className="m-0 font-display text-5xl leading-none tracking-[-0.03em]">
                  {product.launchNote.title}
                </h2>
                <p className="m-0 text-lg leading-[1.6] text-[#2B2A25]">
                  {product.launchNote.body}
                </p>
              </div>
              <a
                href="#notify"
                className="rounded-full bg-ink px-7 py-4 font-semibold text-bg no-underline"
              >
                Get notified
              </a>
            </div>
          </section>
        )}
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
