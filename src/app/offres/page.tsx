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
  Rocket,
  Flag,
  Lock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";
import { BentoGridShowcase, BentoCard } from "@/components/ui/bento-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CreativePricing,
  type PricingTier,
} from "@/components/ui/creative-pricing";
import { TextMarquee } from "@/components/ui/text-marquee";
import { TextParallaxContent } from "@/components/ui/scroll-sticky-sections";
import { GlassCard, GlassPill } from "@/components/ui/liquid-glass";
import { FinalCTA } from "@/components/home/cta";
import {
  pricing,
  pricingFormulas,
  interventions,
  packs,
  extras,
  comparison,
  comparisonTitle,
  pricingFaq,
  reassurance,
  processSteps,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Ce qu'on fait et combien ça coûte. Sites vitrines, motion, SEO, maintenance — deux formules claires, zéro surprise.",
};

const reassuranceIcons = { flag: Flag, bolt: Zap, lock: Lock };

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
      <div className="mt-6 flex flex-wrap items-center gap-2">
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
            Direction artistique sur-mesure, palette propre, typographie pensée, identité qui dure.
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
          Score Lighthouse moyen — performance, accessibilité, SEO.
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

const tiers: PricingTier[] = [
  {
    name: pricing.autonomie.name,
    description: pricing.autonomie.tagline,
    price: 490,
    priceSuffix: "une fois · à vie",
    color: "ocean",
    icon: <Sparkles className="h-6 w-6" />,
    features: pricing.autonomie.features.slice(0, 7),
    popular: true,
    ctaLabel: pricing.autonomie.cta,
    ctaHref: "/contact",
  },
  {
    name: pricing.serenite.name,
    description: pricing.serenite.tagline,
    price: "250€ + 20€/mo",
    priceSuffix: "ou 200€/an",
    color: "sand",
    icon: <Wrench className="h-6 w-6" />,
    features: pricing.serenite.features.slice(0, 7),
    popular: false,
    ctaLabel: pricing.serenite.cta,
    ctaHref: "/contact",
  },
];

