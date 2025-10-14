"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav className="p-4 flex justify-center gap-10">
      <Link
        href="/"
        className={`relative text-sm text-center font-display z-50 transition-all duration-200 ${
          pathname === "/" ? "text-primary" : "text-white hover:text-primary"
        }`}
      >
        HOME
      </Link>

      <Link
        href="/about"
        className={`relative text-sm text-center font-display z-50 transition-all duration-200 ${
          pathname === "/about"
            ? "text-primary"
            : "text-white hover:text-primary"
        }`}
      >
        ABOUT
      </Link>

      <Link
        href="/contact"
        className={`relative text-sm text-center font-display z-50 transition-all duration-200 ${
          pathname === "/contact"
            ? "text-primary"
            : "text-white hover:text-primary"
        }`}
      >
        CONTACT
      </Link>
    </nav>
  );
}
