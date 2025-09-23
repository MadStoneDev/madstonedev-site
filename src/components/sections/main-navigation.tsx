"use client";
import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className={`p-4 flex justify-center gap-10`}>
      <Link
        href={`/`}
        className={`relative text-sm text-white hover:text-primary text-center font-display z-50 transition-all duration-200`}
      >
        HOME
      </Link>

      <Link
        href={`/contact`}
        className={`relative text-sm text-white hover:text-primary text-center font-display z-50 transition-all duration-200`}
      >
        CONTACT
      </Link>
    </nav>
  );
}
