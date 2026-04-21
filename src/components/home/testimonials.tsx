"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { projects } from "@/lib/projects";
import { Eyebrow } from "@/components/ui/container";

export function Testimonials() {
  const items = projects.map((p) => ({
    quote: p.testimonial.quote,
    author: p.testimonial.author,
    project: p.name,
    category: p.category,
  }));

  return (
    <section className="relative bg-sky-mist py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Eyebrow>Ce qu'ils en disent</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            <em className="italic font-normal">Six clients.</em> Un seul constat.
          </h2>
        </div>

        <ul className="mt-16 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.li
              key={`${item.project}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl border border-line bg-paper p-8 md:p-10"
            >
              <Quote className="h-6 w-6 text-ocean-blue/50" aria-hidden />
              <blockquote className="mt-5 font-display text-lg md:text-xl leading-snug text-ink">
                « {item.quote} »
              </blockquote>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="font-medium text-sm text-ink">
                  {item.author ?? item.project}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  {item.project} · {item.category}
                </p>
              </footer>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
