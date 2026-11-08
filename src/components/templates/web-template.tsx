import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import Chip from "@/components/site/chip";
import type { Product } from "@/content/products";

export default function WebTemplate({ product }: { product: Product }) {
  const nav: HeaderLink[] = [
    { label: "Features", href: "#features" },
    ...(product.plans && product.plans.length > 0
      ? [{ label: "Plans", href: "#plans" }]
      : []),
    { label: "All web apps", href: "/#web" },
  ];

  return (
    <>
      <SiteHeader links={nav} />

      <main>
        {/* Hero */}
        <section className="site-container flex flex-col gap-12 py-[88px] pb-16">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-[22px]">
              <div className="flex flex-wrap gap-2.5">
                <Chip variant="accent">Live</Chip>
                <Chip variant="outline">Web app</Chip>
                {product.plans?.some((p) => p.price === "A$0") && (
                  <Chip variant="outline">Free plan</Chip>
                )}
              </div>
              <h1 className="m-0 font-display text-[clamp(48px,6.5vw,92px)] font-bold leading-[0.95] tracking-[-0.04em]">
                {product.name}
              </h1>
              <p className="m-0 max-w-[620px] text-[21px] leading-[1.55] text-body">
                {product.heroBody ?? product.tagline}
              </p>
              {product.operatedBy && (
                <p className="m-0 font-mono text-[13px] text-muted">
                  A {product.operatedBy} product
                </p>
              )}
            </div>
            {product.externalUrl && (
              <div className="flex flex-wrap gap-3">
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-7 py-4 text-base font-semibold text-bg no-underline"
                >
                  {product.externalLabel ?? "Open"} →
                </a>
              </div>
            )}
          </div>
          <div className="flex aspect-video w-full items-center justify-center rounded-[28px] border border-line bg-surface font-mono text-[13px] text-muted">
            [Screenshot — {product.name}]
          </div>
        </section>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <section
            id="features"
            className="site-container flex flex-col gap-10 py-16 pb-[104px]"
          >
            <h2 className="m-0 text-5xl leading-[1.05]">Features</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px overflow-hidden rounded-3xl border border-line bg-line">
              {product.features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex flex-col gap-2.5 bg-surface p-8"
                >
                  <span className="font-mono text-[13px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 text-[22px] tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <p className="m-0 text-base leading-[1.55] text-muted">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About / Made in Australia */}
        {product.aboutParagraphs && product.aboutParagraphs.length > 0 && (
          <section className="on-dark bg-ink text-bg">
            <div className="site-container flex flex-wrap gap-14 py-24">
              <h2 className="m-0 flex-[1_1_340px] text-[40px] leading-[1.05]">
                {product.aboutHeading ?? "About"}
              </h2>
              <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-[18px] text-lg leading-[1.7] text-dark-muted">
                {product.aboutParagraphs.map((p, i) => (
                  <p key={i} className="m-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Plans */}
        {product.plans && product.plans.length > 0 && (
          <section
            id="plans"
            className="site-container flex flex-col gap-10 py-[104px]"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="m-0 text-5xl leading-[1.05]">Plans</h2>
              {product.plansNote && (
                <p className="m-0 text-base text-muted">{product.plansNote}</p>
              )}
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
              {product.plans.map((plan) => {
                const featured = plan.featured;
                return (
                  <article
                    key={plan.name}
                    className={`flex flex-col gap-3.5 rounded-3xl border p-7 ${
                      featured
                        ? "border-ink bg-ink text-bg"
                        : "border-line bg-surface text-ink"
                    }`}
                  >
                    <div className="flex min-h-7 items-center justify-between gap-2">
                      <h3 className="m-0 font-display text-2xl">{plan.name}</h3>
                      {featured && (
                        <span className="rounded-full bg-accent-dark px-2.5 py-[5px] font-mono text-[11px] text-ink">
                          Best value
                        </span>
                      )}
                    </div>
                    <span className="font-display text-4xl font-bold">
                      {plan.price}
                    </span>
                    <p className="m-0 text-[15px] leading-[1.55] opacity-85">
                      {plan.blurb}
                    </p>
                    {product.externalUrl && (
                      <a
                        href={product.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-auto rounded-full border-[1.5px] px-[18px] py-3 text-center font-semibold no-underline ${
                          featured
                            ? "border-bg text-bg"
                            : "border-ink text-ink"
                        }`}
                      >
                        {plan.cta}
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Built with */}
        {product.builtWith && product.builtWith.length > 0 && (
          <section className="border-t border-line">
            <div className="site-container flex flex-wrap items-center justify-between gap-6 py-[72px]">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
                  Built with
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {product.builtWith.map((tech) => (
                    <Chip key={tech} variant="outline">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
              {product.externalUrl && (
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-7 py-4 font-semibold text-white no-underline"
                >
                  {product.externalLabel ?? "Open"} →
                </a>
              )}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
