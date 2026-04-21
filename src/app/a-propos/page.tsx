import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/cta";
import { values, valuesPullQuote, stats } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Indysigner — agence web indépendante dirigée par Indy François depuis Biot. Rapidité, transparence, innovation, accessibilité.",
};

export default function AProposPage() {
  return (
    <>
      {/* ============ HERO EDITORIAL ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in srgb, var(--color-ocean-deep) 10%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in srgb, var(--color-ocean-deep) 10%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />

        <div className="relative z-20 mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
            À propos · depuis 2022
          </p>

          <h1 className="mt-6 font-display italic tracking-[-0.04em] md:tracking-[-0.06em] text-[clamp(3rem,14vw,11rem)] leading-[0.88] text-ocean-deep text-center">
            INDYSIGNER
          </h1>

          <p className="mt-4 text-center font-display text-xl md:text-2xl tracking-[0.18em] text-ink-soft">
            INDY FRANÇOIS
          </p>

          <p className="mx-auto mt-14 max-w-xl text-center text-lg text-ink-soft">
            Freelance indépendant basé à Biot, Côte d'Azur. Je dessine, je code,
            je livre. Personne d'autre entre toi et moi.
          </p>
        </div>
      </section>

      {/* ============ INTRO BIO + PORTRAIT ============ */}
      <section className="bg-paper py-40 md:py-56">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-line bg-sand-light">
                <img
                  src="https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=900&auto=format&fit=crop"
                  alt="Portrait Indy François"
                  className="aspect-[4/5] w-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Indy François — Biot, FR
              </p>
            </div>

            <div className="md:col-span-7 md:pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Le studio
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
                Un studio d'une personne.{" "}
                <em className="italic font-normal text-coral">Par choix.</em>
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  Indysigner, c'est Indy François. Pas d'agence tentaculaire,
                  pas de commerciaux qui vendent des devis à rallonge, pas de
                  juniors qui apprennent sur ton projet.
                </p>
                <p>
                  Tu parles directement à la personne qui conçoit ton site, qui
                  code tes pages et qui met tout en ligne. Un seul
                  interlocuteur, un seul standard de qualité, une
                  responsabilité directe de A à Z.
                </p>
                <p>
                  Je livre en 7 jours ce que d'autres facturent sur 3 mois. Pas
                  parce que je fais moins bien, mais parce que je travaille
                  avec les bons outils et que je n'ai pas de couches
                  d'intermédiaires à payer.
                </p>
                <p>
                  Après des discussions avec des commerçants, des artisans et
                  des chefs d'entreprise, j'ai tiré une conclusion simple :{" "}
                  <em className="not-italic font-medium text-ink">
                    une offre à 329€ sans abonnement qui traîne, c'est le
                    compromis parfait.
                  </em>{" "}
                  Le prix est juste, le site est à toi, et personne ne te tient
                  en otage.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">Démarrer un projet</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/offres">Voir les offres</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALEURS ============ */}
      <section className="bg-sand-light py-40 md:py-56">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Valeurs
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Quatre principes.{" "}
              <em className="italic font-normal">Tenus à chaque projet.</em>
            </h2>
          </div>

          <ul className="mt-16 grid gap-px bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <li key={value.title} className="bg-paper p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl md:text-[26px] leading-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PULL QUOTE ============ */}
      <section className="relative overflow-hidden bg-ocean-deep text-paper py-40 md:py-56">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
            Manifesto
          </p>
          <blockquote className="mt-8 font-display italic text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-paper">
            « {valuesPullQuote} »
          </blockquote>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            En chiffres
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-10 border-t border-line pt-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-3 font-display text-5xl md:text-6xl leading-none text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
