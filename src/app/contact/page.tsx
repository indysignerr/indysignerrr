import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { brand } from "@/lib/content";
import { Eyebrow } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { LetsWorkTogether } from "@/components/ui/lets-work-together";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet. Remplis le formulaire, reçois un devis sous 24h. Devis gratuit, sans engagement.",
};

const whatsappNumber = "0769762076";

export default function ContactPage() {
  return (
    <>
      {/* ============ CONTACT DIRECT (en haut, gros) ============ */}
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden className="mesh-ocean absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-ink">
            Parlons de{" "}
            <em className="italic font-normal text-ocean-blue">
              ton projet.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft">
            Une offre, un prix : 329€. Décris ton projet, je te réponds sous
            24h avec un devis ferme. Ou appelle-moi — je réponds vraiment.
          </p>

          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-10 md:flex-wrap">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-ocean-blue"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ocean-deep text-paper">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl md:text-3xl">
                {brand.phone}
              </span>
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-ocean-blue"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ocean-deep text-paper">
                <Mail className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl md:text-3xl">
                {brand.email}
              </span>
            </a>
            <a
              href={`https://wa.me/33${whatsappNumber.slice(1)}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-ink transition-colors hover:text-ocean-blue"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand-warm text-ocean-deep">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="font-display text-xl md:text-2xl">
                WhatsApp <span className="font-mono text-xs text-muted">(optionnel)</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-2xl">
            <Eyebrow>Remplis le brief</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
              Trois minutes.{" "}
              <em className="italic font-normal">Maquette dans les 48h.</em>
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              Plus tu es précis, plus la réponse sera qualitative.{" "}
              <Link
                href="/offres"
                className="text-ocean-blue underline-offset-2 hover:underline"
              >
                Voir L'Offre →
              </Link>
            </p>
          </div>

          <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-5 md:gap-16">
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            <aside className="md:col-span-2">
              <div className="rounded-2xl border border-line bg-paper/70 p-8 backdrop-blur-sm">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  Localisation
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ocean-blue" />
                    <span className="text-ink">Biot, France — Remote</span>
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
                  Réponse sous 24h en semaine. Maquette gratuite dans les 48h.
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

      {/* ============ LETSWORKTOGETHER (en bas, CTA alternatif) ============ */}
      <LetsWorkTogether
        mainLine1="Ou on discute"
        mainLine2="au téléphone ?"
        description="Si t'as pas envie d'écrire, appelle-moi. C'est souvent plus rapide."
        email={brand.email}
        bookingHref={`tel:${brand.phone.replace(/\s/g, "")}`}
        successCopy="Discutons"
        successMicro="15 min · sans engagement"
      />
    </>
  );
}
