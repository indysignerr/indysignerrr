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
 *   - "wordmark" — full "Indysigner" italique, le "g" en coral + wave + dot
 *   - "mark" — monogram "id" italique + dot coral + swash sur le "d"
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
        {/* Dot coral */}
        <circle cx="22" cy="16" r="3.5" fill={coralColor} />
        {/* "id" italique serif */}
        <text
          x="32"
          y="48"
          fontFamily="var(--font-fraunces), Fraunces, 'Instrument Serif', Georgia, serif"
          fontStyle="italic"
          fontWeight={500}
          fontSize={48}
          fill={inkColor}
          textAnchor="middle"
          letterSpacing="-0.03em"
          style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 144" }}
        >
          id
        </text>
        {/* Swash sur le d */}
        <path
          d="M 42 19 Q 50 12 58 15"
          stroke={inkColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // wordmark
  return (
    <svg
      viewBox="0 0 560 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indysigner"
      role="img"
      className={cn("block", className)}
      style={size ? { height: size } : undefined}
    >
      {showWave && (
        <path
          d="M 100 50 Q 135 22 170 50 Q 195 28 220 48 Q 250 30 285 50"
          stroke={inkColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
      {/* Dot coral */}
      <circle cx="212" cy="46" r="5" fill={coralColor} />
      {/* Wordmark : Indysi + g coral + ner */}
      <text
        x="280"
        y="130"
        fontFamily="var(--font-fraunces), Fraunces, 'Instrument Serif', Georgia, serif"
        fontStyle="italic"
        fontWeight={500}
        fontSize={110}
        textAnchor="middle"
        letterSpacing="-0.025em"
        style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 144" }}
      >
        <tspan fill={inkColor}>Indysi</tspan>
        <tspan fill={coralColor}>g</tspan>
        <tspan fill={inkColor}>ner</tspan>
      </text>
    </svg>
  );
}
