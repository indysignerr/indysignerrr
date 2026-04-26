"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

interface PortfolioGridProps {
  limit?: number;
  showHeader?: boolean;
}

export function PortfolioGrid({ limit, showHeader = true }: PortfolioGridProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className="bg-sand-light py-40 md:py-56">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {showHeader && (
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Portfolio
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
                Des sites faits pour être{" "}
                <em className="italic font-normal">regardés longtemps.</em>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 self-start text-sm font-medium text-ocean-deep transition-colors hover:text-ocean-blue md:self-end"
            >
              Voir tous les projets
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}

        <ul className="grid gap-8 md:gap-10 lg:gap-12">
          {items.map((project, i) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl bg-ocean-deep">
                  <div
                    aria-hidden
                    className="mesh-ocean-deep absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-ocean-deep/0 transition-colors duration-500 group-hover:bg-ocean-deep/10"
                  />
                  <div className="absolute inset-0 flex items-end p-8 md:p-10">
                    <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                      <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-paper">
                        {project.name}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 overflow-hidden font-mono text-[10px] uppercase tracking-[0.22em] text-paper/0 transition-all duration-500 group-hover:text-paper/75">
                        Voir le projet <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="absolute right-6 top-6 h-7 w-7 text-paper/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-paper" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-sm text-ink-soft">
                    {project.year} · {project.duration}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-paper px-3 py-0.5 text-xs text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
