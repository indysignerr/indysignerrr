import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { brand, navigation, legalNavigation } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ocean-deep text-paper">
      <div aria-hidden className="mesh-ocean-deep absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display italic text-3xl md:text-4xl leading-tight text-paper/95">
              On conçoit des sites qui marquent&nbsp;les&nbsp;esprits.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
              Agence web indépendante française. Sites vitrines premium, livrés
              en 7 jours. Propriété totale du client sur son site.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
              Navigation
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/80 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm text-paper/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-warm" />
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors hover:text-paper"
                >
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-warm" />
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-paper"
                >
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-warm" />
                <span>{brand.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-paper/50 hover:bg-paper/5"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-paper/50 hover:bg-paper/5"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            Indysigner © {year} — Indy FRANCOIS — SIRET {brand.siret}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
