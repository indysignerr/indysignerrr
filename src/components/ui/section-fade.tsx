import { cn } from "@/lib/utils";

type Tone =
  | "paper"
  | "sand-light"
  | "sand-warm"
  | "sky-mist"
  | "ocean-deep";

const toBg: Record<Tone, string> = {
  paper: "var(--color-paper)",
  "sand-light": "var(--color-sand-light)",
  "sand-warm": "var(--color-sand-warm)",
  "sky-mist": "var(--color-sky-mist)",
  "ocean-deep": "var(--color-ocean-deep)",
};

interface SectionFadeProps {
  from: Tone;
  to: Tone;
  height?: "sm" | "md" | "lg";
  className?: string;
}

const heightClass = {
  sm: "h-16",
  md: "h-24",
  lg: "h-32",
};

/**
 * Gradient divider between two sections with different background tones.
 * Place entre les <section> pour éviter le cut brutal de couleur.
 */
export function SectionFade({
  from,
  to,
  height = "md",
  className,
}: SectionFadeProps) {
  return (
    <div
      aria-hidden
      className={cn("w-full", heightClass[height], className)}
      style={{
        background: `linear-gradient(to bottom, ${toBg[from]}, ${toBg[to]})`,
      }}
    />
  );
}
