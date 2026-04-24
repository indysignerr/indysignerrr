"use client";

/**
 * PageTransition — neutralisé pour éviter les re-mounts et le jank de scroll.
 *
 * Avant : <motion.div key={pathname}> re-mountait tout l'arbre React à chaque route,
 * causant des saccades et des "rollbacks" pendant le scroll Lenis.
 *
 * Maintenant : render direct, pas d'animation globale. Les transitions de page
 * douces sont assurées par les animations de sections (stagger, fade-in) locales.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
