"use client";

import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Button } from "@/components/ui/button";
import { GlassPill } from "@/components/ui/liquid-glass";
import { stats } from "@/lib/content";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=1200&auto=format&fit=crop",
    alt: "Eau cristalline",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=1200&auto=format&fit=crop",
    alt: "Fleurs blanches floues",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=1200&auto=format&fit=crop",
    alt: "Feuille de palmier néon",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=1200&auto=format&fit=crop",
    alt: "Homme en chemise noire ciel bleu",
  },
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=1200&auto=format&fit=crop",
    alt: "Portrait éditorial noir et blanc",
  },
];

export function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden flex flex-col items-center justify-center isolate">
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-20" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[22%] md:left-[5%]"
        >
          <motion.img
            src={heroImages[0].url}
            alt={heroImages[0].alt}
            loading="eager"
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[2%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={heroImages[1].url}
            alt={heroImages[1].alt}
            className="w-36 h-24 sm:w-44 sm:h-32 md:w-52 md:h-40 lg:w-56 lg:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[78%] left-[4%] md:top-[74%] md:left-[8%]"
        >
          <motion.img
            src={heroImages[2].url}
            alt={heroImages[2].alt}
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[2%] left-[85%] md:top-[6%] md:left-[80%]"
        >
          <motion.img
            src={heroImages[3].url}
            alt={heroImages[3].alt}
            className="w-36 h-32 sm:w-44 sm:h-40 md:w-52 md:h-48 lg:w-60 lg:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[70%] left-[78%] md:top-[62%] md:left-[80%]"
        >
          <motion.img
            src={heroImages[4].url}
            alt={heroImages[4].alt}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[14deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[88%] sm:w-[500px] md:w-[700px] lg:w-[860px] z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="pointer-events-auto"
        >
          <GlassPill>
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                Freelance Biot — Côte d'Azur
              </span>
            </span>
          </GlassPill>
        </motion.div>

        <motion.h1
          className="mt-6 text-center w-full font-display tracking-tight flex-col flex whitespace-pre leading-[0.98] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem]"
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
                mainClassName="overflow-hidden pr-3 py-0 pb-2 md:pb-4 italic text-ocean-blue"
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
          Design unique. Livraison en 7 jours. Tu restes propriétaire de ton
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
        className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex w-[92%] max-w-3xl items-start justify-between gap-4 rounded-2xl border border-ocean-deep/10 bg-paper/70 px-6 py-4 backdrop-blur-xl"
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
