import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { brand } from "@/lib/content";
import { Eyebrow } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Remplis le formulaire, reçois un devis sous 24h. Devis gratuit, sans engagement.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-ink">
            Parlons de <em className="italic font-normal text-ocean-blue">votre projet.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Remplis le formulaire, reçois un devis sous 24h. Devis gratuit, sans engagement.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <aside className="md:col-span-2">
            <div className="rounded-2xl border border-line bg-paper/70 p-8 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Coordonnées
              </p>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ocean-blue" />
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-ink transition-colors hover:text-ocean-blue"
                  >
                    {brand.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ocean-blue" />
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="text-ink transition-colors hover:text-ocean-blue"
                  >
                    {brand.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ocean-blue" />
                  <span className="text-ink">
                    Biot, France — Remote
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex items-center gap-3 border-t border-line pt-6">
                <a
                  href={brand.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:border-ocean-blue hover:text-ocean-blue"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={brand.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:border-ocean-blue hover:text-ocean-blue"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-7 text-xs leading-relaxed text-muted">
                Réponse sous 24h en semaine. Devis gratuit, sans engagement.
              </p>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted">
              En envoyant ce formulaire, tu acceptes nos{" "}
              <Link href="/cgv" className="underline-offset-2 hover:underline">
                CGV
              </Link>{" "}
              et notre{" "}
              <Link
                href="/politique-confidentialite"
                className="underline-offset-2 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
