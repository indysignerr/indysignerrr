import { Hero } from "@/components/home/hero";
import { Showcase } from "@/components/home/showcase";
import { Manifesto } from "@/components/home/manifesto";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";
import { SectionDivider } from "@/components/ui/section-divider";
import { MarqueeBand } from "@/components/ui/marquee-band";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider number="01" label="Showcase" sublabel="Dernier livré" tone="paper" />
      <Showcase />
      <SectionDivider number="02" label="Manifesto" sublabel="L'offre en une image" tone="paper" />
      <Manifesto />
      <MarqueeBand tone="sand-warm" velocity={-2.2}>
        329€ · Un site · À vous · Pour toujours ·&nbsp;
      </MarqueeBand>
      <PortfolioGrid limit={3} />
      <SectionDivider number="04" label="Témoignages" sublabel="Six clients" tone="sky-mist" />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
