import { ZoomParallax } from "@/components/ui/zoom-parallax";

const parallaxImages = [
  { src: "/projects/gaosons/01-hero.jpg", alt: "Gaoson's Barber Shop — hero" },
  {
    src: "/projects/gaosons/02-prestations.jpg",
    alt: "Gaoson's — prestations",
  },
  { src: "/projects/gaosons/03-univers.jpg", alt: "Gaoson's — sneakers" },
  { src: "/projects/gaosons/04-salon.jpg", alt: "Gaoson's — intérieur salon" },
  { src: "/projects/wakeapp/02-modules.jpg", alt: "WakeApp — modules" },
  { src: "/projects/wakeapp/03-ceo-mode.jpg", alt: "WakeApp — CEO Mode" },
  {
    src: "/projects/wakeapp/04-commencer.jpg",
    alt: "WakeApp — prendre le contrôle",
  },
];

export function ZoomShowcase() {
  return (
    <section className="relative bg-ocean-deep overflow-hidden">
      <div className="relative z-10 pt-24 md:pt-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sand-warm">
            Immersion
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-paper">
            <em className="italic font-normal">Scroll</em> dans les projets.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-paper/70">
            Sept extraits. Chacun zoome à son rythme. Continue le scroll pour
            voir les cas détaillés.
          </p>
        </div>
      </div>
      <ZoomParallax images={parallaxImages} />
    </section>
  );
}
