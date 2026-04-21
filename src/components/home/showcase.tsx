import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Showcase() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Dernier livré · WakeApp
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-ink">
              L'art de livrer{" "}
              <em className="italic font-normal text-coral">ce qui compte.</em>
            </h2>
            <p className="mt-6 mx-auto max-w-xl text-base md:text-lg text-ink-soft">
              Une landing page qui explique une app mobile en 30 secondes. Hero
              iPhone mockup, modules interactifs, CTA App Store. Scroll pour
              voir le site s'ouvrir.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/portfolio/wakeapp"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ocean-deep hover:text-coral transition-colors"
              >
                Voir le case study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </>
        }
      >
        <img
          src="/projects/wakeapp/wakeapp1.png"
          alt="WakeApp — Une seule application. Contrôlez tout."
          className="mx-auto h-full w-full object-cover object-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
