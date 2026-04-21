import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.name} — ${project.category} (${project.year}). ${project.context}`,
  };
}

const timelineSteps = [
  { day: "Jour 1-2", title: "Brief & design", detail: "Cadrage, maquette, validation." },
  { day: "Jour 3-4", title: "Construction", detail: "Code, rédaction, intégration." },
  { day: "Jour 5", title: "Mobile + SEO", detail: "Optimisation et référencement local." },
  { day: "Jour 6", title: "Ajustements", detail: "Retours clients intégrés." },
  { day: "Jour 7", title: "Livraison", detail: "Transfert complet + formation 1h." },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const total = projects.length;
  const previous = projects[(currentIndex - 1 + total) % total];
  const next = projects[(currentIndex + 1) % total];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-ocean-blue transition-colors hover:text-ocean-deep"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-line bg-paper/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft backdrop-blur">
              {project.category}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {project.year} · {project.duration}
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight text-ink">
            {project.name}
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            {project.context}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild variant="outline">
              <Link href="/contact">Un projet similaire ? Parle-m'en</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ SITE LIVE — PROÉMINENT ============ */}
      {project.url && (
        <section className="bg-ocean-deep text-paper py-20 md:py-24 overflow-hidden relative">
          <div
            aria-hidden
            className="mesh-ocean-deep absolute inset-0 opacity-55"
          />
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group relative mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 md:px-10 transition-colors"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                Voir le site live
              </p>
              <p className="mt-3 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-paper transition-colors group-hover:text-sand-warm">
                {project.url.replace(/^https?:\/\//, "")}
              </p>
            </div>
            <ArrowUpRight className="h-10 w-10 md:h-14 md:w-14 shrink-0 text-sand-warm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </section>
      )}

      {/* ============ PROBLÈME + SOLUTION ============ */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 space-y-20 md:space-y-28">
          <Block eyebrow="Problème">{project.problem}</Block>
          <Block eyebrow="Solution">{project.solution}</Block>
        </div>
      </section>

      {/* ============ TIMELINE 7 JOURS ============ */}
      <section className="bg-sand-light py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Ce qui s'est passé en 7 jours</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Du brief à la livraison.
            </h2>
          </div>

          <ol className="mt-14 grid gap-px bg-line md:grid-cols-5 lg:grid-cols-5">
            {timelineSteps.map((step, i) => (
              <li key={step.day} className="bg-paper p-6 md:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ocean-blue">
                  {step.day}
                </span>
                <h3 className="mt-4 font-display text-lg md:text-xl leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft">{step.detail}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  0{i + 1}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ RÉSULTATS ============ */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Eyebrow>Résultats</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            Ce que le site a concrètement{" "}
            <em className="italic font-normal text-ocean-blue">produit.</em>
          </h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result) => (
              <li
                key={result}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <p className="font-display text-2xl text-ink">{result}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ TÉMOIGNAGE ============ */}
      <section className="relative overflow-hidden bg-ocean-deep text-paper py-32 md:py-40">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <Quote className="h-8 w-8 text-sand-warm" aria-hidden />
          <blockquote className="mt-6 font-display italic text-3xl md:text-5xl leading-[1.1] text-paper">
            « {project.testimonial.quote} »
          </blockquote>
          {project.testimonial.author && (
            <footer className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70">
              — {project.testimonial.author}
            </footer>
          )}
        </div>
      </section>

      {/* ============ NAVIGATION PROJETS ============ */}
      <section className="bg-sand-light py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid gap-10 md:grid-cols-2">
          <Link
            href={`/portfolio/${previous.slug}`}
            className="group flex flex-col items-start gap-3"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              <ArrowLeft className="h-4 w-4" /> Projet précédent
            </span>
            <span className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink transition-colors group-hover:text-ocean-blue">
              {previous.name}
            </span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col items-end text-right gap-3"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Projet suivant <ArrowRight className="h-4 w-4" />
            </span>
            <span className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink transition-colors group-hover:text-ocean-blue">
              {next.name}
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Block({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-4">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <p className="md:col-span-8 font-display text-2xl md:text-3xl leading-snug text-ink">
        {children}
      </p>
    </div>
  );
}
