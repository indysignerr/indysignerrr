import type { Metadata } from "next";
import Link from "next/link";
import { Check, Flag, Lock, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";
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

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Deux formules transparentes. Un site qui t'appartient. Zéro surprise. 490€ Autonomie ou 250€ + 200€/an Sérénité.",
};

const reassuranceIcons = { flag: Flag, bolt: Zap, lock: Lock };

export default function TarifsPage() {
  return (
    <>
      {/* ============ HEADER ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
          <Eyebrow className="mx-auto">Tarifs transparents</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Deux formules.
            <br />
            Un site qui <em className="italic font-normal text-ocean-blue">t'appartient.</em>
            <br />
            Zéro surprise.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft">
            Choisis selon que tu préfères tout maîtriser toi-même, ou qu'Indysigner s'occupe de tout pour toi. Pas de piège, pas de clauses cachées, pas d'abonnement qui te retient.
          </p>
        </div>
      </section>

      {/* ============ 2 FORMULES ============ */}
      <section className="bg-paper pb-24 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {/* Autonomie */}
            <PricingCard plan={pricing.autonomie} featured />
            {/* Sérénité */}
            <PricingCard plan={pricing.serenite} />
          </div>
        </div>
      </section>

      {/* ============ GRILLE TARIFAIRE ============ */}
      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Grille tarifaire</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Chaque ligne, un prix. <em className="italic font-normal">Rien de caché.</em>
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
            <PricingTable
              title="Prestations complémentaires"
              rows={extras}
            />
          </div>
        </div>
      </section>

      {/* ============ COMPARATIF ============ */}
      <section className="bg-ocean-deep text-paper py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
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
              Dix réponses avant de <em className="italic font-normal">nous parler.</em>
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
            <em className="italic font-normal text-ocean-blue">maquette gratuite ?</em>
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

/* ============ Sub-components ============ */

function PricingCard({
  plan,
  featured = false,
}: {
  plan: typeof pricing.autonomie | typeof pricing.serenite;
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "relative rounded-3xl bg-ocean-deep p-8 md:p-10 text-paper overflow-hidden"
          : "relative rounded-3xl border border-line bg-paper p-8 md:p-10 text-ink"
      }
    >
      {featured && (
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
      )}
      <div className="relative">
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
        <h2
          className={
            "mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight " +
            (featured ? "text-paper" : "text-ink")
          }
        >
          {plan.name}
        </h2>
        <p
          className={
            "mt-3 font-display italic text-lg md:text-xl " +
            (featured ? "text-paper/85" : "text-ink-soft")
          }
        >
          {plan.tagline}
        </p>

        <div className="mt-8 flex items-baseline gap-2">
          <span
            className={
              "font-display text-5xl md:text-6xl " +
              (featured ? "text-paper" : "text-ink")
            }
          >
            {plan.price}
          </span>
        </div>
        <p
          className={
            "mt-1 text-sm " + (featured ? "text-paper/70" : "text-ink-soft")
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

        <ul className="mt-8 space-y-3">
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
              "mt-6 border-t pt-4 text-xs leading-relaxed " +
              (featured
                ? "border-paper/10 text-paper/60"
                : "border-line text-muted")
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
