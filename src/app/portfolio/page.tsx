import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Eyebrow } from "@/components/ui/container";
import { FinalCTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Six projets qui racontent six histoires. Barbershop, traiteur, architecture, cleantech — chaque site est pensé pour son public.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Des sites qui <em className="italic font-normal text-ocean-blue">travaillent.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Chacun des projets ci-dessous a un objectif : générer des réservations, lever des fonds, convertir. Voici les six derniers.
          </p>
        </div>
      </section>
      <PortfolioGrid showHeader={false} />
      <FinalCTA />
    </>
  );
}
