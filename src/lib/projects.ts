export type ProjectCategory = "Site Vitrine" | "Sur-Mesure" | "Refonte";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  year: number;
  duration: string;
  url?: string;
  tags: string[];
  context: string;
  problem: string;
  solution: string;
  results: string[];
  testimonial: { quote: string; author?: string };
}

export const projects: Project[] = [
  {
    slug: "gaosons-barber-shop",
    name: "Gaoson's Barber Shop",
    category: "Site Vitrine",
    year: 2025,
    duration: "10 jours",
    url: "https://gaoson-barbershop.fr",
    tags: ["Next.js", "Tailwind", "Booksy", "SEO Local"],
    context:
      "Barbershop premium à Biot, Côte d'Azur. Identité streetwear + raffinement, typographies gothiques, univers sneakers parallèle.",
    problem:
      "Aucune présence en ligne à la hauteur de l'identité. Clients découvraient uniquement par bouche-à-oreille ou Instagram. Perte en crédibilité face aux concurrents mieux référencés.",
    solution:
      "Site vitrine premium capturant l'atmosphère. Design full black avec typographie gothique sur-mesure, hero immersif, section prestations épurée (Coupe 20€, Coupe & Barbe 25€) avec CTA Booksy, section sneakers avec renvoi Instagram.",
    results: [
      "Top 3 Google \"barbershop Biot\"",
      "60% ↑ réservations Booksy",
      "2m15s temps moyen de visite",
      "10j délai livraison",
    ],
    testimonial: {
      quote:
        "Le site ressemble exactement à ce qu'on est. Les gens arrivent au salon et nous disent que le site leur avait déjà donné envie de venir. Indy a capté notre univers dès le premier échange.",
      author: "Gaoson, fondateur",
    },
  },
  {
    slug: "krnl-studio",
    name: "KRNL Studio",
    category: "Sur-Mesure",
    year: 2024,
    duration: "3 semaines",
    tags: ["Next.js", "Stripe", "Prisma", "GSAP"],
    context: "Marque de streetwear éco-responsable.",
    problem: "Croissance limitée par Instagram, pas d'e-commerce propre.",
    solution:
      "Site immersif full-page avec animations GSAP scroll, checkout Stripe, inventaire Prisma, pages produits avec traçabilité matières.",
    results: [
      "4,2% conversion",
      "Panier moyen 127€",
      "340+ ventes premier mois",
      "4m32s temps moyen",
    ],
    testimonial: {
      quote: "Une expérience immersive qui reflète parfaitement notre univers.",
    },
  },
  {
    slug: "wakeapp",
    name: "WakeApp",
    category: "Site Vitrine",
    year: 2026,
    duration: "12 jours",
    url: "https://the-wakeapp.com",
    tags: ["Next.js", "Framer Motion", "App Store", "Conversion"],
    context: "Application mobile de productivité et discipline personnelle.",
    problem:
      "Pas de landing page → invisible ; utilisateurs ne comprenaient pas l'app.",
    solution:
      "Landing page immersive cohérente avec l'app, hero iPhone mockup, cards modules (To-Do, Calendar, Notes), \"CEO Mode\" mis en avant, CTA App Store.",
    results: [
      "18% conversion visiteur → téléchargement",
      "350% ↑ téléchargements",
      "1m50s temps moyen",
    ],
    testimonial: {
      quote:
        "La landing page explique tout en 30 secondes et les gens téléchargent.",
      author: "CEO WakeApp",
    },
  },
  {
    slug: "cote-et-saveurs",
    name: "Côte & Saveurs",
    category: "Sur-Mesure",
    year: 2025,
    duration: "4 semaines",
    tags: ["Next.js", "Stripe", "Google Calendar API"],
    context: "Traiteur méditerranéen haut de gamme.",
    problem:
      "Commandes manuelles par téléphone/email, erreurs fréquentes, pas de présence en ligne au niveau du positionnement premium.",
    solution:
      "Plateforme sur-mesure avec catalogue visuel, système de devis interactif, sélection créneaux via Google Calendar API, acompte Stripe, dashboard admin.",
    results: [
      "45+ commandes en ligne / mois",
      "0 erreur de commande",
      "35% ↑ chiffre d'affaires",
      "98% satisfaction",
    ],
    testimonial: {
      quote:
        "Les clients commandent en ligne sans même nous appeler — et les commandes sont parfaites du premier coup.",
    },
  },
  {
    slug: "atelier-noma",
    name: "Atelier Noma",
    category: "Refonte",
    year: 2025,
    duration: "3 semaines",
    tags: ["Next.js", "GSAP", "Three.js", "Framer Motion"],
    context: "Studio d'architecture d'intérieur.",
    problem:
      "Site de 2017 — statique, non-responsive, ne reflétait pas la dimension artistique.",
    solution:
      "Refonte complète avec narration éditoriale, galerie GSAP interactive avec transitions fluides, zoom haute résolution, scroll reveals, parallax, formulaire de qualification de projets.",
    results: [
      "3× temps sur le site",
      "12+ demandes qualifiées / mois",
      "45% ↓ taux de rebond",
      "98/100 Lighthouse",
    ],
    testimonial: {
      quote: "Notre site reflète enfin l'ambition de notre studio.",
    },
  },
  {
    slug: "greenpulse",
    name: "GreenPulse",
    category: "Site Vitrine",
    year: 2025,
    duration: "2 semaines",
    url: "https://greenpulse.io",
    tags: ["Next.js", "D3.js", "GSAP", "Framer Motion"],
    context: "Startup cleantech en levée de fonds Série A de 3M€.",
    problem:
      "Site WordPress générique, impossible de démontrer le produit, manque de crédibilité auprès des investisseurs.",
    solution:
      "Site tech-forward avec animations de données temps réel (D3.js), démo interactive dashboard SaaS, visualisations impact CO₂, téléchargement deck investisseur.",
    results: [
      "4m12s temps moyen investisseur",
      "Série A 3M€ closée en 6 semaines",
      "99/100 PageSpeed",
      "28+ leads qualifiés / mois",
    ],
    testimonial: {
      quote:
        "Plusieurs investisseurs nous ont dit que notre site était le meilleur qu'ils avaient vu. La levée s'est clôturée en 6 semaines.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
