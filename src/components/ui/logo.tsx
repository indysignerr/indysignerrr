import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "wordmark" | "mark";
  tone?: "ink" | "paper";
  className?: string;
  /** Taille en pixels (hauteur) — applique auto-scaling */
  size?: number;
}

/**
 * Logo Indysigner — rendu en texte HTML (Fraunces italic).
 *
 * Raison : un <img> JPG avec son fond beige intégré se voyait comme une
 * vignette coincée dans la navbar. Le texte HTML se fond avec n'importe
 * quel background (transparent, paper, ocean-deep), reste net à toute
 * taille, et utilise directement la font --font-fraunces du layout.
 *
 * Variantes :
 *   - "wordmark" — "Indysigner" complet, le "g" en coral
 *   - "mark" — monogram "id" italique + dot coral
 */
export function Logo({
  variant = "wordmark",
  tone = "ink",
  className,
  size,
}: LogoProps) {
  const inkClass = tone === "ink" ? "text-ocean-deep" : "text-paper";

  if (variant === "mark") {
    return (
      <span
        aria-label="Indysigner"
        role="img"
        className={cn(
          "inline-flex items-center font-display italic font-medium leading-none tracking-tight select-none",
          inkClass,
          className
        )}
        style={size ? { fontSize: size } : undefined}
      >
        <span>id</span>
        <span className="text-coral" aria-hidden>
          .
        </span>
      </span>
    );
  }

  // wordmark : Indysi + g (coral) + ner
  return (
    <span
      aria-label="Indysigner"
      role="img"
      className={cn(
        "inline-flex items-baseline font-display italic font-medium leading-none tracking-tight select-none",
        inkClass,
        className
      )}
      style={size ? { fontSize: size } : undefined}
    >
      <span>Indysi</span>
      <span className="text-coral">g</span>
      <span>ner</span>
    </span>
  );
}
