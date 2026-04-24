"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Setup Lenis UNE SEULE FOIS (pas recréé à chaque route)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const smoothScrollTo = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return false;
      lenis.scrollTo(el as HTMLElement, {
        offset: -80,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      return true;
    };

    // Intercepte les clics sur les liens ancre intra-page
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;

      const hrefAttr = target.getAttribute("href");
      if (!hrefAttr) return;

      const hashIndex = hrefAttr.indexOf("#");
      if (hashIndex === -1) return;
      const selector = hrefAttr.slice(hashIndex);

      if (selector === "#" || selector.length < 2) return;
      if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;

      const path = hrefAttr.slice(0, hashIndex);
      const currentPath = window.location.pathname;

      if (path === "" || path === currentPath) {
        if (smoothScrollTo(selector)) {
          event.preventDefault();
          window.history.pushState(null, "", selector);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. À chaque changement de route : scroll reset instantané (UNE seule op, pas deux)
  useEffect(() => {
    const lenis = lenisRef.current;
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el && lenis) {
        lenis.scrollTo(el as HTMLElement, {
          offset: -80,
          immediate: false,
          duration: 1.1,
        });
      }
    } else if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
