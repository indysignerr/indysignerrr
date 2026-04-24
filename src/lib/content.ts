import brandData from "./generated/brand.json";
import pricingData from "./generated/pricing.json";
import faqData from "./generated/faq.json";

export type Brand = {
  name: string;
  tagline: string;
  manifesto: string;
  metaDescription: string;
  email: string;
  phone: string;
  address: string;
  siret: string;
  ape: string;
  tvaMention: string;
  socials: {
    instagram: string;
    linkedin: string;
  };
};

// Source : content/settings/brand.json (éditable via Decap CMS)
// Les champs ape/tvaMention sont statiques (infos légales non éditées)
export const brand: Brand = {
  ...(brandData as Omit<Brand, "ape" | "tvaMention">),
  ape: "6201Z — Programmation informatique",
  tvaMention: "Non applicable, article 293 B du CGI",
};

/* ============================================
   SERVICES (homepage + offres)
   ============================================ */

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Site Vitrine Sur-Mesure",
    description:
      "Design premium sur-mesure, rédaction SEO locale, intégration complète, livré en 7 jours. Une seule offre : 329€.",
  },
  {
    number: "02",
    title: "Motion Design & Animations",
    description:
      "Scroll narratif, transitions cinématiques, micro-interactions qui transforment un site en expérience.",
  },
  {
    number: "03",
    title: "Propriété totale à vie",
    description:
      "Comptes GitHub et Cloudflare à ton nom, domaine transféré, admin en clair. Tu gères ton site, je disparais.",
  },
];

/* ============================================
   PROCESS (4 jours structurés)
   ============================================ */

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Jour 1-2 · Brief & design",
    description:
      "Tu remplis le brief. Je te propose une maquette sous 48h. Tu valides ou on ajuste.",
  },
  {
    number: "02",
    title: "Jour 3-5 · Construction",
    description:
      "Je code ton site. Rédaction, intégration, mobile, SEO local. Lien de preview partagé.",
  },
  {
    number: "03",
    title: "Jour 6 · Ajustements",
    description:
      "Tu me fais tes retours finaux. J'ajuste jusqu'à validation complète.",
  },
  {
    number: "04",
    title: "Jour 7 · Livraison totale",
    description:
      "Comptes GitHub et Cloudflare à ton nom. Transfert, formation 1h, accès remis. Je disparais.",
  },
];

/* ============================================
   VALEURS (/a-propos)
   ============================================ */

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Rapidité",
    description: "7 jours de la signature au lancement. On ne traîne pas.",
  },
  {
    title: "Transparence",
    description:
      "Un prix unique affiché. Pas de upsell, pas d'option cachée, pas de devis à rallonge.",
  },
  {
    title: "Indépendance",
    description:
      "Tu deviens seul propriétaire de ton site. GitHub, Cloudflare, domaine — tout à ton nom.",
  },
  {
    title: "Accessibilité",
    description:
      "Un site premium à 329€, pas 3 000€. La qualité ne devrait pas être réservée aux grandes structures.",
  },
];

export const valuesPullQuote = "329€. Un site pro. À toi. Pour toujours. Je disparais.";

/* ============================================
   STATS
   ============================================ */

export type Stat = {
  label: string;
  value: string;
};

export const stats: Stat[] = [
  { label: "Prix unique", value: "329€" },
  { label: "Délai de livraison", value: "7 jours" },
  { label: "Satisfaction clients", value: "100%" },
  { label: "Temps de réponse", value: "24h" },
];

/* ============================================
   PRICING — FORMULE UNIQUE 329€ + OPTION +90€
   ============================================ */

export const pricingTagline =
  "Tu payes une fois. Tu reçois un site pro, complet, optimisé, à ton nom. Tu le gères toi-même. Je ne te recontacte jamais.";

export type MainOffer = {
  badge: string;
  name: string;
  price: string;
  priceSuffix: string;
  contextLine: string;
  features: string[];
  closingNote: string;
  cta: string;
  ctaMicro: string;
};

// Source : content/settings/pricing.json (éditable via Decap CMS)
const _pricingDataTyped = pricingData as {
  mainOffer: Omit<MainOffer, "badge" | "name">;
  pricingOption: Omit<PricingOption, "badge" | "priceSuffix" | "cta">;
};
export const mainOffer: MainOffer = {
  badge: "Formule unique",
  name: "Site pro à 329€",
  ..._pricingDataTyped.mainOffer,
};

export type PricingOption = {
  badge: string;
  name: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  features: string[];
  smallText: string;
  cta: string;
};

export const pricingOption: PricingOption = {
  badge: "Option",
  priceSuffix: "à ajouter à la commande",
  cta: "Ajouter à ma commande",
  ..._pricingDataTyped.pricingOption,
};

/* ============================================
   COMPARATIF (3 colonnes : Wix / Agence / Indysigner)
   ============================================ */

export const comparisonTitle =
  "Pourquoi pas Wix, Squarespace, ou une agence classique ?";

export const comparisonSubtitle =
  "Le site que tu as loué toute ta vie à 16€/mois, tu l'as payé 960€ sur 5 ans. Le mien, tu le payes 329€ une fois. Et il reste le tien.";

export type ComparisonRow = {
  criteria: string;
  wix: string;
  agency: string;
  indysigner: string;
};

export const comparison: ComparisonRow[] = [
  {
    criteria: "Coût 1ère année",
    wix: "192€",
    agency: "1 500 – 3 000€",
    indysigner: "329€",
  },
  {
    criteria: "Coût année 2+",
    wix: "192€/an",
    agency: "30 – 60€/mois",
    indysigner: "0€",
  },
  {
    criteria: "Coût sur 5 ans",
    wix: "960€",
    agency: "3 000€+",
    indysigner: "329€",
  },
  {
    criteria: "Design sur-mesure",
    wix: "Non",
    agency: "Oui",
    indysigner: "Oui",
  },
  {
    criteria: "Propriété totale",
    wix: "Non",
    agency: "Variable",
    indysigner: "Oui",
  },
  {
    criteria: "Tu modifies toi-même",
    wix: "Oui",
    agency: "Non",
    indysigner: "Oui",
  },
  {
    criteria: "Hébergement",
    wix: "Loyer à vie",
    agency: "Loyer à vie",
    indysigner: "Gratuit à vie",
  },
  {
    criteria: "Si tu arrêtes de payer",
    wix: "Site supprimé",
    agency: "Site coupé",
    indysigner: "Rien ne change",
  },
];

/* ============================================
   FAQ (10 questions)
   ============================================ */

export type FaqItem = {
  question: string;
  answer: string;
};

// Source : content/faq/*.md (éditable via Decap CMS)
export const pricingFaq: FaqItem[] = (faqData as FaqItem[]).map(
  ({ question, answer }) => ({ question, answer })
);

/* ============================================
   RÉASSURANCE (3 blocs)
   ============================================ */

export type ReassuranceBlock = {
  icon: "flag" | "bolt" | "lock";
  title: string;
  description: string;
};

export const reassurance: ReassuranceBlock[] = [
  {
    icon: "flag",
    title: "Freelance à Biot",
    description:
      "Tu parles à Indy directement. Pas de commercial, pas d'intermédiaire.",
  },
  {
    icon: "bolt",
    title: "Livraison en 7 jours",
    description: "Une fois payé, tu as ton site dans la semaine.",
  },
  {
    icon: "lock",
    title: "Propriété totale garantie",
    description:
      "Ton site, ton code, ton domaine, tes comptes. À toi. Pour toujours.",
  },
];

/* ============================================
   NAVIGATION
   ============================================ */

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "L'Offre", href: "/offres" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNavigation = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
] as const;
