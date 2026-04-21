import { cn } from "@/lib/utils";

type Tone =
  | "paper"
  | "sand-light"
  | "sand-warm"
  | "sky-mist"
  | "ocean-deep";

const toHex: Record<Tone, string> = {
  paper: "#faf8f3",
  "sand-light": "#f2ead8",
  "sand-warm": "#e8d9c0",
  "sky-mist": "#e6edf2",
  "ocean-deep": "#0a1f3a",
};

interface SectionFadeProps {
  from: Tone;
  to: Tone;
  height?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const heightClass = {
  sm: "h-24",
  md: "h-40",
  lg: "h-56",
  xl: "h-80",
};

/**
 * Gradient divider entre deux tons de section.
 * Multi-stop avec 7 couleurs intermédiaires (mix in srgb) pour éviter
 * le banding visible sur de gros écarts (ex. paper → ocean-deep).
 * Un noise SVG subtle est ajouté par-dessus pour casser les bandes
 * résiduelles si la profondeur de couleurs du monitor le permet.
 */
export function SectionFade({
  from,
  to,
  height = "md",
  className,
}: SectionFadeProps) {
  const fromC = toHex[from];
  const toC = toHex[to];

  // Multi-stop gradient avec courbe ease-in-out (8 stops = 6 intermédiaires).
  // Distribution S-curve : plateau from → accélération milieu → plateau to.
  // color-mix pour un blend perceptuel (srgb).
  const gradient = `linear-gradient(
    to bottom,
    ${fromC} 0%,
    color-mix(in srgb, ${fromC} 95%, ${toC} 5%) 12%,
    color-mix(in srgb, ${fromC} 87%, ${toC} 13%) 25%,
    color-mix(in srgb, ${fromC} 70%, ${toC} 30%) 40%,
    color-mix(in srgb, ${fromC} 30%, ${toC} 70%) 60%,
    color-mix(in srgb, ${fromC} 13%, ${toC} 87%) 75%,
    color-mix(in srgb, ${fromC} 5%, ${toC} 95%) 88%,
    ${toC} 100%
  )`;

  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full overflow-hidden",
        heightClass[height],
        className
      )}
      style={{ background: gradient }}
    >
      {/* Noise overlay — casse le banding visible sur de gros écarts */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.08,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
