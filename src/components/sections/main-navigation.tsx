"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/madstone-logo.svg"
            alt="MadStone Logo"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-200">
            MADSTONE
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-10">
          <Link
            href="/"
            className={`relative text-sm text-center font-display transition-all duration-200 ${
              pathname === "/"
                ? "text-primary"
                : "text-white hover:text-primary"
            }`}
          >
            HOME
          </Link>

          <Link
            href="/#about"
            className={`relative text-sm text-center font-display transition-all duration-200 text-white hover:text-primary`}
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            className={`relative text-sm text-center font-display transition-all duration-200 ${
              pathname === "/contact"
                ? "text-primary"
                : "text-white hover:text-primary"
            }`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
