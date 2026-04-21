import type { Metadata } from "next";
import Link from "next/link";
import { Flag, Lock, Phone, Zap, Wrench, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";
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

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Deux formules transparentes. Un site qui t'appartient. Zéro surprise. 490€ Autonomie ou 250€ + 200€/an Sérénité.",
};

const reassuranceIcons = { flag: Flag, bolt: Zap, lock: Lock };

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

export default function TarifsPage() {
  return (
    <>
      {/* ============ CREATIVE PRICING ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="pt-20 md:pt-28 pb-24 md:pb-36">
          <CreativePricing
            tag="Tarifs transparents"
            title="Deux formules. Zéro surprise."
            description="Tu payes une fois et c'est à toi. Ou tu me laisses m'occuper de tout."
            tiers={tiers}
          />
        </div>
      </section>

      {/* ============ GRILLE TARIFAIRE ============ */}
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

      {/* ============ COMPARATIF ============ */}
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

      {/* ============ FAQ ============ */}
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

      {/* ============ RÉASSURANCE ============ */}
      <section className="bg-sky-mist py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
            {reassurance.map((block) => {
              const Icon = reassuranceIcons[block.icon];
              return (
                <li
                  key={block.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-paper/60 p-6 backdrop-blur-sm"
                >
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
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-40">
        <div aria-hidden className="mesh-ocean absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight text-ink">
            On commence par une{" "}
            <em className="italic font-normal text-ocean-blue">
              maquette gratuite ?
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            Tu remplis le brief en 3 minutes, je te livre une maquette dans les 48h. Tu décides après.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Remplir le brief</Link>
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
