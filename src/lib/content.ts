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

export const brand: Brand = {
  name: "Indysigner",
  tagline: "Votre site en 10 jours chrono.",
  manifesto:
    "On conçoit des sites qui marquent les esprits. Design unique. Livraison express. Prix juste.",
  metaDescription:
    "Agence web indépendante française. Sites vitrines premium, livrés en 7 jours. Propriété totale du client sur son site.",
  email: "contact@indysigner.fr",
  phone: "07 69 76 20 76",
  address: "222 chemin de la Brague, 06410 Biot, France",
  siret: "[À COMPLÉTER]",
  ape: "6201Z — Programmation informatique",
  tvaMention: "Non applicable, article 293 B du CGI",
  socials: {
    instagram: "https://www.instagram.com/_indysigner/",
    linkedin: "https://www.linkedin.com/in/indy-fran%C3%A7ois-37a451284/",
  },
};

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
      "Design premium sur-mesure, rédaction SEO locale, intégration complète, livré en 7 jours.",
  },
  {
    number: "02",
    title: "Motion Design & Animations",
    description:
      "Scroll narratif, transitions cinématiques, micro-interactions qui transforment un site en expérience.",
  },
  {
    number: "03",
    title: "Maintenance & Évolution",
    description:
      "Modifications illimitées, corrections, optimisations continues. Tu ne touches à rien, ton site vit.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Brief gratuit sous 48h. On cadre ton projet, tes objectifs, ta cible.",
  },
  {
    number: "02",
    title: "Maquette",
    description: "Maquette visuelle avant tout engagement. Si tu aimes pas, tu pars.",
  },
  {
    number: "03",
    title: "Développement",
    description: "7 jours ouvrés de la validation à la mise en ligne. Suivi temps réel.",
  },
  {
    number: "04",
    title: "Livraison & Propriété",
    description:
      "Transfert complet du code, domaine et admin. Le site t'appartient à vie.",
  },
];

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
      "Prix clairs, processus limpide, communication directe. Zéro mauvaise surprise.",
  },
  {
    title: "Innovation",
    description:
      "On utilise les meilleures technologies et l'IA pour aller plus vite sans sacrifier la qualité.",
  },
  {
    title: "Accessibilité",
    description:
      "Un site premium ne devrait pas coûter 5 000€. On rend la qualité accessible.",
  },
];

export const valuesPullQuote = "Pas un template. Un site qui te ressemble.";

export type Stat = {
  label: string;
  value: string;
};

export const stats: Stat[] = [
  { label: "Sites livrés", value: "30+" },
  { label: "Satisfaction clients", value: "100%" },
  { label: "Délai moyen", value: "7 jours" },
  { label: "Temps de réponse", value: "24h" },
];

/* ============================================
   PRICING
   ============================================ */

export type PricingPlan = {
  key: "autonomie" | "serenite";
  badge: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  contextLine: string;
  features: string[];
  extraNote?: string;
  cta: string;
  ctaMicro?: string;
};

export const pricing: { autonomie: PricingPlan; serenite: PricingPlan } = {
  autonomie: {
    key: "autonomie",
    badge: "LE PLUS VENDU",
    name: "Autonomie",
    tagline: "Tu payes une fois. C'est à toi. Pour toujours.",
    price: "490€",
    priceSuffix: "une seule fois · tout compris",
    contextLine: "Puis 0€. À vie.",
    features: [
      "Création site vitrine sur-mesure",
      "Design premium + animations au scroll",
      "Rédaction complète (FR, SEO local)",
      "Intégration photos fournies ou sourcées",
      "Version mobile optimisée",
      "Interface admin simple",
      "Setup technique complet (domaine, hébergement, admin)",
      "Formation 1h (visio ou présentiel)",
      "Manuel d'utilisation PDF",
      "Support technique 30 jours",
      "Hébergement gratuit à vie",
    ],
    extraNote: "Après 30 jours : grille tarifaire claire à partir de 35€.",
    cta: "Démarrer mon projet",
    ctaMicro: "Devis sous 24h. Maquette gratuite avant tout engagement.",
  },
  serenite: {
    key: "serenite",
    badge: "LE PLUS TRANQUILLE",
    name: "Sérénité",
    tagline: "Tu ne touches à rien. Jamais. Je m'occupe de tout.",
    price: "250€ + 200€/an",
    priceSuffix: "(ou 20€/mois)",
    contextLine: "+10€/mois si tu veux que je gère aussi ton domaine",
    features: [
      "Tout Autonomie (sans la formation)",
      "Modifications illimitées (textes, photos, horaires)",
      "Ajout de pages à la demande",
      "Refonte de sections",
      "Widgets tiers (réservation, carte, formulaire)",
      "SEO continu",
      "Corrections bugs et mises à jour",
      "Support sous 48h ouvrées",
      "Conseils stratégiques",
    ],
    extraNote:
      "Annuel (200€) = 2 mois offerts. Résiliable à tout moment avec 30 jours préavis. Ton site reste à toi.",
    cta: "Démarrer mon projet",
  },
};

