# Decap CMS — Indysigner

Interface d'édition en ligne à l'adresse **https://indysigner.fr/admin/**.

## 🏗️ Architecture

```
┌─────────────────────────┐       ┌──────────────────────┐
│  Client navigue sur     │       │   GitHub OAuth App   │
│  /admin/ (Decap CMS UI) │       │   (côté GitHub)      │
└──────┬──────────────────┘       └──────────▲───────────┘
       │  1. Click Login                       │
       ▼                                       │
┌─────────────────────────┐   redirect   ┌────┴──────────────────┐
│  /auth                  │ ───────────▶ │  Cloudflare Pages     │
│  Function Cloudflare    │              │  Function (auth.js)   │
└─────────────────────────┘              └───────────────────────┘
       │                                            │
       │  2. GitHub callback avec code              │
       ▼                                            ▼
┌─────────────────────────┐              ┌───────────────────────┐
│  /callback              │              │  Échange code → token │
│  Function Cloudflare    │ ───────────▶ │  puis post au opener  │
└─────────────────────────┘              └───────────────────────┘
       │
       │  3. Token reçu
       ▼
┌─────────────────────────┐
│  Decap CMS commit sur   │
│  github.com/.../repo    │
└─────────────────────────┘
```

**Fichiers clés** :
- `public/admin/index.html` — loader CDN Decap CMS v3
- `public/admin/config.yml` — config backend `github`
- `functions/auth.js` — démarre OAuth (redirect GitHub)
- `functions/callback.js` — échange code → token, post au opener
- `content/` — contenu éditable (Markdown + JSON)
- `public/uploads/` — médias uploadés

---

## 🚀 Setup pas-à-pas (1ère fois, ~15 min)

### 1. Créer la GitHub OAuth App

1. Va sur https://github.com/settings/applications/new
2. Renseigne :
   - **Application name** : `Indysigner CMS` (ou le nom du client)
   - **Homepage URL** : `https://indysigner.fr` (remplace par le domaine final)
   - **Authorization callback URL** : `https://indysigner.fr/callback`
3. Clique **Register application**
4. Note le **Client ID** qui s'affiche
5. Clique **Generate a new client secret** → note-le aussi (il ne sera plus visible après)

### 2. Ajouter les variables d'env Cloudflare Pages

1. Cloudflare Dashboard → Pages → ton projet `indysigner`
2. Settings → **Environment variables**
3. Ajoute pour **Production** :
   - `GITHUB_CLIENT_ID` = `<client_id noté plus haut>`
   - `GITHUB_CLIENT_SECRET` = `<client_secret noté plus haut>`
4. Sauvegarde et **redéploie** le site (Pages → Deployments → Retry)

### 3. Vérifier que les Functions sont déployées

Cloudflare Pages détecte automatiquement le dossier `functions/` à la racine
du projet. Les routes suivantes doivent répondre après déploiement :
- `https://indysigner.fr/auth` → redirect 302 vers github.com
- `https://indysigner.fr/callback` → 400 si code manquant (OK, c'est normal)

### 4. Tester l'admin

1. Ouvre `https://indysigner.fr/admin/`
2. Clique **Login with GitHub**
3. Popup GitHub → autorise l'app
4. Decap CMS charge le contenu du repo
5. Tu peux créer/éditer/supprimer et **chaque action fait un commit direct sur `main`**

---

## 🏷️ Collections configurées

| Collection | Chemin | Format | Usage |
| --- | --- | --- | --- |
| `projects` | `content/projects/*.md` | frontmatter | 6 projets portfolio avec galerie et témoignage |
| `faq` | `content/faq/*.md` | frontmatter | Questions FAQ page L'Offre |
| `settings/brand` | `content/settings/brand.json` | JSON | Identité, coordonnées, réseaux |
| `settings/pricing` | `content/settings/pricing.json` | JSON | Offre 329€ + Pack Modifications |

---

## 🧪 Tester en local (sans GitHub)

Pour ne pas pousser des commits de test sur `main` :

1. Édite `public/admin/config.yml` et ajoute en haut :
   ```yaml
   local_backend: true
   ```
2. Dans un terminal : `npm run dev`
3. Dans un autre : `npx decap-server`
4. Ouvre http://localhost:3000/admin/
5. Clique Login (aucun compte requis) — les modifs s'enregistrent sur le disque local

N'oublie pas de recommenter `local_backend` avant de pusher en prod.

---

## 📦 Prochaine étape : migrer le contenu hardcodé

Actuellement `src/lib/content.ts` et `src/lib/projects.ts` contiennent les données en dur (TypeScript). Pour que Decap édite vraiment l'offre 329€, les FAQ et les 6 projets :

1. Créer les 6 fichiers `content/projects/{slug}.md` depuis `projects.ts`
2. Créer les 10 fichiers `content/faq/{n}.md` depuis `content.ts`
3. Créer `content/settings/brand.json` et `pricing.json`
4. `npm install gray-matter`
5. Refactorer `src/lib/projects.ts` pour lire `.md` au build via `fs.readdirSync`

Ça se fait en une passe — me demander quand tu veux.

---

## 🔐 Sécurité

- Le `CLIENT_SECRET` ne quitte jamais Cloudflare (variable d'env, pas exposée au client)
- Cookie CSRF `oauth_state` HttpOnly + Secure + SameSite=Lax
- `scope=repo,user` donne accès au repo ciblé, pas aux autres repos de l'utilisateur
- Le token reste en session browser côté Decap — jamais loggé

## 🔁 Workflow client type (pour tes autres projets)

1. **Setup client** (15 min) :
   - Crée compte GitHub client → fork ton template indysigner-template
   - Crée compte Cloudflare client → lie au repo
   - Crée OAuth app GitHub pour le client → copie secrets dans Cloudflare env vars
   - Domaine client connecté via DNS
2. **Invite client** : partage l'URL `https://sonsite.fr/admin/`
3. **Client édite** → commit → Cloudflare rebuild → site à jour
