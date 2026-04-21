import { Hero } from "@/components/home/hero";
import { Showcase } from "@/components/home/showcase";
import { Manifesto } from "@/components/home/manifesto";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Manifesto />
      <PortfolioGrid limit={3} />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
