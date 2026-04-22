import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique — build dans `out/`
  // Compatible direct avec Cloudflare Pages (pas d'adapter)
  output: "export",

  // Next.js Image optimizer nécessite un serveur → unoptimized en static
  images: {
    unoptimized: true,
  },

  // Optionnel : URLs avec trailing slash pour cohérence CDN
  // trailingSlash: true,

  // Les redirects next.config ne s'appliquent PAS en static export.
  // Voir public/_redirects pour les 301 Cloudflare Pages.
};

export default nextConfig;
