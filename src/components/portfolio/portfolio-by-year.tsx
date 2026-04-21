"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  year: number;
  items: Project[];
}

export function PortfolioGridByYear({ year, items }: Props) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-6">
        <p className="font-display text-5xl md:text-7xl text-ink tracking-tight">
          {year}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {items.length} projet{items.length > 1 ? "s" : ""}
        </p>
      </div>

      <ul className="mt-10 grid gap-8 md:gap-12">
        {items.map((project, i) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <Link href={`/portfolio/${project.slug}`} className="group block">
              <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl bg-ocean-deep">
                <div aria-hidden className="mesh-ocean-deep absolute inset-0" />
                <div className="absolute inset-0 flex items-end p-8 md:p-10 lg:p-12">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-paper/25 bg-paper/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/80 backdrop-blur">
                      {project.category}
                    </span>
                    <p className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.02] text-paper">
                      {project.name}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="absolute right-6 top-6 h-8 w-8 text-paper/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper" />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-sm text-ink-soft">{project.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
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
  );
}
