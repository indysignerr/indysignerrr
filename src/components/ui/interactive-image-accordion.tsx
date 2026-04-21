"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: number | string;
  title: string;
  subtitle?: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onActivate: () => void;
}

function AccordionPanel({ item, isActive, onActivate }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "relative h-[380px] md:h-[520px] rounded-3xl overflow-hidden cursor-pointer",
        "transition-[width,flex-basis] duration-700 ease-in-out",
        isActive ? "w-full md:w-[400px] md:flex-[4]" : "w-[60px] md:flex-[1]"
      )}
      onMouseEnter={onActivate}
      onClick={onActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      aria-expanded={isActive}
      aria-label={item.title}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/40 to-transparent"
      />

      <span
        className={cn(
          "absolute font-display text-paper transition-all duration-500 ease-in-out",
          isActive
            ? "bottom-6 left-6 right-6 rotate-0 text-2xl md:text-3xl italic"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap text-base md:text-lg"
        )}
      >
        {item.title}
      </span>

      {isActive && item.subtitle && (
        <span className="absolute top-6 left-6 right-6 font-mono text-[10px] uppercase tracking-[0.22em] text-sand-warm">
          {item.subtitle}
        </span>
      )}
    </div>
  );
}

interface InteractiveImageAccordionProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: AccordionItem[];
  defaultIndex?: number;
}

export function InteractiveImageAccordion({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  items,
  defaultIndex = 0,
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-[40%] lg:sticky lg:top-24">
            {eyebrow && (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-md">
              {description}
            </p>
            {ctaLabel && ctaHref && (
              <a
                href={ctaHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ocean-deep px-6 py-3 text-sm font-medium text-paper shadow-[0_8px_24px_-8px_rgba(10,31,58,0.4)] transition-all hover:bg-ocean-blue hover:shadow-[0_12px_32px_-8px_rgba(10,31,58,0.55)]"
              >
                {ctaLabel}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="flex flex-row items-stretch justify-start gap-3 overflow-hidden p-1">
              {items.map((item, index) => (
                <AccordionPanel
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
