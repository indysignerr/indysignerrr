#!/usr/bin/env node
/**
 * sync-content.mjs
 *
 * Lit le contenu éditable dans /content (Markdown + JSON) et génère
 * des fichiers JSON statiques dans src/lib/generated/ que le code
 * importe en TypeScript comme s'il s'agissait de données hardcodées.
 *
 * Lancé automatiquement avant `npm run build` et `npm run dev`
 * (voir package.json "prebuild" / "predev").
 *
 * Decap CMS écrit les fichiers dans content/ → commit GitHub →
 * rebuild Cloudflare Pages → prebuild regénère les JSON → site à jour.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const projectsDir = path.join(root, "content/projects");
const faqDir = path.join(root, "content/faq");
const settingsDir = path.join(root, "content/settings");
const outDir = path.join(root, "src/lib/generated");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readFrontmatterFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, ...data, body: content.trim() || undefined };
    });
}

function readJson(file) {
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

ensureDir(outDir);

// --- Projects ---
const projects = readFrontmatterFiles(projectsDir).map(({ body, ...rest }) => rest);
fs.writeFileSync(
  path.join(outDir, "projects.json"),
  JSON.stringify(projects, null, 2) + "\n"
);
console.log(`✓ projects.json — ${projects.length} projets`);

// --- FAQ ---
const faq = readFrontmatterFiles(faqDir)
  .map(({ slug, body, order, question, answer }) => ({
    order: Number(order ?? 0),
    question,
    answer,
  }))
  .sort((a, b) => a.order - b.order);
fs.writeFileSync(path.join(outDir, "faq.json"), JSON.stringify(faq, null, 2) + "\n");
console.log(`✓ faq.json — ${faq.length} questions`);

// --- Settings ---
const brand = readJson(path.join(settingsDir, "brand.json")) || {};
const pricing = readJson(path.join(settingsDir, "pricing.json")) || {};
fs.writeFileSync(path.join(outDir, "brand.json"), JSON.stringify(brand, null, 2) + "\n");
fs.writeFileSync(path.join(outDir, "pricing.json"), JSON.stringify(pricing, null, 2) + "\n");
console.log("✓ brand.json + pricing.json");

console.log("\n✅ Content synced to src/lib/generated/");
