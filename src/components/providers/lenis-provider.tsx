"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Intercepte les clics sur les liens ancre pour smooth-scroll Lenis
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"], a[href^="/#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;

      const hrefAttr = target.getAttribute("href");
      if (!hrefAttr) return;

      const hashIndex = hrefAttr.indexOf("#");
      if (hashIndex === -1) return;
      const selector = hrefAttr.slice(hashIndex);

      // Ignore "#" seul ou hrefs vers autre page
      if (selector === "#" || selector.length < 2) return;

      // Skip si lien vers autre path
      const path = hrefAttr.slice(0, hashIndex);
      if (path && path !== "" && path !== window.location.pathname) return;

      const el = document.querySelector(selector);
      if (!el) return;

      event.preventDefault();
      lenis.scrollTo(el as HTMLElement, {
        offset: -80,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      // Met à jour l'URL sans recharger
      window.history.pushState(null, "", selector);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
