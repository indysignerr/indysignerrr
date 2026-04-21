import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Plus,
  Zap,
  HeartPulse,
  Pencil,
  Wrench,
  LayoutGrid,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";
import { BentoGridShowcase, BentoCard } from "@/components/ui/bento-grid";
import { FinalCTA } from "@/components/home/cta";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites vitrines sur-mesure, motion design, maintenance. Trois offres claires pour faire vivre ton activité en ligne.",
};

/* ================ BENTO CARDS ================ */

function IntegrationsCard() {
  return (
    <BentoCard className="p-8 flex flex-col justify-between">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Stack
        </p>
        <h3 className="mt-3 font-display text-xl md:text-2xl text-ink">
          Next.js · Tailwind · shadcn/ui
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          L'outillage qui fait les sites premium de 2026.
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        {["Next", "Tailwind", "Radix", "Motion"].map((name) => (
          <span
            key={name}
            className="rounded-full border border-line bg-sky-mist px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ocean-deep"
          >
            {name}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}

function MainFeatureCard() {
  return (
    <BentoCard className="relative overflow-hidden bg-ocean-deep text-paper">
      <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-70" />
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop"
        alt="Workspace éditorial"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-55"
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-paper/10 border border-paper/15 px-3 py-1 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-sand-warm" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/85">
            Design éditorial
          </span>
        </div>
        <div>
          <p className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.02] text-paper">
            Un site qui <em className="not-italic">te ressemble.</em> Pas un template recyclé.
          </p>
          <p className="mt-6 text-sm text-paper/70 max-w-sm">
            Direction artistique sur-mesure, palette propre, typographie pensée, et une identité qui dure au-delà de la tendance.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureTagsCard() {
  const tags = [
    { label: "Direction artistique", icon: <Pencil className="h-3 w-3" /> },
    { label: "Motion & interactions", icon: <Zap className="h-3 w-3" /> },
    { label: "SEO local", icon: <Rocket className="h-3 w-3" /> },
    { label: "Maintenance", icon: <Wrench className="h-3 w-3" /> },
  ];
  return (
    <BentoCard className="p-8 flex flex-col justify-center gap-3 bg-sand-light">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-ocean-deep/15 bg-paper px-3 py-1.5"
        >
          <span className="text-ocean-blue">{tag.icon}</span>
          <span className="font-display italic text-sm text-ink">{tag.label}</span>
          <Plus className="h-3 w-3 text-muted" />
        </span>
      ))}
    </BentoCard>
  );
}

function SecondaryFeatureCard() {
  return (
    <BentoCard className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop"
        alt="Détails photo éditoriale"
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/95 via-ocean-deep/30 to-transparent" />
      <p className="absolute bottom-6 left-6 right-6 z-10 font-display italic text-lg md:text-xl text-paper leading-snug">
        Petits détails. Gros impact.
      </p>
    </BentoCard>
  );
}

function StatisticCard() {
  return (
    <BentoCard className="flex h-full flex-col justify-between bg-sand-warm p-8">
      <HeartPulse className="h-8 w-8 text-ocean-deep" />
      <div>
        <p className="font-display text-6xl md:text-7xl text-ocean-deep leading-none">
          98/100
        </p>
        <p className="mt-3 text-sm text-ocean-deep/80 max-w-[200px]">
          Score Lighthouse moyen sur les derniers projets livrés — performance, accessibilité, SEO et best practices.
        </p>
      </div>
    </BentoCard>
  );
}

function JourneyCard() {
  return (
    <BentoCard className="relative overflow-hidden p-8 bg-sky-mist">
      <p className="font-display italic text-xl md:text-2xl text-ink">
        7 jours, 4 étapes, 1 site en ligne.
      </p>
      <p className="mt-2 text-sm text-ink-soft">
        Du brief à la livraison sans zones d'ombre.
      </p>
      <div className="mt-6 flex items-center gap-2">
        {processSteps.map((s, i) => (
          <span
            key={s.number}
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-ocean-deep bg-paper font-display text-xs text-ocean-deep"
            style={{ transform: `rotate(${(i - 1.5) * 4}deg)` }}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Trois offres.{" "}
            <em className="italic font-normal text-ocean-blue">Zéro compromis.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Sites vitrines, motion design et maintenance. Chaque prestation est
            pensée pour transformer ton activité en ligne — pas juste pour exister.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <BentoGridShowcase
            integrations={<IntegrationsCard />}
            mainFeature={<MainFeatureCard />}
            featureTags={<FeatureTagsCard />}
            secondaryFeature={<SecondaryFeatureCard />}
            statistic={<StatisticCard />}
            journey={<JourneyCard />}
          />

          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">
                Démarrer un projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/tarifs">
                <LayoutGrid className="h-4 w-4" />
                Voir les tarifs
              </Link>
            </Button>
          </div>
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
