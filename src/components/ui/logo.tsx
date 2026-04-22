import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "wordmark" | "mark";
  tone?: "ink" | "paper";
  className?: string;
  /** Taille en pixels (hauteur) — applique aspect-ratio auto */
  size?: number;
  showWave?: boolean;
}

/**
 * Logo Indysigner — rendu inline SVG, hérite la font Fraunces du document.
 * Variantes :
 *   - "wordmark" (full "Indysigner" + wave + dot coral) — header, footer, OG
 *   - "mark" ("id" monogram + dot coral) — favicon React, avatars, badges
 */
export function Logo({
  variant = "wordmark",
  tone = "ink",
  className,
  size,
  showWave = true,
}: LogoProps) {
  const inkColor = tone === "ink" ? "#0a1f3a" : "#faf8f3";
  const coralColor = "#d9725e";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Indysigner"
        role="img"
        className={cn("block", className)}
        style={size ? { height: size, width: size } : undefined}
      >
        <text
          x="32"
          y="46"
          fontFamily="var(--font-fraunces), Fraunces, 'Instrument Serif', Georgia, serif"
          fontStyle="italic"
          fontWeight={500}
          fontSize={44}
          fill={inkColor}
          textAnchor="middle"
          letterSpacing="-0.02em"
        >
          id
        </text>
        <circle cx="24" cy="16" r="3.5" fill={coralColor} />
      </svg>
    );
  }

  // wordmark
  return (
    <svg
      viewBox="0 0 520 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indysigner"
      role="img"
      className={cn("block", className)}
      style={size ? { height: size } : undefined}
    >
      {showWave && (
        <path
          d="M 40 42 Q 70 22 100 42 T 160 42 Q 190 22 220 42 T 280 42 Q 310 22 340 42 T 400 42 Q 430 22 460 42 T 490 42"
          stroke={inkColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      )}
      <text
        x="260"
        y="112"
        fontFamily="var(--font-fraunces), Fraunces, 'Instrument Serif', Georgia, serif"
        fontStyle="italic"
        fontWeight={500}
        fontSize={92}
        fill={inkColor}
        textAnchor="middle"
        letterSpacing="-0.02em"
      >
        Indysigner
      </text>
      <circle cx="76" cy="34" r="5" fill={coralColor} />
    </svg>
  );
}
