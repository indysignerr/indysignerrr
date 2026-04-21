import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";
import { SectionFade } from "@/components/ui/section-fade";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionFade from="paper" to="ocean-deep" height="lg" />
      <Manifesto />
      <SectionFade from="ocean-deep" to="sand-light" height="lg" />
      <PortfolioGrid limit={3} />
      <SectionFade from="sand-light" to="sky-mist" />
      <Testimonials />
      <SectionFade from="sky-mist" to="paper" />
      <FinalCTA />
    </>
  );
}
