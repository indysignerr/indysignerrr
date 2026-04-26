"use client";

import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/content";

const heroLogos = [
  { src: "/logos/claude.svg", name: "Claude", role: "AI copilot" },
  { src: "/logos/nextjs.svg", name: "Next.js", role: "Framework" },
  { src: "/logos/cloudflare.svg", name: "Cloudflare", role: "Hosting · CDN" },
  { src: "/logos/github.svg", name: "GitHub", role: "Versioning" },
  { src: "/logos/decap.svg", name: "Decap CMS", role: "Content" },
];

type LogoCardProps = (typeof heroLogos)[number] & {
  rotate?: string;
  size?: "sm" | "md" | "lg";
};

function LogoCard({ src, name, role, rotate = "0deg", size = "md" }: LogoCardProps) {
  const sizeClass = {
    sm: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
    md: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36",
    lg: "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40",
  }[size];

  const iconSize = {
    sm: "h-7 w-7 md:h-8 md:w-8",
    md: "h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11",
    lg: "h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14",
  }[size];

  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className={`${sizeClass} flex flex-col items-center justify-center gap-2 rounded-2xl border border-ocean-deep/10 bg-paper shadow-[0_18px_40px_-12px_rgba(10,31,58,0.25)] transition-transform duration-300 hover:scale-[1.05] will-change-transform`}
    >
      <img
        src={src}
        alt={`${name} — ${role}`}
        className={`${iconSize} object-contain`}
        loading="lazy"
      />
      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-ocean-deep/80">
        {name}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[92vh] overflow-hidden flex flex-col items-center justify-center isolate">
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-20" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[22%] md:left-[5%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <LogoCard {...heroLogos[0]} rotate="-6deg" size="sm" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[4%] left-[8%] md:top-[8%] md:left-[12%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <LogoCard {...heroLogos[1]} rotate="-10deg" size="md" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[76%] left-[4%] md:top-[72%] md:left-[10%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <LogoCard {...heroLogos[2]} rotate="-4deg" size="lg" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[4%] left-[82%] md:top-[8%] md:left-[80%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <LogoCard {...heroLogos[3]} rotate="8deg" size="md" />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[70%] left-[78%] md:top-[64%] md:left-[82%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <LogoCard {...heroLogos[4]} rotate="12deg" size="lg" />
          </motion.div>
        </FloatingElement>
      </Floating>

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
        className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex w-[92%] max-w-3xl items-start justify-between gap-4 rounded-3xl border border-ocean-deep/10 bg-paper/70 px-6 py-4 backdrop-blur-xl"
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
