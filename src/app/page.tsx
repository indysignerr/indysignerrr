import { Hero } from "@/components/home/hero";
import { Showcase } from "@/components/home/showcase";
import { Manifesto } from "@/components/home/manifesto";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";
import { SectionFade } from "@/components/ui/section-fade";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <SectionFade from="paper" to="ocean-deep" height="xl" />
      <Manifesto />
      <SectionFade from="ocean-deep" to="sand-light" height="xl" />
      <PortfolioGrid limit={3} />
      <SectionFade from="sand-light" to="sky-mist" height="md" />
      <Testimonials />
      <SectionFade from="sky-mist" to="paper" height="md" />
      <FinalCTA />
    </>
  );
}
