"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, stats } from "@/lib/content";

const words = ["marquent", "captivent", "convertissent", "durent"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-ocean-deep/15 bg-paper/60 px-4 py-1.5 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-ocean-blue" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-deep">
            Freelance · Biot — Côte d'Azur
          </span>
        </motion.div>

        <h1 className="mt-8 max-w-[1100px] font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-ink">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="block"
          >
            On conçoit
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="block"
          >
            des sites qui <em className="font-display italic font-normal text-ocean-blue">{words[0]}</em>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="block"
          >
            les esprits.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft"
        >
          {brand.tagline} Design unique. Livraison express. Prix juste. Tu restes propriétaire de ton site — pour toujours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">
              Démarrer un projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/portfolio">Voir les projets</Link>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-10 border-t border-ocean-deep/10 pt-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-3xl md:text-4xl text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
