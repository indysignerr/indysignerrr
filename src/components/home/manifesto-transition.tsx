"use client";

import { StickyZoomTransition } from "@/components/ui/scroll-sticky-sections";

export function ManifestoTransition() {
  return (
    <StickyZoomTransition
      topClassName="bg-sand-light text-ink"
      bottomClassName="bg-ocean-deep text-paper"
      top={
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,31,58,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,31,58,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"
          />
          <div className="relative px-6 max-w-5xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue text-center">
              Manifesto
            </p>
            <h2 className="mt-6 text-center font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight text-ink">
              On ne conçoit pas des sites.
            </h2>
          </div>
        </>
      }
      bottom={
        <>
          <div
            aria-hidden
            className="mesh-ocean-deep absolute inset-0 opacity-70"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(250,248,243,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,248,243,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"
          />
          <div className="relative px-6 max-w-5xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm text-center">
              Mais
            </p>
            <h2 className="mt-6 text-center font-display italic text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight text-paper">
              des outils qui marquent.
            </h2>
          </div>
        </>
      }
    />
  );
}
