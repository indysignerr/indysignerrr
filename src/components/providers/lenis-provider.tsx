"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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

    // 1. Intercepte les clics sur TOUS les liens ancre (intra-page ou cross-page)
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

      // Ignore "#" seul, mailto, tel, hashes vides
      if (selector === "#" || selector.length < 2) return;
      if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;

      // Path du lien (tout avant #)
      const path = hrefAttr.slice(0, hashIndex);
      const currentPath = window.location.pathname;

      // Même page → smooth scroll Lenis + update URL
      if (path === "" || path === currentPath) {
        if (smoothScrollTo(selector)) {
          event.preventDefault();
          window.history.pushState(null, "", selector);
        }
        return;
      }

      // Page différente → laisse Next.js naviguer, le hash-on-mount prendra le relais
    };

    document.addEventListener("click", handleAnchorClick);

    // 2. Au chargement (ou changement de route), si hash présent → smooth scroll
    if (window.location.hash) {
      // Petit délai pour laisser le DOM se rendre
      const timer = setTimeout(() => {
        smoothScrollTo(window.location.hash);
      }, 120);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(frame);
        document.removeEventListener("click", handleAnchorClick);
        lenis.destroy();
      };
    }

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
