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

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
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

          <p className="mt-8 max-w-2xl text-lg text-ink-soft">{project.context}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.url && (
              <Button asChild variant="primary">
                <a href={project.url} target="_blank" rel="noreferrer">
                  Voir le site en ligne
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <Link href="/contact">Un projet similaire ? Parle-m'en</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 space-y-20 md:space-y-28">
          <Block eyebrow="Problème">{project.problem}</Block>
          <Block eyebrow="Solution">{project.solution}</Block>

          <div>
            <Eyebrow>Résultats</Eyebrow>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      <section className="bg-ocean-deep text-paper py-24 md:py-32 overflow-hidden relative">
        <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <Quote className="h-8 w-8 text-sand-warm" aria-hidden />
          <blockquote className="mt-6 font-display italic text-3xl md:text-4xl leading-tight text-paper">
            « {project.testimonial.quote} »
          </blockquote>
          {project.testimonial.author && (
            <footer className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70">
              — {project.testimonial.author}
            </footer>
          )}
        </div>
      </section>

      <section className="bg-sand-light py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group grid items-center gap-6 md:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Projet suivant
              </p>
              <p className="mt-3 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink transition-colors group-hover:text-ocean-blue">
                {next.name}
              </p>
            </div>
            <ArrowRight className="h-8 w-8 text-ocean-blue transition-transform group-hover:translate-x-1" />
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
