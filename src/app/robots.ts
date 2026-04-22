import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/cgv", "/admin/"] },
    ],
    sitemap: "https://indysigner.fr/sitemap.xml",
  };
}
