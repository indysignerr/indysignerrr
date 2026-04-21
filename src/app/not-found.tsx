import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden flex min-h-[80vh] items-center">
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-10 py-24">
        <Eyebrow>Erreur 404</Eyebrow>
        <h1 className="mt-4 font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-ink">
          Cette page
          <br />
          <em className="italic font-normal text-coral">n'existe pas.</em>
        </h1>
        <p className="mt-10 max-w-xl text-lg md:text-xl text-ink-soft">
          Mais ton site peut exister en 7 jours pour 329€. Propriété totale
          garantie, aucun abonnement, aucune dépendance.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="primary">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/offres">
              Voir L'Offre
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
