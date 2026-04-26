"use client";

import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] overflow-hidden flex flex-col items-center justify-center isolate"
    >
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-20" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="flex flex-col justify-center items-center w-[88%] sm:w-[500px] md:w-[700px] lg:w-[860px] z-30 pointer-events-none">
        <motion.h1
          className="text-center w-full font-display tracking-tight flex-col flex whitespace-pre leading-[0.98] text-[clamp(2rem,7vw,7.5rem)]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        >
          <span className="text-ink">On conçoit des sites </span>
          <LayoutGroup>
            <motion.span layout className="flex justify-center whitespace-pre">
              <motion.span
                layout
                className="text-ink"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                qui{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "marquent",
                  "captivent",
                  "convertissent",
                  "durent",
                  "respirent",
                  "rayonnent",
                ]}
                mainClassName="overflow-hidden pr-3 py-0 pb-2 md:pb-4 italic text-coral"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={2600}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          className="pointer-events-auto text-center text-base sm:text-lg md:text-xl text-ink-soft pt-6 sm:pt-10 md:pt-12 max-w-xl leading-relaxed"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.45 }}
        >
          Design unique. Livraison en 7 jours. Vous restez propriétaire de votre
          site — pour toujours.
        </motion.p>

        <motion.div
          className="pointer-events-auto flex flex-wrap justify-center gap-3 mt-10"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.4, delay: 0.6 }}
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
      </div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex w-[92%] max-w-3xl items-start justify-between gap-4 rounded-3xl border border-ocean-deep/10 bg-paper/95 px-6 py-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0">
            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted truncate">
              {stat.label}
            </dt>
            <dd className="mt-1 font-display text-xl md:text-2xl text-ink">
              {stat.value}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
