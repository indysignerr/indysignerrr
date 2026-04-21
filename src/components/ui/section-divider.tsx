import { cn } from "@/lib/utils";

type Tone = "paper" | "sand-light" | "sky-mist";

interface SectionDividerProps {
  /** Numéro de chapitre, ex "02" */
  number: string;
  /** Label du chapitre suivant, ex "Manifesto" */
  label: string;
  /** Petit descripteur optionnel sous le label */
  sublabel?: string;
  tone?: Tone;
  className?: string;
}

const toneClass: Record<Tone, string> = {
  paper: "bg-paper",
  "sand-light": "bg-sand-light",
  "sky-mist": "bg-sky-mist",
};

/**
 * Divider éditorial entre deux sections de couleur différente.
 * Numéro en font-display italic + ligne + label en font-mono.
 * Crée une "pause" visuelle narrative entre deux blocs colorés,
 * sans avoir recours au gradient fade.
 */
export function SectionDivider({
  number,
  label,
  sublabel,
  tone = "paper",
  className,
}: SectionDividerProps) {
  return (
    <section
      aria-hidden
      className={cn(
        "relative w-full py-20 md:py-28",
        toneClass[tone],
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 border-t border-ocean-deep/15 pt-8 md:pt-10">
          <span className="font-display italic leading-none text-ink text-6xl md:text-7xl lg:text-8xl tracking-tight">
            {number}
          </span>
          <div className="text-right">
            <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted">
              Chapitre suivant
            </p>
            <p className="mt-2 font-display italic text-2xl md:text-3xl lg:text-4xl text-ink leading-tight">
              {label}
            </p>
            {sublabel && (
              <p className="mt-1 text-sm text-ink-soft italic">{sublabel}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
