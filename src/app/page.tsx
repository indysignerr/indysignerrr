import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <PortfolioGrid limit={3} />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
