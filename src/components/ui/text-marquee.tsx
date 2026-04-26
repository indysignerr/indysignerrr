"use client";

import { useRef, useEffect, forwardRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return (((v - min) % range) + range) % range + min;
}

interface TextMarqueeProps {
  children: string;
  baseVelocity?: number;
  className?: string;
  /** @deprecated Conservé pour compatibilité, n'a plus d'effet (perf). */
  scrollDependent?: boolean;
  delay?: number;
}

/**
 * TextMarquee simplifié — vitesse constante, pas de scroll-velocity tracking.
 *
 * Avant : useScroll + useVelocity + useSpring + useAnimationFrame faisaient
 * du travail à chaque tick de scroll (calcul de vitesse, spring, transformations).
 * Sur une page avec plusieurs marquees, ça contribuait à l'impression de
 * "scroll pas fluide".
 *
 * Maintenant : juste un useAnimationFrame minimal qui avance la position
 * à vitesse constante. GPU-only via translate-X. Pas de couplage au scroll.
 */
export const TextMarquee = forwardRef<HTMLDivElement, TextMarqueeProps>(
  (
    {
      children,
      baseVelocity = -3,
      className,
      delay = 0,
    },
    ref
  ) => {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const hasStarted = useRef(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        hasStarted.current = true;
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    useAnimationFrame((_, deltaMs) => {
      if (!hasStarted.current) return;
      const moveBy = baseVelocity * (deltaMs / 1000);
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        ref={ref}
        className="overflow-hidden whitespace-nowrap flex flex-nowrap"
      >
        <motion.div
          className="flex whitespace-nowrap gap-10 flex-nowrap will-change-transform"
          style={{ x }}
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cn("block text-[8vw]", className)}>
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }
);

TextMarquee.displayName = "TextMarquee";