export default function OffresPage() {
  return (
    <>
      {/* ================ HERO ================ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <GlassPill className="w-fit">
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                Offres · Services + Tarifs
              </span>
            </span>
          </GlassPill>

          <h1 className="mt-8 max-w-5xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Ce qu'on fait.
            <br />
            <em className="italic font-normal text-ocean-blue">Combien ça coûte.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Cinq savoir-faire et deux formules transparentes. Tu choisis l'approche qui te va — je livre en 7 jours, tu restes propriétaire à vie.
          </p>
        </div>
      </section>

      {/* ================ BENTO SERVICES ================ */}
      <section className="bg-paper pb-24 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Cinq savoir-faire. <em className="italic font-normal">Un seul site.</em>
            </h2>
          </div>

          <BentoGridShowcase
            integrations={<IntegrationsCard />}
            mainFeature={<MainFeatureCard />}
            featureTags={<FeatureTagsCard />}
            secondaryFeature={<SecondaryFeatureCard />}
            statistic={<StatisticCard />}
            journey={<JourneyCard />}
          />
        </div>
      </section>

      {/* ================ MARQUEE TRANSITION ================ */}
      <section className="bg-paper py-8 md:py-12 overflow-hidden">
        <TextMarquee
          baseVelocity={-2.2}
          className="font-display italic font-normal tracking-[-0.04em] text-ink-soft/40"
        >
          Design sans intermédiaire · Livré en 7 jours · Propriété à vie ·&nbsp;
        </TextMarquee>
      </section>

      {/* ================ SCROLL TRANSITION → PRICING ================ */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2400&auto=format&fit=crop"
        subheading="Tarifs"
        heading="Deux formules. Zéro surprise."
      />

      {/* ================ CREATIVE PRICING ================ */}
      <section className="relative overflow-hidden bg-paper pt-16 pb-24 md:pb-36">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10 opacity-70" />
        <CreativePricing
          tag="Tarifs transparents"
          title="Choisis ton approche."
          description="Tu payes une fois et c'est à toi. Ou tu me laisses m'occuper de tout."
          tiers={tiers}
        />
      </section>

      {/* ================ GRILLE TARIFAIRE ================ */}
      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Grille tarifaire complète</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Chaque ligne, un prix.{" "}
              <em className="italic font-normal">Rien de caché.</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
            <PricingTable title="Formules principales" rows={pricingFormulas} />
            <PricingTable
              title="Interventions Autonomie (après 30j)"
              rows={interventions}
            />
            <PricingTable
              title="Packs Autonomie"
              note="Valables 12 mois, non remboursables."
              rows={packs}
            />
            <PricingTable title="Prestations complémentaires" rows={extras} />
          </div>
        </div>
      </section>

      {/* ================ MARQUEE 2 ================ */}
      <section className="bg-ocean-deep py-6 md:py-10 overflow-hidden">
        <TextMarquee
          baseVelocity={2}
          className="font-display italic font-normal tracking-[-0.04em] text-paper/25"
        >
          Indysigner · Indysigner · Indysigner ·&nbsp;
        </TextMarquee>
      </section>

      {/* ================ COMPARATIF ================ */}
      <section className="bg-ocean-deep text-paper py-24 md:py-32 overflow-hidden relative">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 className="max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            {comparisonTitle.split("Chez")[0]}
            <em className="italic font-normal text-sand-warm">
              Chez{comparisonTitle.split("Chez")[1]}
            </em>
          </h2>

          <div className="mt-14 overflow-x-auto rounded-2xl border border-paper/10">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="border-b border-paper/10">
                <tr>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
                    Critère
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
                    Wix / Squarespace
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                    Autonomie
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                    Sérénité
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.criteria}
                    className="border-b border-paper/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-paper/90">{row.criteria}</td>
                    <td className="px-5 py-4 text-paper/55">{row.wix}</td>
                    <td className="px-5 py-4 font-medium text-paper">
                      {row.autonomie}
                    </td>
                    <td className="px-5 py-4 font-medium text-paper">
                      {row.serenite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================ FAQ ================ */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[880px] px-6 md:px-10">
          <div className="text-center">
            <Eyebrow className="mx-auto">Questions fréquentes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Dix réponses avant de{" "}
              <em className="italic font-normal">nous parler.</em>
            </h2>
          </div>

          <div className="mt-14">
            <Accordion type="single" collapsible className="border-t border-line">
              {pricingFaq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ================ RÉASSURANCE LIQUID GLASS ================ */}
      <section className="relative bg-sky-mist py-20 md:py-28 overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
            {reassurance.map((block) => {
              const Icon = reassuranceIcons[block.icon];
              return (
                <li key={block.title}>
                  <GlassCard className="h-full">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean-deep text-paper">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-lg text-ink">
                          {block.title}
                        </p>
                        <p className="mt-1 text-sm text-ink-soft">
                          {block.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">
                Démarrer un projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="tel:0769762076">
                <Phone className="h-4 w-4" />
                07 69 76 20 76
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function PricingTable({
  title,
  rows,
  note,
}: {
  title: string;
  rows: { label: string; price: string; note?: string }[];
  note?: string;
}) {
  return (
    <div>
      <h3 className="font-display text-xl md:text-2xl text-ink">{title}</h3>
      <dl className="mt-5 divide-y divide-line border-y border-line">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-4"
          >
            <dt className="text-sm text-ink-soft md:text-base">
              {row.label}
              {row.note && (
                <span className="ml-2 text-xs text-muted">· {row.note}</span>
              )}
            </dt>
            <dd className="font-mono text-sm font-medium text-ink md:text-base">
              {row.price}
            </dd>
          </div>
        ))}
      </dl>
      {note && <p className="mt-3 text-xs italic text-muted">{note}</p>}
    </div>
  );
}
