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
  tagline: "329€. Un site pro. À toi. Pour toujours.",
  manifesto:
    "Tu payes une fois. Tu reçois un site pro, complet, optimisé, à ton nom. Tu le gères toi-même. Je ne te recontacte jamais.",
  metaDescription:
    "Agence web indépendante française. 329€, un site vitrine premium livré en 7 jours, à ton nom pour toujours. Aucun abonnement.",
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

export const mainOffer: MainOffer = {
  badge: "Formule unique",
  name: "Site pro à 329€",
  price: "329€",
  priceSuffix: "une fois · à vie · fini",
  contextLine: "Puis 0€. À vie.",
  features: [
    "Création de ton site vitrine sur-mesure",
    "Design premium avec animations au scroll",
    "Rédaction complète des contenus (FR, SEO local)",
    "Intégration de tes photos ou sourcing d'images",
    "Version mobile optimisée",
    "Interface d'administration simple",
    "Création de tes comptes GitHub et Cloudflare à ton nom",
    "Transfert complet du site sur tes comptes",
    "Connexion de ton nom de domaine",
    "Formation 1h (visio ou présentiel)",
    "Manuel d'utilisation PDF",
    "Garantie 30 jours après livraison",
    "Hébergement gratuit à vie (Cloudflare)",
  ],
  closingNote:
    "C'est tout. Pas de maintenance, pas d'abonnement, pas de SAV qui traîne. Ton site, ton contrôle, ta liberté.",
  cta: "Démarrer mon projet",
  ctaMicro: "Maquette gratuite sous 48h. Devis ferme sous 24h.",
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
  name: "Pack Modifications",
  subtitle: "Pour ceux qui veulent une marge de sécurité la 1ère année.",
  price: "+90€",
  priceSuffix: "à ajouter à la commande",
  features: [
    "2 interventions majeures dans les 12 mois suivant la livraison",
    "Ajout d'une page, refonte d'une section, intégration d'un widget tiers, modification structurelle",
    "À utiliser quand tu veux dans l'année",
  ],
  smallText:
    "Option à prendre uniquement au moment de la commande. Non remboursable. Expire 12 mois après la livraison. Les petites modifs (horaires, photos, prix) tu les fais toi-même depuis ton interface admin.",
  cta: "Ajouter à ma commande",
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

export const pricingFaq: FaqItem[] = [
  {
    question: "Est-ce que je peux vraiment tout modifier moi-même ?",
    answer:
      "Oui. L'interface d'administration ressemble à un formulaire : tu cliques sur \"Horaires\", tu tapes tes nouveaux horaires, tu cliques \"Publier\". 2 minutes plus tard, c'est à jour sur ton site. Je te forme 1h pour que tu sois à l'aise. Le manuel PDF répond à 99% des cas d'usage.",
  },
  {
    question:
      "Et si je casse mon site ou que je n'arrive plus à modifier quelque chose ?",
    answer:
      "Pendant les 30 premiers jours : je répare gratuitement (garantie). Au-delà : soit tu as pris le Pack Modifications à +90€ et tu as 2 interventions dans l'année, soit tu fais appel à un autre prestataire. Je ne reviens plus après 30 jours, c'est volontaire : c'est ce qui me permet de proposer 329€ au lieu de 1 500€.",
  },
  {
    question: "Pourquoi c'est moins cher que les autres ?",
    answer:
      "Parce que j'utilise des outils d'IA avancés (Claude Code, Next.js, Decap) pour accélérer la création. Ce qui prenait 3 semaines prend 3 jours. Je répercute ce gain sur le prix. Et je n'ai pas de coûts récurrents (pas de SAV, pas de serveurs, pas d'équipe), donc je peux pricer bas.",
  },
  {
    question: "Qu'est-ce qui se passe si Cloudflare ou GitHub change ses prix ?",
    answer:
      "C'est ta responsabilité après la livraison, puisque les comptes sont à ton nom. Mais pour te rassurer : à ce jour, GitHub et Cloudflare sont gratuits pour l'usage d'un site vitrine pro, et le resteront très probablement (ce sont leurs offres d'appel). Si un jour ça change, tu auras le code source et tu pourras migrer facilement chez un autre hébergeur gratuit.",
  },
  {
    question: "Je peux revenir te voir dans 2 ans pour refaire mon site ?",
    answer:
      "Bien sûr. Tu me recommandes, tu reviens pour une nouvelle version, tu payes 329€ pour un site flambant neuf. Mais entre-temps, je n'interviens pas sur ton site existant.",
  },
  {
    question: "Ça marche pour quels types de métiers ?",
    answer:
      "Restaurateurs, artisans, barbiers, kinés, ostéos, avocats, notaires, experts-comptables, coaches, consultants, freelances, associations. Tout pro qui a besoin d'un site vitrine propre, rapide, qui convertit. Si tu n'es pas sûr, envoie-moi un message : je te dis honnêtement si ça colle ou pas.",
  },
  {
    question: "Vous faites des e-commerces ou des systèmes de réservation ?",
    answer:
      "Je fais des sites vitrines. Pour les réservations, j'intègre des outils tiers (Zenchef, Tableo, Calendly). Pour les paiements en ligne, Stripe Link. Pas de développement custom e-commerce.",
  },
  {
    question: "Je paye comment ?",
    answer:
      "Par carte bancaire via Stripe. 50% à la commande (164,50€), 50% à la livraison (164,50€). Si tu prends le Pack Modifications : +90€ à la commande. Facture reçue par mail pour ta comptabilité.",
  },
  {
    question: "Vous travaillez où ?",
    answer:
      "Je suis basé à Biot (06). Je travaille avec des clients partout en France, 100% en distance. Pour la formation d'1h, on fait ça en visio (Google Meet). Pour les clients autour de Biot/Antibes/Sophia, je peux me déplacer.",
  },
  {
    question: "Et si je ne suis pas satisfait de la maquette ?",
    answer:
      "Tu n'as encore payé que 50%. Si la maquette ne te convient pas vraiment après 2 allers-retours, on arrête là. Je garde l'acompte (coût de la conception), tu ne vas pas plus loin. Honnête des deux côtés.",
  },
];

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
