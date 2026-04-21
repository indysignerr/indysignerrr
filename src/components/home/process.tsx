"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";
import { Eyebrow } from "@/components/ui/container";

export function Process() {
  return (
    <section className="relative bg-ocean-deep text-paper py-24 md:py-32 lg:py-40 overflow-hidden">
      <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Eyebrow className="text-sand-warm">Process</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper">
            Quatre étapes. Zéro surprise. Un site livré en 7 jours.
          </h2>
        </div>

        <ol className="mt-20 grid gap-px md:grid-cols-2 lg:grid-cols-4 bg-paper/10">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-ocean-deep p-8 md:p-10 lg:p-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl text-paper">
                {step.title}
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-paper/70">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
