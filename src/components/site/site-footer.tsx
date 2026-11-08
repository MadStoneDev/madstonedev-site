import Link from "next/link";

interface SiteFooterProps {
  theme?: "light" | "dark";
}

const YEAR = new Date().getFullYear();

export default function SiteFooter({ theme = "light" }: SiteFooterProps) {
  const dark = theme === "dark";

  const wrap = dark
    ? "bg-dark text-dark-muted-2 on-dark"
    : "border-t border-line text-muted";
  const linkColor = dark ? "hover:text-bg" : "hover:text-accent";

  return (
    <footer className={wrap}>
      <div className="site-container flex flex-wrap justify-between gap-6 py-10 text-sm">
        <span>© {YEAR} MadStoneDev · Brisbane, Australia</span>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/privacy"
            className={`no-underline text-inherit ${linkColor}`}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className={`no-underline text-inherit ${linkColor}`}
          >
            Terms
          </Link>
          <a
            href="https://ravenci.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className={`no-underline text-inherit ${linkColor}`}
          >
            RAVENCI Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
