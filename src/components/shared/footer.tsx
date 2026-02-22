import Link from "next/link";

export default function SharedFooter() {
  return (
    <footer className="relative z-10 p-8 text-center text-xs text-neutral-500 border-t border-white/10">
      <p>
        MadStoneDev sometimes operates as part of{" "}
        <Link
          href="https://ravenci.solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E81863] hover:text-white transition-colors"
        >
          RAVENCI
        </Link>
      </p>
    </footer>
  );
}
