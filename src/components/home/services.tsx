import {
  InteractiveImageAccordion,
  type AccordionItem,
} from "@/components/ui/interactive-image-accordion";

const items: AccordionItem[] = [
  {
    id: 1,
    title: "Design éditorial sur-mesure",
    subtitle: "01 · Direction artistique",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Motion & micro-interactions",
    subtitle: "02 · Animation",
    imageUrl:
      "https://images.unsplash.com/photo-1547027275-6e5b25e29cae?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Développement Next.js premium",
    subtitle: "03 · Build",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "SEO local & structure",
    subtitle: "04 · Visibilité",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Maintenance & évolution",
    subtitle: "05 · Suivi",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <InteractiveImageAccordion
      eyebrow="Ce qu'on fait"
      title="Cinq savoir-faire. Un site qui te ressemble."
      description="Chaque projet mobilise cinq expertises — de la direction artistique à la maintenance. Pas de sous-traitance : tu travailles directement avec Indy, point."
      items={items}
      defaultIndex={0}
      ctaLabel="Voir les détails"
      ctaHref="/services"
    />
  );
}
