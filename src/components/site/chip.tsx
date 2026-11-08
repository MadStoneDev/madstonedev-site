import type { ReactNode } from "react";

type ChipVariant = "solid" | "outline" | "accent" | "accent-dark" | "game";

interface ChipProps {
  children: ReactNode;
  variant?: ChipVariant;
  /** Set on dark backgrounds so outline chips use the dark line colour. */
  onDark?: boolean;
  className?: string;
}

/** A small JetBrains Mono pill, used for status labels and tags. */
export default function Chip({
  children,
  variant = "outline",
  onDark = false,
  className = "",
}: ChipProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1.5 font-mono text-xs";

  const styles: Record<ChipVariant, string> = {
    solid: onDark
      ? "bg-bg text-ink"
      : "bg-bg text-body",
    outline: onDark
      ? "border border-dark-muted-2 text-dark-muted"
      : "border border-line bg-surface text-body",
    accent: "bg-accent text-white",
    "accent-dark": "bg-accent-dark text-ink",
    game: "bg-ink text-game",
  };

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>{children}</span>
  );
}
