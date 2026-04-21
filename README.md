# Indysigner — Site officiel

Site vitrine d'Indysigner, agence web indépendante (Biot, Côte d'Azur).
Direction artistique **Ocean Editorial** : palette navy/beige chaud, typographie éditoriale (Fraunces italic + Geist Sans), mesh gradients, texture grain, asymétrie scroll.

## Stack

- **Next.js 16** (App Router, Turbopack, TS strict, `src/`)
- **React 19**
- **Tailwind CSS v4** (tokens via `@theme inline`)
- **Framer Motion** — reveals, hero
- **Lenis** — smooth scroll global (respecte `prefers-reduced-motion`)
- **Radix UI** — accordion, select, checkbox
- **Resend** — API envoi formulaire contact
- **lucide-react** — icônes

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Homepage — hero, services, portfolio (4), process, témoignages, CTA |
| `/services` | Détail 3 services + process |
| `/portfolio` | Grille 6 projets |
| `/portfolio/[slug]` | Case study (contexte, problème, solution, résultats, témoignage) |
| `/tarifs` | 2 formules, grille, comparatif anti-Wix, FAQ (10 questions), réassurance |
| `/a-propos` | Valeurs, pull quote, stats |
| `/contact` | Formulaire + coordonnées · API `/api/contact` via Resend |
| `/mentions-legales` | LCEN |
| `/politique-confidentialite` | RGPD |
| `/cgv` | 17 articles B2B |

## Données

Tout le contenu éditorial est dans `src/lib/content.ts` et `src/lib/projects.ts` — typé TypeScript, réutilisé par toutes les pages.

Sources originales (markdown) :
- `INDYSIGNER_CONTENT.md`
- `INDYSIGNER_LEGAL.md`

## Local

```bash
cp .env.example .env.local
# Ajouter RESEND_API_KEY=re_...

npm install
npm run dev        # http://localhost:3000
npm run build      # production
npm run typecheck  # tsc --noEmit
```

## Variables d'environnement

| Clé | Usage | Requis |
| --- | --- | --- |
| `RESEND_API_KEY` | Envoi du formulaire de contact (`/api/contact`) | Oui |

## Design tokens

Définis dans `src/app/globals.css` via `@theme inline` :

- `ocean-deep` `#0a1f3a` · `ocean-blue` `#1e4d72` · `ocean-mid` `#3a6f95`
- `sky-cloudy` `#c5d5e0` · `sky-mist` `#e6edf2`
- `sand-warm` `#e8d9c0` · `sand-light` `#f2ead8`
- `paper` `#faf8f3` · `ink` `#0b0d12` · `ink-soft` `#2a2d35` · `muted` `#7a7f88`

Typographies : **Fraunces** (display italic), **Geist Sans** (body), **Geist Mono** (eyebrow tracking).

## À compléter

- `SIRET` dans `src/lib/content.ts` (`brand.siret`)
- `[DATE DE PUBLICATION]` dans les 3 pages légales
- `RESEND_API_KEY` en production
