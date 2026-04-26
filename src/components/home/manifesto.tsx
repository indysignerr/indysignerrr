"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

const promises = [
  {
    label: "Livré en 7 jours",
    detail: "Du brief à la mise en ligne. Pas de mois d'attente.",
  },
  {
    label: "À vous pour toujours",
    detail: "Code, domaine, hébergement — comptes à votre nom.",
  },
  {
    label: "Aucun abonnement",
    detail: "Vous payez une fois. 329€. Puis plus rien. À vie.",
  },
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative overflow-hidden bg-ocean-deep text-paper py-40 md:py-56"
    >
      <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 md:items-center">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
              L'offre en une image
            </p>
            <div className="mt-8 font-display text-[clamp(5rem,16vw,11rem)] leading-[0.85] tracking-tight text-paper">
              {isInView && (
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.06}
                  staggerFrom="first"
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  }}
                >
                  329€
                </VerticalCutReveal>
              )}
            </div>
            <p className="mt-6 font-display italic text-2xl md:text-3xl text-paper/90 leading-snug">
              Un site pro. À vous. Pour toujours.
            </p>
            <p className="mt-4 max-w-md text-base text-paper/70">
              Vous payez une fois. Je livre. Je disparais. Vous gardez tout —
              code, domaine, comptes, admin.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link href="/offres">
                  Voir L'Offre en détail
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <ul className="md:col-span-6 grid gap-px bg-paper/10 rounded-3xl overflow-hidden">
            {promises.map((promise, i) => (
              <motion.li
                key={promise.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ocean-deep p-8 md:p-10"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sand-warm">
                  0{i + 1}
                </p>
                <p className="mt-3 font-display text-2xl md:text-3xl text-paper">
                  {promise.label}
                </p>
                <p className="mt-3 text-sm text-paper/70">{promise.detail}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
