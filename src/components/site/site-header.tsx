import Link from "next/link";

export interface HeaderLink {
  label: string;
  href: string;
  current?: boolean;
}

interface SiteHeaderProps {
  links: HeaderLink[];
  /** "light" = paper background pages, "dark" = ink/app pages. */
  theme?: "light" | "dark";
}

export default function SiteHeader({ links, theme = "light" }: SiteHeaderProps) {
  const dark = theme === "dark";

  const borderColor = dark ? "border-dark-line" : "border-line";
  const linkColor = dark
    ? "text-bg hover:text-accent-dark"
    : "text-ink hover:text-accent";
  const logoBox = dark ? "bg-bg text-ink" : "bg-ink text-bg";
  const ctaBorder = dark ? "border-bg" : "border-ink";

  return (
    <header className={`border-b ${borderColor} ${dark ? "on-dark" : ""}`}>
      <nav
        aria-label="Main"
        className="site-container flex flex-wrap items-center justify-between gap-4 py-5"
      >
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span
            aria-hidden="true"
            className={`flex h-8 w-8 items-center justify-center rounded-lg font-display text-base font-bold ${logoBox}`}
          >
            M
          </span>
          <span
            className={`font-display text-[19px] font-bold tracking-[-0.01em] ${
              dark ? "text-bg" : "text-ink"
            }`}
          >
            MadStoneDev
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px] font-medium">
          {links.map((link) => {
            const isCta = link.label === "Get in touch";
            if (isCta) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-full border-[1.5px] px-[18px] py-2.5 no-underline ${ctaBorder} ${linkColor}`}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={`no-underline ${linkColor} ${
                  link.current ? "underline underline-offset-[6px]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
