"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-32 lg:py-48">
      <div aria-hidden className="mesh-ocean absolute inset-0 opacity-80" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
          Prêt à lancer{" "}
          <em className="italic font-normal text-coral">votre projet&nbsp;?</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-ink-soft">
          Devis gratuit · Réponse sous 24h · Zéro engagement. La maquette
          arrive dans les 48h.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">
              Démarrer un projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/tarifs">Voir les tarifs</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
