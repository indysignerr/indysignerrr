import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "wordmark" | "mark";
  className?: string;
  /** Taille en pixels (hauteur) */
  size?: number;
}

/**
 * Logo Indysigner — rendu raster depuis public/.
 *
 * Fichiers attendus :
 *   - public/logo.jpg        — wordmark "Indysigner" (aspect ~16:5)
 *   - public/logo-mark.jpg   — monogram "id" (carré ~1:1)
 *
 * Pour remplacer les logos : sauvegarde les PNG aux chemins ci-dessus,
 * commit + push, Cloudflare Pages rebuild auto.
 */
export function Logo({ variant = "wordmark", className, size }: LogoProps) {
  if (variant === "mark") {
    return (
      <img
        src="/logo-mark.jpg"
        alt="Indysigner"
        className={cn("block object-contain", className)}
        style={size ? { height: size, width: size } : undefined}
        draggable={false}
      />
    );
  }

  return (
    <img
      src="/logo.jpg"
      alt="Indysigner"
      className={cn("block object-contain", className)}
      style={size ? { height: size } : undefined}
      draggable={false}
    />
  );
}
