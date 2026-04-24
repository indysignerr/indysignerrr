"use client";

/**
 * Anciennement LenisProvider — Lenis a été retiré.
 *
 * Pourquoi : même en mode lerp, Lenis introduit une micro-interpolation
 * perceptible comme du lag. Le scroll natif du navigateur (Chrome/Safari
 * modernes, trackpad macOS, roue Windows) est déjà parfaitement fluide
 * et à 0ms d'input lag. Ajouter une lib par-dessus ne peut que ralentir.
 *
 * Ce composant conserve uniquement :
 *   1. L'interception des liens ancre (#section) pour un scroll smooth
 *      via l'API native `scrollTo({ behavior: "smooth" })`
 *   2. Le reset scroll en haut de page à chaque changement de route
 *
 * Aucune RAF loop, aucune interpolation, aucun coût permanent.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const smoothScrollTo = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top - 80;
      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };

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
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Reset scroll instantané à chaque changement de route
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
