import type { Metadata } from "next";
import { values, valuesPullQuote, stats, brand } from "@/lib/content";
import { Eyebrow } from "@/components/ui/container";
import { FinalCTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Indysigner — agence web indépendante dirigée par Indy François depuis Biot. Rapidité, transparence, innovation, accessibilité.",
};

export default function AProposPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
          <Eyebrow>À propos</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Un studio d'une personne.{" "}
            <em className="italic font-normal text-ocean-blue">Par choix.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Indysigner, c'est Indy François. Freelance basé à Biot, Côte
            d'Azur. Tu parles directement à la personne qui conçoit, code et
            met en ligne ton site. Zéro intermédiaire.
          </p>
        </div>
      </section>

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
              <li
                key={value.title}
                className="bg-paper p-8 md:p-10"
              >
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

      <section className="bg-ocean-deep text-paper py-32 md:py-48 overflow-hidden relative">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <blockquote className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-paper">
            « {valuesPullQuote} »
          </blockquote>
        </div>
      </section>

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

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Eyebrow>Contact direct</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
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
