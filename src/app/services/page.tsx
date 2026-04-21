import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, processSteps } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";
import { FinalCTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites vitrines sur-mesure, motion design, maintenance. Trois offres claires pour faire vivre ton activité en ligne.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Trois offres. <em className="italic font-normal text-ocean-blue">Zéro compromis.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Sites vitrines, motion design et maintenance. Chaque prestation est pensée pour transformer ton activité en ligne — pas juste pour exister.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <article
              key={service.number}
              className="grid gap-10 md:grid-cols-12 md:gap-14 items-start"
            >
              <div className="md:col-span-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                  {service.number}
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                  {service.title}
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg md:text-xl leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <div className="mt-8">
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      En discuter
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              {i < services.length - 1 && (
                <div aria-hidden className="md:col-span-12 h-px w-full bg-line" />
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              De la première conversation à la mise en ligne.
            </h2>
          </div>
          <ol className="mt-14 grid gap-px md:grid-cols-4 bg-line">
            {processSteps.map((step) => (
              <li key={step.number} className="bg-paper p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