export type PricingRow = {
  label: string;
  price: string;
  note?: string;
};

export const pricingFormulas: PricingRow[] = [
  { label: "Autonomie", price: "490€", note: "One-shot" },
  { label: "Sérénité mensuel", price: "250€ + 20€/mois", note: "Récurrent" },
  { label: "Sérénité annuel", price: "250€ + 200€/an", note: "2 mois offerts" },
  {
    label: "Option domaine géré (Sérénité)",
    price: "+10€/mois ou +100€/an",
    note: "Additionnel",
  },
];

export const interventions: PricingRow[] = [
  { label: "Intervention simple", price: "35€" },
  { label: "Intervention complexe", price: "80€" },
  { label: "Refonte section", price: "100€" },
  { label: "Ajout page", price: "100€" },
  { label: "Formation 1h", price: "60€" },
  { label: "Widget tiers", price: "60€" },
  { label: "Récupération site cassé", price: "180€" },
];

export const packs: PricingRow[] = [
  { label: "3 interventions simples", price: "90€", note: "Économie 15€" },
  { label: "5 interventions simples", price: "140€", note: "Économie 35€" },
];

export const extras: PricingRow[] = [
  { label: "Pack photos pro (shooting 2h)", price: "250€" },
  { label: "Pack visuels IA (6 illustrations)", price: "120€" },
  { label: "Article SEO 800 mots", price: "80€" },
  { label: "Logo simple", price: "150€" },
  { label: "Setup Google My Business", price: "80€" },
  { label: "Connexion formulaire CRM", price: "60€" },
];

/* ============================================
   COMPARATIF ANTI-WIX
   ============================================ */

export type ComparisonRow = {
  criteria: string;
  wix: string;
  autonomie: string;
  serenite: string;
};

export const comparisonTitle =
  "Sur Wix, tu loues une cage dorée. Chez Indysigner, tu construis ta maison.";

export const comparison: ComparisonRow[] = [
  {
    criteria: "Coût 1ère année",
    wix: "192€",
    autonomie: "490€",
    serenite: "450€",
  },
  { criteria: "Coût année 2", wix: "192€", autonomie: "0€", serenite: "200€" },
  {
    criteria: "Coût total 3 ans",
    wix: "576€",
    autonomie: "490€",
    serenite: "850€",
  },
  {
    criteria: "Design sur-mesure",
    wix: "Templates",
    autonomie: "Oui",
    serenite: "Oui",
  },
  {
    criteria: "Propriété du site",
    wix: "Non",
    autonomie: "Oui",
    serenite: "Oui",
  },
  {
    criteria: "Hébergement",
    wix: "Loyer à vie",
    autonomie: "Gratuit à vie",
    serenite: "Inclus",
  },
  {
    criteria: "Si tu arrêtes",
    wix: "Site supprimé",
    autonomie: "Site reste à toi",
    serenite: "Site reste à toi",
  },
  {
    criteria: "Qualité design",
    wix: "Moyenne",
    autonomie: "Premium",
    serenite: "Premium",
  },
];

/* ============================================
   FAQ PRICING
   ============================================ */

export type FaqItem = {
  question: string;
  answer: string;
};

