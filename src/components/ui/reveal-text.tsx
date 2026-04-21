"use client";

import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

interface RevealTextProps {
  children: string;
  delay?: number;
  stagger?: number;
  splitBy?: "words" | "characters" | "lines";
  staggerFrom?: "first" | "last" | "center" | "random";
  reverse?: boolean;
}

/**
 * Client-side wrapper to use VerticalCutReveal inside server components.
 * Animates words (default) with a spring cut-reveal from bottom.
 */
export function RevealText({
  children,
  delay = 0,
  stagger = 0.08,
  splitBy = "words",
  staggerFrom = "first",
  reverse = false,
}: RevealTextProps) {
  return (
    <VerticalCutReveal
      splitBy={splitBy}
      staggerDuration={stagger}
      staggerFrom={staggerFrom}
      reverse={reverse}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 28,
        delay,
      }}
    >
      {children}
    </VerticalCutReveal>
  );
}
