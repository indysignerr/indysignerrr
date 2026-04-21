import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/ui/portfolio-gallery";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Eyebrow } from "@/components/ui/container";
import { FinalCTA } from "@/components/home/cta";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Six projets qui racontent six histoires. Barbershop, traiteur, architecture, cleantech — chaque site est pensé pour son public.",
};

const categoryImages: Record<string, string> = {
  "gaosons-barber-shop":
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=700&fit=crop&q=80",
  "krnl-studio":
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=700&fit=crop&q=80",
  wakeapp:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop&q=80",
  "cote-et-saveurs":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=700&fit=crop&q=80",
  "atelier-noma":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=700&fit=crop&q=80",
  greenpulse:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&q=80",
};

export default function PortfolioPage() {
  const galleryImages = projects.map((p) => ({
    src: categoryImages[p.slug] ?? categoryImages.krnl,
    alt: `${p.name} — ${p.category}`,
    title: p.name,
    href: `/portfolio/${p.slug}`,
  }));

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Des sites qui{" "}
            <em className="italic font-normal text-ocean-blue">travaillent.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Chacun des projets ci-dessous a un objectif : générer des réservations, lever des fonds, convertir. Voici les six derniers.
          </p>
        </div>
      </section>

      <PortfolioGallery
        title="Six projets récents"
        archiveButton={{ text: "Tout voir ci-dessous", href: "#archive" }}
        images={galleryImages}
      />

      <div id="archive">
        <PortfolioGrid showHeader={false} />
      </div>

      <FinalCTA />
    </>
  );
}
