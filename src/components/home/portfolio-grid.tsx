"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { Eyebrow } from "@/components/ui/container";

interface PortfolioGridProps {
  limit?: number;
  showHeader?: boolean;
}

export function PortfolioGrid({ limit, showHeader = true }: PortfolioGridProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="relative bg-sand-light py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {showHeader && (
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Portfolio</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                Des sites faits pour être <em className="italic font-normal">regardés longtemps.</em>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ocean-deep transition-colors hover:text-ocean-blue"
            >
              Voir tous les projets
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}

        <ul className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          {items.map((project, i) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={i % 3 === 0 ? "md:translate-y-10" : ""}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ocean-deep">
                  <div className="absolute inset-0 mesh-ocean-deep" aria-hidden />
                  <div className="absolute inset-0 flex items-end p-8 md:p-10">
                    <div>
                      <span className="inline-block rounded-full border border-paper/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/75">
                        {project.category}
                      </span>
                      <p className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-paper">
                        {project.name}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="absolute right-6 top-6 h-8 w-8 text-paper/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm text-ink-soft">
                    {project.year} · {project.duration}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-paper/60 px-3 py-0.5 text-xs text-ink-soft"
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
