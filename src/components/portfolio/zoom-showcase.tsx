import { ZoomParallax } from "@/components/ui/zoom-parallax";

// Mix éditorial : 3 Gaoson + 2 L'Ovive + 2 WakeApp.
// Alternance dark / clair / coloré pour rythmer le scroll.
const parallaxImages = [
  { src: "/projects/gaosons/gaoson1.png", alt: "Gaoson's Barber Shop — hero éditorial" },
  { src: "/projects/lovive/lovive1.jpg", alt: "L'Ovive — hero pont de nuit" },
  { src: "/projects/gaosons/gaoson3.png", alt: "Gaoson's — tarifs Booksy" },
  { src: "/projects/wakeapp/wakeapp2.png", alt: "WakeApp — modules" },
  { src: "/projects/lovive/lovive3.jpg", alt: "L'Ovive — ambiance et plats signature" },
  { src: "/projects/gaosons/gaoson2.png", alt: "Gaoson's — manifeste de marque" },
  { src: "/projects/wakeapp/wakeapp4.png", alt: "WakeApp — prendre le contrôle" },
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
