import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";
import { FinalCTA } from "@/components/home/cta";
import { values, valuesPullQuote, stats, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Indysigner — agence web indépendante dirigée par Indy François depuis Biot. Rapidité, transparence, innovation, accessibilité.",
};

export default function AProposPage() {
  return (
    <>
      {/* ========== EDITORIAL HERO ========== */}
      <section className="min-h-screen overflow-hidden relative py-20 md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 z-0 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in srgb, var(--color-ocean-deep) 12%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in srgb, var(--color-ocean-deep) 12%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />

        <div className="mx-auto max-w-7xl relative z-20 px-6 md:px-10">
          <div className="relative">
            <p className="font-mono text-sm absolute -top-4 left-6 md:left-20 font-medium tracking-[0.22em] uppercase text-ocean-blue">
              Depuis 2022
            </p>
            <h1 className="z-20 text-ocean-deep relative font-display italic text-center tracking-[-0.04em] md:tracking-[-0.08em] text-6xl sm:text-8xl md:text-9xl xl:text-[11rem] leading-[0.88]">
              INDYSIGNER
            </h1>
            <p className="hidden xl:block absolute -bottom-8 right-20 font-display text-3xl font-normal tracking-[0.2em] text-ink-soft">
              INDY FRANCOIS
            </p>
            <p className="text-2xl absolute xl:hidden -bottom-6 left-6 md:left-20 font-display tracking-[0.2em] text-ink-soft">
              INDY FRANCOIS
            </p>
          </div>

          <div className="grid relative">
            <div className="space-y-8 pt-20 md:pt-28 flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="flex flex-col md:flex-row gap-6 bg-sand-light w-full max-w-xl h-fit p-8 md:p-10 relative">
                <div className="flex-1 font-display italic text-xl md:text-2xl text-ink space-y-1.5">
                  <div>/ Direction artistique</div>
                  <div>/ Design & développement</div>
                  <div>/ Motion & interactions</div>
                  <div>/ SEO & maintenance</div>
                </div>
                <div className="absolute hidden md:flex -left-[140px] -top-16 w-[240px] overflow-hidden bg-sand-light border border-line">
                  <img
                    src="https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=600&auto=format&fit=crop"
                    alt="Portrait Indy François"
                    className="h-80 w-full object-cover grayscale"
                  />
                  <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] font-mono text-[10px] uppercase font-medium tracking-[0.22em] text-ocean-deep">
                    BASÉ À BIOT — CÔTE D'AZUR
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:hidden left-1/2 w-full overflow-hidden bg-sand-light mt-6 border border-line">
              <img
                src="https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=600&auto=format&fit=crop"
                alt="Portrait Indy François"
                className="h-72 w-full object-cover grayscale"
              />
              <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] font-mono text-[10px] uppercase font-medium tracking-[0.22em] text-ocean-deep">
                BASÉ À BIOT
              </div>
            </div>
          </div>

          <div className="md:mt-32 mt-16">
            <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base text-ink-soft">
              FREELANCE INDÉPENDANT.
              <br />
              JE DESSINE, JE CODE, JE LIVRE. <br />
              PERSONNE D'AUTRE ENTRE TOI ET MOI.
            </p>
          </div>
          <div className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href="/contact">Appelle-moi</Link>
            </Button>
          </div>

          <div className="md:flex mt-20 md:mt-28 items-end justify-between gap-8">
            <div className="relative">
              <div className="w-60 h-36 shadow-lg border border-line rounded-md overflow-hidden mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-60 h-36 absolute left-6 -top-6 shadow-lg border border-line rounded-md overflow-hidden mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop"
                  alt="Écran code"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-60 h-36 absolute left-12 -top-12 shadow-lg border border-line rounded-md overflow-hidden mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=600&auto=format&fit=crop"
                  alt="Papier & encre"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center md:justify-end gap-2 mt-10 md:mt-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                  30+ projets livrés
                </span>
                <ArrowDownRight className="size-5 text-ocean-blue" />
              </div>
              <div className="mt-3 md:text-right">
                <h2 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-ink">
                  Design sans intermédiaire.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALEURS ========== */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Valeurs</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Quatre principes. Tenus à chaque&nbsp;projet.
            </h2>
          </div>

          <ul className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-4 bg-line">
            {values.map((value, i) => (
              <li key={value.title} className="bg-paper p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== PULL QUOTE ========== */}
      <section className="bg-ocean-deep text-paper py-32 md:py-48 overflow-hidden relative">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-paper">
            « {valuesPullQuote} »
          </blockquote>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="bg-sand-light py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <dl className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-4xl md:text-5xl text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ========== CONTACT DIRECT ========== */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Eyebrow>Contact direct</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            {brand.phone} · {brand.email}
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            Réponse sous 24h en semaine. Devis gratuit, sans engagement.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
