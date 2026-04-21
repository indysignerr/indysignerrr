import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Flag,
  Lock,
  Phone,
  Zap,
  Pencil,
  Wrench,
  Rocket,
  Sparkles,
  LayoutGrid,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassPill } from "@/components/ui/liquid-glass";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
} from "@/lib/content";
import { FinalCTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Ce qu'on fait et combien ça coûte. Sites vitrines, motion, SEO, maintenance — deux formules claires, zéro surprise.",
};

const reassuranceIcons = { flag: Flag, bolt: Zap, lock: Lock };

const serviceLines = [
  {
    number: "01",
    title: "Direction artistique",
    description:
      "Palette, typographie, rythme, motifs. Une identité visuelle qui te distingue et tient dans le temps.",
    icon: Pencil,
  },
  {
    number: "02",
    title: "Développement Next.js",
    description:
      "Sites statiques rapides, typés TypeScript, déployés sur Vercel. Zéro CMS propriétaire, zéro lock-in.",
    icon: LayoutGrid,
  },
  {
    number: "03",
    title: "Motion & interactions",
    description:
      "Scroll narratif, micro-interactions, transitions cinématiques. Chaque détail transforme la visite en expérience.",
    icon: Zap,
  },
  {
    number: "04",
    title: "SEO local & structure",
    description:
      "JSON-LD, balises Open Graph, sitemap, Core Web Vitals. Référencement local optimisé dès le jour de livraison.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Maintenance & suivi",
    description:
      "Modifications illimitées, ajouts de pages, mises à jour techniques. Tu ne touches à rien, ton site vit.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Analytics & conseil",
    description:
      "Installation suivi, reporting mensuel simple. Tu comprends d'où viennent tes visiteurs et ce qui convertit.",
    icon: LineChart,
  },
];

export default function OffresPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
          <GlassPill className="w-fit">
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                Services + Tarifs · disponible
              </span>
            </span>
          </GlassPill>

          <h1 className="mt-8 max-w-5xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Ce qu'on fait.
            <br />
            <em className="italic font-normal text-ocean-blue">Combien ça coûte.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Six savoir-faire, deux formules. Tu choisis l'approche — je livre en
            7 jours, tu restes propriétaire à vie.
          </p>
        </div>
      </section>

      {/* ============ SERVICES — CLEAN 6-CARD GRID ============ */}
      <section className="bg-paper py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Services
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Six savoir-faire.{" "}
              <em className="italic font-normal text-ocean-blue">Un seul site.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Chaque projet mobilise l'ensemble. Pas de sous-traitance, pas de juniors — tu travailles directement avec Indy.
            </p>
          </div>

          <ul className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3 md:mt-20">
            {serviceLines.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.number} className="bg-paper p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ocean-deep/15 bg-sky-mist text-ocean-deep">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-[26px] leading-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ============ PRICING — CLEAN 2-CARD GRID ============ */}
      <section className="bg-sand-light py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Tarifs
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Deux formules.{" "}
              <em className="italic font-normal text-ocean-blue">Zéro surprise.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Tu payes une fois et c'est à toi. Ou tu me laisses m'occuper de tout.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
            <PricingCard plan={pricing.autonomie} featured />
            <PricingCard plan={pricing.serenite} />
          </div>
        </div>
      </section>

      {/* ============ GRILLE TARIFAIRE ============ */}
      <section className="bg-paper py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Grille tarifaire complète
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
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

      {/* ============ COMPARATIF ============ */}
      <section className="relative bg-ocean-deep text-paper py-32 md:py-40 overflow-hidden">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
              Comparatif
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {comparisonTitle.split("Chez")[0]}
              <em className="italic font-normal text-sand-warm">
                Chez{comparisonTitle.split("Chez")[1]}
              </em>
            </h2>
          </div>

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

      {/* ============ FAQ ============ */}
      <section className="bg-paper py-32 md:py-40">
        <div className="mx-auto max-w-[920px] px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Questions fréquentes
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
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

      {/* ============ RÉASSURANCE — CLEAN ============ */}
      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ul className="grid gap-px bg-line md:grid-cols-3">
            {reassurance.map((block) => {
              const Icon = reassuranceIcons[block.icon];
              return (
                <li key={block.title} className="bg-paper p-8 md:p-10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ocean-deep text-paper">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 font-display text-xl text-ink">
                    {block.title}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{block.description}</p>
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

/* ============ Sub-components ============ */

type Plan = typeof pricing.autonomie | typeof pricing.serenite;

function PricingCard({ plan, featured = false }: { plan: Plan; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? "relative flex flex-col rounded-2xl bg-ocean-deep p-8 md:p-10 text-paper overflow-hidden"
          : "relative flex flex-col rounded-2xl border border-line bg-paper p-8 md:p-10 text-ink"
      }
    >
      {featured && (
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-55" />
      )}
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span
            className={
              "inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] " +
              (featured
                ? "bg-sand-warm text-ocean-deep"
                : "border border-line bg-sky-mist text-ocean-deep")
            }
          >
            {plan.badge}
          </span>
          {featured && (
            <Sparkles
              className="h-4 w-4 text-sand-warm"
              aria-hidden
              strokeWidth={1.5}
            />
          )}
        </div>

        <h3
          className={
            "mt-6 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight " +
            (featured ? "text-paper" : "text-ink")
          }
        >
          {plan.name}
        </h3>
        <p
          className={
            "mt-3 max-w-sm text-base " +
            (featured ? "text-paper/80" : "text-ink-soft")
          }
        >
          {plan.tagline}
        </p>

        <div className="mt-8">
          <span
            className={
              "font-display text-5xl md:text-6xl " +
              (featured ? "text-paper" : "text-ink")
            }
          >
            {plan.price}
          </span>
          <p
            className={
              "mt-1 text-sm " + (featured ? "text-paper/65" : "text-ink-soft")
            }
          >
            {plan.priceSuffix}
          </p>
          <p
            className={
              "mt-2 text-sm font-medium " +
              (featured ? "text-sand-warm" : "text-ocean-blue")
            }
          >
            {plan.contextLine}
          </p>
        </div>

        <ul
          className={
            "mt-8 space-y-3 border-t pt-6 " +
            (featured ? "border-paper/10" : "border-line")
          }
        >
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={
                "flex items-start gap-3 text-sm " +
                (featured ? "text-paper/90" : "text-ink-soft")
              }
            >
              <Check
                className={
                  "mt-0.5 h-4 w-4 shrink-0 " +
                  (featured ? "text-sand-warm" : "text-ocean-blue")
                }
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {plan.extraNote && (
          <p
            className={
              "mt-6 text-xs leading-relaxed " +
              (featured ? "text-paper/55" : "text-muted")
            }
          >
            {plan.extraNote}
          </p>
        )}

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant={featured ? "secondary" : "primary"}
            className="w-full"
          >
            <Link href="/contact">{plan.cta}</Link>
          </Button>
          {plan.ctaMicro && (
            <p
              className={
                "mt-3 text-center text-xs " +
                (featured ? "text-paper/55" : "text-muted")
              }
            >
              {plan.ctaMicro}
            </p>
          )}
        </div>
      </div>
    </article>
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
