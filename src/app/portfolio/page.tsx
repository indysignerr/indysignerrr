import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/container";
import { FinalCTA } from "@/components/home/cta";
import { projects, type Project } from "@/lib/projects";
import { PortfolioGridByYear } from "@/components/portfolio/portfolio-by-year";
import { RevealText } from "@/components/ui/reveal-text";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Six projets qui racontent six histoires. Barbershop, traiteur, architecture, cleantech — chaque site est pensé pour son public.",
};

function groupByYear(items: Project[]) {
  const map = new Map<number, Project[]>();
  for (const p of items) {
    const list = map.get(p.year) ?? [];
    list.push(p);
    map.set(p.year, list);
  }
  return [...map.entries()].sort(([a], [b]) => b - a);
}

export default function PortfolioPage() {
  const grouped = groupByYear(projects);

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            <RevealText stagger={0.08} delay={0.1}>Des sites qui</RevealText>{" "}
            <em className="italic font-normal text-coral">
              <RevealText stagger={0.08} delay={0.35}>travaillent.</RevealText>
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Chaque projet a un objectif concret : générer des réservations,
            lever des fonds, convertir. Voici les derniers — par année.
          </p>
        </div>
      </section>

      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 space-y-24 md:space-y-32">
          {grouped.map(([year, items]) => (
            <PortfolioGridByYear key={year} year={year} items={items} />
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