export const pricingFaq: FaqItem[] = [
  {
    question:
      "Est-ce que je peux vraiment modifier mon site moi-même sans connaissances techniques ?",
    answer:
      "Oui, complètement. L'interface d'administration ressemble à un formulaire : tu cliques sur \"Horaires\", tu écris tes nouveaux horaires, tu cliques \"Publier\". 2 minutes plus tard, ton site est à jour. Je te forme pendant 1h pour que tu sois à l'aise. Personne n'a jamais eu besoin d'une deuxième formation.",
  },
  {
    question:
      "Qu'est-ce qui se passe si j'arrête de payer la maintenance (formule Sérénité) ?",
    answer:
      "Ton site reste à toi. Tu récupères tes accès complets (domaine, hébergement, interface admin), tu continues à gérer ton site seul. Aucune coupure, aucune perte. La différence avec Wix : tu ne redémarres pas à zéro, tu continues avec TON site existant.",
  },
  {
    question: "Pourquoi c'est moins cher que les autres agences ?",
    answer:
      "Parce que j'utilise des outils d'IA avancés pour accélérer la création. Ce qui prenait 3 semaines prend 3 jours. Je répercute ce gain sur le prix. La qualité ne change pas : chaque site est pensé sur-mesure selon ton secteur, ta cible, ton positionnement.",
  },
  {
    question: "Je peux commencer en Autonomie et passer en Sérénité plus tard ?",
    answer:
      "Absolument. Tu payes 490€ pour Autonomie, et si dans 6 mois tu en as marre de modifier toi-même, tu bascules en Sérénité. Tu payes alors uniquement les 200€/an (pas de nouveaux frais de création).",
  },
  {
    question: "Et si je veux partir chez une autre agence ou reprendre la main ?",
    answer:
      "Tu pars avec tout. Le code de ton site, ton nom de domaine, ton interface d'administration. Aucune prise d'otage. C'est ma promesse dès le premier jour : propriété totale du client sur son site.",
  },
  {
    question: "Combien de temps entre la commande et la mise en ligne ?",
    answer:
      "7 jours ouvrés entre la validation du brief et la livraison. Jour 1-2 : Design et structure. Jour 3-4 : Rédaction et intégration contenus. Jour 5 : Version mobile et optimisation. Jour 6 : Ajustements selon tes retours. Jour 7 : Mise en ligne et formation (pour Autonomie).",
  },
  {
    question: "Est-ce que je peux voir ce que ça va donner avant de payer ?",
    answer:
      "Oui. Je propose une maquette gratuite sous 48h après réception de ton brief. Tu vois concrètement à quoi ton site ressemblera, et tu décides ensuite.",
  },
  {
    question: "Vous faites des e-commerces ou des systèmes de réservation ?",
    answer:
      "Je fais des sites vitrines exclusivement. Si tu as besoin de réservation (restaurant, consultation) ou de paiement, j'intègre des outils tiers reconnus (Zenchef, Tableo, Stripe Link, Calendly) directement sur ton site. Pas de développement e-commerce custom.",
  },
  {
    question: "Ça marche pour quels types de métiers ?",
    answer:
      "Restaurateurs, artisans, barbiers, kinésithérapeutes, ostéopathes, avocats, notaires, experts-comptables, coaches, consultants, freelances, associations. Si tu n'es pas sûr, envoie-moi un message : je te dis honnêtement si ton cas entre dans mon offre ou non.",
  },
  {
    question: "Je paye comment ?",
    answer:
      "Par carte bancaire via Stripe, en 1 fois ou 2 fois (50% commande, 50% livraison pour Autonomie). Pour Sérénité mensuelle, prélèvement automatique. Pour Sérénité annuelle, paiement unique annuel. Tu reçois une facture pour ta comptabilité.",
  },
];

/* ============================================
   RÉASSURANCE
   ============================================ */

export type ReassuranceBlock = {
  icon: "flag" | "bolt" | "lock";
  title: string;
  description: string;
};

export const reassurance: ReassuranceBlock[] = [
  {
    icon: "flag",
    title: "Freelance basé à Biot",
    description: "Tu parles à Indy directement, personne d'autre.",
  },
  {
    icon: "bolt",
    title: "Livraison en 7 jours",
    description: "Pas de mois d'attente, pas de charges inutiles.",
  },
  {
    icon: "lock",
    title: "Propriété garantie",
    description: "Ton site t'appartient. Clause écrite dans le contrat.",
  },
];

/* ============================================
   NAVIGATION
   ============================================ */

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNavigation = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
] as const;
