"use client";

import { TextMarquee } from "@/components/ui/text-marquee";
import { cn } from "@/lib/utils";

type Tone = "paper" | "sand-light" | "sand-warm" | "ocean-deep";

interface MarqueeBandProps {
  children: string;
  tone?: Tone;
  velocity?: number;
  className?: string;
}

const toneClass: Record<Tone, { bg: string; text: string }> = {
  paper: { bg: "bg-paper", text: "text-ocean-deep/25" },
  "sand-light": { bg: "bg-sand-light", text: "text-ocean-deep/30" },
  "sand-warm": { bg: "bg-sand-warm", text: "text-ocean-deep/40" },
  "ocean-deep": { bg: "bg-ocean-deep", text: "text-paper/25" },
};

/**
 * Bande éditoriale horizontale entre deux sections.
 * Texte défile lentement (scroll-velocity driven), couleur texte très
 * atténuée pour laisser la place aux sections voisines. Hauteur fixe
 * py-8/py-12 pour ne pas dominer visuellement.
 */
export function MarqueeBand({
  children,
  tone = "paper",
  velocity = -2,
  className,
}: MarqueeBandProps) {
  const { bg, text } = toneClass[tone];
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden py-10 md:py-14 border-y border-ocean-deep/10",
        bg,
        className
      )}
    >
      <TextMarquee
        baseVelocity={velocity}
        className={cn(
          "font-display italic font-normal tracking-[-0.04em] leading-none",
          text
        )}
      >
        {children}
      </TextMarquee>
    </div>
  );
}
