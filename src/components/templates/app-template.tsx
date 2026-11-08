import Link from "next/link";

import SiteHeader, { type HeaderLink } from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import NotifyForm from "@/components/ui/notify-form";
import type { Product } from "@/content/products";

const storeBtn =
  "inline-flex items-center gap-2 rounded-[14px] bg-bg px-6 py-[15px] text-[15px] font-semibold text-ink no-underline";

export default function AppTemplate({ product }: { product: Product }) {
  const nav: HeaderLink[] = [
    { label: "Features", href: "#features" },
    ...(product.privacyRows || product.privacyUrl
      ? [{ label: "Privacy", href: "#privacy" }]
      : []),
    { label: "Support", href: "#support" },
    { label: "All apps", href: "/#apps" },
  ];

  const hasStore = Boolean(product.store?.appStore || product.store?.googlePlay);
  const privacyHref = product.privacyPath || product.privacyUrl;
  const privacyExternal = Boolean(product.privacyUrl && !product.privacyPath);

  return (
    <div className="on-dark min-h-dvh bg-dark text-bg">
      <SiteHeader links={nav} theme="dark" />

      <main>
        {/* Hero */}
        <section className="site-container flex flex-wrap items-center gap-16 py-[88px]">
          <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] border border-dark-line bg-dark-surface-2">
                <span className="font-display text-2xl font-bold text-accent-dark">
                  {product.name.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-xl font-semibold">
                  {product.name}
                </span>
                <span className="font-mono text-[13px] text-dark-muted-2">
                  {[product.category, product.priceLabel]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </div>
            </div>

            <h1 className="m-0 font-display text-[clamp(48px,6.5vw,92px)] font-bold leading-[0.95] tracking-[-0.04em]">
              {product.ogTagline ?? product.name}
            </h1>
            <p className="m-0 max-w-[560px] text-xl leading-[1.55] text-dark-muted">
              {product.heroBody ?? product.tagline}
            </p>
            {product.operatedBy && (
              <p className="m-0 font-mono text-[13px] text-dark-muted-2">
                A {product.operatedBy} product
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {hasStore ? (
                <>
                  {product.store?.appStore && (
                    <a
                      href={product.store.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={storeBtn}
                    >
                      Download on the App Store
                    </a>
                  )}
                  {product.store?.googlePlay && (
                    <a
                      href={product.store.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={storeBtn}
                    >
                      Get it on Google Play
                    </a>
                  )}
                </>
              ) : (
                product.externalUrl && (
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={storeBtn}
                  >
                    {product.externalLabel ?? "Open the web app"} →
                  </a>
                )
              )}
            </div>

            {product.platforms.length > 0 && (
              <span className="font-mono text-[13px] text-dark-muted-2">
                {product.platforms.join(" · ")}
              </span>
            )}

            {product.notify && (
              <div className="max-w-[460px] border-t border-dark-line pt-5">
                <NotifyForm
                  productKey={product.notify.key}
                  label={product.notify.label}
                  tone="dark"
                />
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-[1_1_320px] justify-center gap-5">
            <div className="flex h-[500px] w-[240px] items-center justify-center rounded-[44px] border-[10px] border-dark-line bg-dark-surface-2 p-6 text-center font-mono text-[13px] text-dark-muted-2">
              [Screenshot — {product.name}]
            </div>
          </div>
        </section>

        {/* Features (light band) */}
        {product.features && product.features.length > 0 && (
          <section id="features" className="bg-bg text-ink">
            <div className="site-container flex flex-col gap-12 py-[104px]">
              <h2 className="m-0 max-w-[720px] text-5xl leading-[1.05]">
                Features
              </h2>
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
            </div>
          </section>
        )}

        {/* Privacy (data table) — apps with their own privacy summary */}
        {product.privacyRows && product.privacyRows.length > 0 && (
          <section
            id="privacy"
            className="site-container flex flex-wrap gap-14 py-[104px]"
          >
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent-dark">
                Privacy
              </span>
              <h2 className="m-0 text-5xl leading-[1.05]">
                What {product.name} does with your data
              </h2>
            </div>
            <dl className="m-0 flex min-w-0 flex-[999_1_520px] flex-col border-t border-dark-line">
              {product.privacyRows.map((row) => (
                <div
                  key={row.term}
                  className="flex flex-wrap gap-x-8 gap-y-2 border-b border-dark-line py-6"
                >
                  <dt className="flex-[0_0_200px] font-semibold">{row.term}</dt>
                  <dd className="m-0 flex-[1_1_300px] leading-[1.6] text-dark-muted">
                    {row.detail}
                  </dd>
                </div>
              ))}
              {privacyHref && (
                <div className="pt-5">
                  <PrivacyLink href={privacyHref} external={privacyExternal} />
                </div>
              )}
            </dl>
          </section>
        )}

        {/* About panel — web apps with a planned mobile app */}
        {!product.privacyRows &&
          product.aboutParagraphs &&
          product.aboutParagraphs.length > 0 && (
            <section
              id="privacy"
              className="site-container flex flex-wrap gap-14 py-[104px]"
            >
              <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3">
                <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent-dark">
                  {product.aboutHeading ? "About" : "Privacy"}
                </span>
                <h2 className="m-0 text-5xl leading-[1.05]">
                  {product.aboutHeading ?? "About this app"}
                </h2>
              </div>
              <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5 text-lg leading-[1.7] text-dark-muted">
                {product.aboutParagraphs.map((p, i) => (
                  <p key={i} className="m-0">
                    {p}
                  </p>
                ))}
                {privacyHref && (
                  <PrivacyLink href={privacyHref} external={privacyExternal} />
                )}
              </div>
            </section>
          )}

        {/* Support / FAQ */}
        <section id="support" className="border-t border-dark-line">
          <div className="site-container flex flex-wrap gap-14 py-[104px]">
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent-dark">
                Support
              </span>
              <h2 className="m-0 text-5xl leading-[1.05]">
                {product.faq && product.faq.length > 0 ? "FAQ" : "Get help"}
              </h2>
              {product.supportEmail && (
                <p className="m-0 text-[17px] leading-[1.6] text-dark-muted">
                  Having trouble? Email me at{" "}
                  <a
                    href={`mailto:${product.supportEmail}`}
                    className="text-bg underline underline-offset-2 hover:text-accent-dark"
                  >
                    {product.supportEmail}
                  </a>{" "}
                  and let me know what device you&apos;re using.
                </p>
              )}
            </div>

            {product.faq && product.faq.length > 0 && (
              <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-3">
                {product.faq.map((item) => (
                  <details
                    key={item.q}
                    className="rounded-2xl border border-dark-line bg-dark-surface px-6 py-5"
                  >
                    <summary className="cursor-pointer text-[17px] font-semibold">
                      {item.q}
                    </summary>
                    <p className="mt-3 mb-0 leading-[1.6] text-dark-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}

function PrivacyLink({ href, external }: { href: string; external: boolean }) {
  const className =
    "font-semibold text-bg underline underline-offset-2 hover:text-accent-dark";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        Read the full privacy policy →
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      Read the full privacy policy →
    </Link>
  );
}
