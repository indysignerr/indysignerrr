"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { Eyebrow } from "@/components/ui/container";

export function Services() {
  return (
    <section className="relative bg-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-5">
            <Eyebrow>Ce qu'on fait</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Trois façons de faire exister ton activité en&nbsp;ligne.
            </h2>
          </div>

          <ul className="md:col-span-7 divide-y divide-line border-y border-line">
            {services.map((service, i) => (
              <motion.li
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative py-10 md:py-12"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ocean-blue pt-2">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base md:text-lg leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
