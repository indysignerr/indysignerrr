# Decap CMS — Indysigner

Interface d'édition en ligne à l'adresse **https://indysigner.fr/admin/**.

## Architecture

- `public/admin/index.html` — loader Decap CMS (via CDN unpkg)
- `public/admin/config.yml` — configuration des collections
- `content/` — contenu éditable (Markdown + JSON), commit sur le repo
- `public/uploads/` — médias uploadés via l'interface

## Collections configurées

| Nom | Dossier | Format | Usage |
| --- | --- | --- | --- |
| `projects` | `content/projects/` | Markdown frontmatter | Projets portfolio (case studies) |
| `faq` | `content/faq/` | Markdown frontmatter | Questions FAQ de la page L'Offre |
| `settings/brand` | `content/settings/brand.json` | JSON | Identité, coordonnées, réseaux |
| `settings/pricing` | `content/settings/pricing.json` | JSON | Offre 329€ + Pack Modifications |

## 🛠️ Tester en local

1. Décommente `local_backend: true` dans `config.yml`
2. `npm run dev` (serveur Next.js)
3. `npx decap-server` dans un autre terminal (serveur CMS local)
4. Ouvre `http://localhost:3000/admin/`
5. Clique "Login" — aucun compte requis

## 🚀 Activer en production (2 options)

### Option A — Netlify Identity + Git Gateway (le plus simple)

1. Crée un compte Netlify gratuit
2. Lie ton repo GitHub `indysignerr/indysignerrr` à un site Netlify
3. Active **Identity** et **Git Gateway** dans les settings Netlify
4. Dans `config.yml`, garde `backend: { name: git-gateway, branch: main }`
5. Ajoute le script Netlify Identity Widget dans `index.html` :
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```
6. Invite-toi par email depuis Netlify → Identity → Invite users

### Option B — GitHub OAuth app (plus technique)

1. Crée une OAuth app GitHub :
   - Homepage URL : `https://indysigner.fr`
   - Callback URL : `https://indysigner.fr/api/auth/callback`
2. Déploie un petit serveur OAuth (Cloudflare Worker ou Vercel Function)
3. Change `backend` dans `config.yml` en :
   ```yml
   backend:
     name: github
     repo: indysignerr/indysignerrr
     branch: main
     base_url: https://ton-proxy-oauth.worker.dev
   ```

## 📦 Prochaines étapes (migration du contenu)

Actuellement le contenu est dans `src/lib/content.ts` et `src/lib/projects.ts`
(hardcodé TypeScript). Pour rendre tout éditable via Decap, il faut :

1. Créer les 6 fichiers `content/projects/{slug}.md` (1 par projet existant)
2. Créer les 10 fichiers `content/faq/{n}.md`
3. Créer `content/settings/brand.json` et `pricing.json`
4. Installer un loader côté Next.js :
   ```bash
   npm install gray-matter
   ```
5. Refactorer `src/lib/projects.ts` pour lire les `.md` au build :
   ```ts
   import fs from "fs";
   import path from "path";
   import matter from "gray-matter";
   // Lit content/projects/*.md et retourne un tableau Project[]
   ```

Ce refactor est à faire en une passe ultérieure — la structure Decap est
prête à accueillir le contenu.
