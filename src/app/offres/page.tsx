import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Flag,
  Lock,
  Phone,
  Zap,
  Sparkles,
  Wrench,
  CircleDot,
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
  CreativePricing,
  type PricingTier,
} from "@/components/ui/creative-pricing";
import {
  comparison,
  comparisonTitle,
  comparisonSubtitle,
  pricingFaq,
  reassurance,
} from "@/lib/content";
import { FinalCTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "L'Offre — 329€",
  description:
    "Une offre. Un prix. Tout compris. 329€ one-shot, livré en 7 jours, propriété totale garantie. Aucun abonnement, aucun SAV.",
};

const reassuranceIcons = { flag: Flag, bolt: Zap, lock: Lock };

const tiers: PricingTier[] = [
  {
    name: "Site vitrine",
    description: "L'offre complète. Livrée, transférée, à toi.",
    price: 329,
    priceSuffix: "une fois",
    color: "ocean",
    icon: <Sparkles className="h-6 w-6" />,
    popular: true,
    popularLabel: "Le plus vendu",
    ctaLabel: "Démarrer mon projet",
    ctaHref: "/contact",
    featureGroups: [
      {
        heading: "Création",
        items: [
          "Design premium sur-mesure",
          "Animations au scroll",
          "Rédaction FR + SEO local",
          "Photos fournies ou sourcées",
        ],
      },
      {
        heading: "Tech",
        items: [
          "Next.js + Tailwind",
          "Mobile optimisé",
          "Interface admin simple",
        ],
      },
      {
        heading: "Livraison & garantie",
        items: [
          "Formation 1h + manuel PDF",
          "Garantie bug 30 jours",
          "Hébergement gratuit à vie",
        ],
      },
    ],
  },
  {
    name: "+ Pack Modifications",
    description: "Même offre + marge de sécurité la 1ère année.",
    price: 419,
    priceSuffix: "une fois",
    color: "sand",
    icon: <Wrench className="h-6 w-6" />,
    popular: false,
    ctaLabel: "Avec le Pack",
    ctaHref: "/contact",
    featureGroups: [
      {
        heading: "Tout le Site vitrine",
        items: ["Inclus identiquement : 13 features, transfert total, garantie 30j"],
      },
      {
        heading: "En plus (+90€)",
        items: [
          "2 interventions majeures dans les 12 mois",
          "Ajout page, refonte section, widget, structure",
          "À utiliser quand tu veux dans l'année",
        ],
      },
    ],
  },
];

const timelineDays = [
  { day: "01", label: "Brief", accent: "Jour 1" },
  { day: "02", label: "Design", accent: "Jour 2" },
  { day: "03", label: "Code", accent: "Jour 3" },
  { day: "04", label: "Rédaction", accent: "Jour 4" },
  { day: "05", label: "Mobile", accent: "Jour 5" },
  { day: "06", label: "Ajustements", accent: "Jour 6" },
  { day: "07", label: "Livraison", accent: "Jour 7" },
];

// 6 FAQs qui tuent les objections principales
const faqToKill = [
  "Est-ce que je peux vraiment tout modifier moi-même ?",
  "Et si je casse mon site ou que je n'arrive plus à modifier quelque chose ?",
  "Pourquoi c'est moins cher que les autres ?",
  "Qu'est-ce qui se passe si Cloudflare ou GitHub change ses prix ?",
  "Vous faites des e-commerces ou des systèmes de réservation ?",
  "Je paye comment ?",
];
const essentialFaq = pricingFaq.filter((item) =>
  faqToKill.includes(item.question)
);

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
            <em className="italic font-normal text-coral">
              Et c'est tout.
            </em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-ink-soft">
            Après des dizaines de discussions avec des commerçants, des artisans
            et des chefs d'entreprise, j'ai tiré une conclusion simple :{" "}
            <em className="not-italic font-medium text-ink">
              une offre à 329€ sans abonnement qui traîne, c'est le compromis
              parfait.
            </em>
          </p>
        </div>
      </section>

      {/* ============ CREATIVE PRICING (21st.dev) ============ */}
      <section className="relative overflow-hidden bg-paper py-24 md:py-32">
        <CreativePricing
          tag="Tarifs transparents"
          title="Choisis ton approche."
          description="Tu payes une fois. Tu reçois un site pro. Tu le gères. Je disparais."
          tiers={tiers}
        />
      </section>

      {/* ============ TIMELINE 7 JOURS ============ */}
      <section className="bg-sand-light py-40 md:py-56">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Process
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              7 jours entre ton paiement et{" "}
              <em className="italic font-normal text-coral">
                la livraison de ton site.
              </em>
            </h2>
          </div>

          <div className="relative mt-16 md:mt-20">
            <div
              aria-hidden
              className="absolute top-6 left-0 right-0 h-px bg-ocean-deep/20"
            />
            <ol className="relative grid grid-cols-2 gap-y-10 md:grid-cols-7 md:gap-y-0">
              {timelineDays.map((step, i) => (
                <li
                  key={step.day}
                  className="relative flex flex-col items-center text-center"
                >
                  <span
                    className={
                      "relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors " +
                      (i === 6
                        ? "border-ocean-deep bg-ocean-deep text-paper"
                        : "border-ocean-deep/30 bg-paper text-ocean-deep")
                    }
                  >
                    {i === 6 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : (
                      <CircleDot className="h-5 w-5" />
                    )}
                  </span>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-blue">
                    {step.accent}
                  </p>
                  <p className="mt-1 font-display text-xl text-ink">
                    {step.label}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-14 max-w-xl font-display italic text-xl text-ink-soft">
            Du brief initial à la remise des accès sur tes propres comptes
            GitHub et Cloudflare.
          </p>
        </div>
      </section>

      {/* ============ COMPARATIF ============ */}
      <section className="relative bg-ocean-deep text-paper py-40 md:py-56 overflow-hidden">
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

          <div className="mt-14 overflow-x-auto rounded-3xl border border-paper/10">
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

      {/* ============ FAQ (6 qui tuent) ============ */}
      <section className="bg-paper py-40 md:py-56">
        <div className="mx-auto max-w-[920px] px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Questions fréquentes
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Six réponses avant de{" "}
              <em className="italic font-normal">nous parler.</em>
            </h2>
          </div>

          <div className="mt-14">
            <Accordion type="single" collapsible className="border-t border-line">
              {essentialFaq.map((item, i) => (
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

      {/* ============ STICKY MOBILE CTA ============ */}
      <div className="md:hidden fixed bottom-5 left-4 right-4 z-40">
        <Link
          href="/contact"
          className="flex items-center justify-between gap-3 rounded-full bg-ocean-deep text-paper px-6 py-4 shadow-[0_16px_40px_-10px_rgba(10,31,58,0.5)]"
        >
          <span className="flex items-center gap-3">
            <span className="font-display text-xl">329€</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
              Démarrer
            </span>
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
