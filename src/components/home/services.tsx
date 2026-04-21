"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="bg-paper py-40 md:py-56">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Services
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Trois façons de faire exister ton activité{" "}
              <em className="italic font-normal text-coral">en ligne.</em>
            </h2>
          </div>
          <Link
            href="/offres"
            className="group inline-flex items-center gap-2 self-start text-sm font-medium text-ocean-deep transition-colors hover:text-ocean-blue md:self-end"
          >
            Voir le détail des offres
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="mt-16 grid gap-px bg-line md:mt-20 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.li
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-paper p-8 md:p-10 lg:p-12"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue">
                {service.number}
              </p>
              <h3 className="mt-6 font-display text-2xl md:text-3xl leading-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
