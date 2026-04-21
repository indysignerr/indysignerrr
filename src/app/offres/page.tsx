import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Flag,
  Lock,
  Phone,
  Zap,
  Sparkles,
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
  mainOffer,
  pricingOption,
  pricingTagline,
  comparison,
  comparisonTitle,
  comparisonSubtitle,
  pricingFaq,
  processSteps,
  reassurance,
} from "@/lib/content";
import { FinalCTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "329€ — Un site à toi, pour toujours",
  description:
    "Une offre. Un prix. Tout compris. 329€ one-shot, livré en 7 jours, propriété totale garantie. Aucun abonnement, aucun SAV.",
};

const reassuranceIcons = { flag: Flag, bolt: Zap, lock: Lock };

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
                Une offre. Un prix. Tout compris.
              </span>
            </span>
          </GlassPill>

          <h1 className="mt-8 font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight text-ink">
            329€.
            <br />
            <em className="italic font-normal text-ocean-blue">
              Et c'est tout.
            </em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-ink-soft">
            {pricingTagline} Aucun abonnement, aucun frais caché, aucun retour.
          </p>
        </div>
      </section>

      {/* ============ FORMULE UNIQUE ============ */}
      <section className="bg-paper py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-ocean-deep text-paper">
            <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-55" />
            <div className="relative grid gap-10 p-8 md:grid-cols-12 md:gap-16 md:p-14 lg:p-20">
              {/* Left — price + pitch */}
              <div className="md:col-span-5 flex flex-col">
                <span className="inline-flex w-fit items-center rounded-full bg-sand-warm text-ocean-deep px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em]">
                  {mainOffer.badge}
                </span>
                <p className="mt-8 font-display text-[clamp(4.5rem,12vw,8rem)] leading-[0.9] tracking-tight text-paper">
                  {mainOffer.price}
                </p>
                <p className="mt-2 text-base text-paper/70">
                  {mainOffer.priceSuffix}
                </p>
                <p className="mt-5 font-display italic text-xl md:text-2xl text-sand-warm">
                  {mainOffer.contextLine}
                </p>

                <p className="mt-10 max-w-sm text-sm leading-relaxed text-paper/75">
                  {mainOffer.closingNote}
                </p>

                <div className="mt-auto pt-10">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-fit"
                  >
                    <Link href="/contact">
                      {mainOffer.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="mt-3 text-xs text-paper/55">
                    {mainOffer.ctaMicro}
                  </p>
                </div>
              </div>

              {/* Right — features grid */}
              <div className="md:col-span-7 md:border-l md:border-paper/10 md:pl-16">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                  Inclus dans les 329€
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {mainOffer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-paper/90"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-sand-warm"
                        strokeWidth={2.2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OPTION PACK MODIFICATIONS ============ */}
      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="rounded-3xl border border-line bg-paper p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-12 md:gap-14 md:items-center">
              <div className="md:col-span-5">
                <span className="inline-flex w-fit items-center rounded-full border border-ocean-deep/15 bg-sky-mist text-ocean-deep px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em]">
                  {pricingOption.badge}
                </span>
                <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                  {pricingOption.name}
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  {pricingOption.subtitle}
                </p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-6xl text-ink">
                    {pricingOption.price}
                  </span>
                  <span className="text-sm text-ink-soft">
                    {pricingOption.priceSuffix}
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 md:border-l md:border-line md:pl-14">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  Ce qui est inclus
                </p>
                <ul className="mt-6 space-y-4">
                  {pricingOption.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base leading-relaxed text-ink"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-ocean-blue"
                        strokeWidth={2.2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-muted">
                  {pricingOption.smallText}
                </p>
              </div>
            </div>
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
              {comparisonTitle}
            </h2>
          </div>

          <div className="mt-14 overflow-x-auto rounded-2xl border border-paper/10">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-paper/10">
                <tr>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
                    Critère
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
                    Wix / Squarespace
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
                    Agence classique
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                    Indysigner
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
                    <td className="px-5 py-4 text-paper/55">{row.agency}</td>
                    <td className="px-5 py-4 font-medium text-paper">
                      {row.indysigner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 max-w-2xl font-display italic text-xl md:text-2xl text-sand-warm leading-snug">
            {comparisonSubtitle}
          </p>
        </div>
      </section>

      {/* ============ PROCESS 4 JOURS ============ */}
      <section className="bg-paper py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              7 jours entre ton paiement et la livraison de{" "}
              <em className="italic font-normal text-ocean-blue">ton site.</em>
            </h2>
          </div>

          <ol className="mt-16 grid gap-px bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="bg-paper p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-xl md:text-2xl leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-sand-light py-32 md:py-40">
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

      {/* ============ RÉASSURANCE ============ */}
      <section className="bg-paper py-24 md:py-32">
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
                  <p className="mt-2 text-sm text-ink-soft">
                    {block.description}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">
                Remplir le brief
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
