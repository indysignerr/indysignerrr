import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://indysigner.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/offres",
    "/portfolio",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${BASE}/portfolio/${project.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
