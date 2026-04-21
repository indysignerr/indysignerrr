import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { ManifestoTransition } from "@/components/home/manifesto-transition";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioGrid limit={4} />
      <ManifestoTransition />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
