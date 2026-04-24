import projectsData from "./generated/projects.json";

export type ProjectCategory = "Site Vitrine" | "Sur-Mesure" | "Refonte";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  year: number;
  duration: string;
  url?: string;
  tags: string[];
  context: string;
  problem: string;
  solution: string;
  results: string[];
  testimonial: { quote: string; author?: string };
  gallery?: { src: string; alt: string; caption?: string }[];
}

/**
 * Source des projets : content/projects/*.md (éditable via Decap CMS).
 * Sync vers src/lib/generated/projects.json par `node scripts/sync-content.mjs`
 * (exécuté automatiquement au prebuild/predev via package.json).
 */
export const projects: Project[] = projectsData as Project[];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
