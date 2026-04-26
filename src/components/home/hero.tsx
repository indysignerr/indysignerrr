"use client";

import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/content";

const heroLogos = [
  { src: "/logos/claude.svg", name: "Claude", role: "AI copilot" },
  { src: "/logos/nextjs.svg", name: "Next.js", role: "Framework" },
  { src: "/logos/cloudflare.svg", name: "Cloudflare", role: "Hosting · CDN" },
  { src: "/logos/github.svg", name: "GitHub", role: "Versioning" },
  { src: "/logos/decap.svg", name: "Decap CMS", role: "Content" },
];

interface FloatingLogoProps {
  src: string;
  name: string;
  role: string;
  position: string;
  rotate: string;
  size: "sm" | "md" | "lg";
  delay: number;
}

function FloatingLogo({ src, name, role, position, rotate, size, delay }: FloatingLogoProps) {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`absolute ${position}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div
        className={`${sizeClass} flex flex-col items-center justify-center gap-2 rounded-2xl border border-ocean-deep/10 bg-paper shadow-[0_18px_40px_-12px_rgba(10,31,58,0.25)] transition-transform duration-300 hover:scale-[1.05]`}
      >
        <img
          src={src}
          alt={`${name} — ${role}`}
          className={`${iconSize} object-contain`}
          loading="eager"
          decoding="async"
        />
        <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-ocean-deep/80">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] overflow-hidden flex flex-col items-center justify-center isolate"
    >
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-20" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      {/* 5 logos en constellation autour du titre — desktop uniquement.
          Cachés sur mobile (hidden md:block) pour laisser respirer le hero
          sur petit écran. Top values reculées (18-22%) pour aérer le header. */}
      <FloatingLogo
        {...heroLogos[0]}
        position="hidden md:block md:top-[20%] md:left-[6%]"
        rotate="-8deg"
        size="sm"
        delay={0.5}
      />
      <FloatingLogo
        {...heroLogos[1]}
        position="hidden md:block md:top-[18%] md:left-[78%]"
        rotate="8deg"
        size="md"
        delay={0.7}
      />
      <FloatingLogo
        {...heroLogos[3]}
        position="hidden md:block md:top-[46%] md:left-[85%]"
        rotate="12deg"
        size="md"
        delay={0.9}
      />
      <FloatingLogo
        {...heroLogos[2]}
        position="hidden md:block md:top-[66%] md:left-[5%]"
        rotate="-6deg"
        size="lg"
        delay={1.1}
      />
      <FloatingLogo
        {...heroLogos[4]}
        position="hidden md:block md:top-[66%] md:left-[78%]"
        rotate="6deg"
        size="lg"
        delay={1.3}
      />

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
