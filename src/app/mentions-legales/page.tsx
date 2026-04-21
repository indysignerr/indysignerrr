import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/legal-shell";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales d'Indysigner — éditeur, hébergeur, propriété intellectuelle et droit applicable.",
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 font-display italic text-2xl md:text-3xl text-ink">
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-relaxed">{children}</p>
);

export default function MentionsLegales() {
  return (
    <LegalShell title="Mentions légales" updated="Dernière mise à jour : [DATE DE PUBLICATION]">
      <P>
        Conformément aux dispositions de l'article 6 III de la Loi n° 2004-575
        du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN), il
        est porté à la connaissance des utilisateurs du site indysigner.fr les
        informations suivantes.
      </P>

      <H2>1. Éditeur du site</H2>
      <ul className="space-y-2">
        <li><strong>Nom commercial</strong> : Indysigner</li>
        <li><strong>Forme juridique</strong> : Entreprise individuelle — Micro-entreprise</li>
        <li><strong>Dirigeant / Responsable de la publication</strong> : Indy FRANCOIS</li>
        <li><strong>Adresse du siège social</strong> : 222 chemin de la Brague, 06410 Biot, France</li>
        <li><strong>Téléphone</strong> : 07 69 76 20 76</li>
        <li><strong>Email</strong> : contact@indysigner.fr</li>
        <li><strong>SIRET</strong> : [SIRET À COMPLÉTER]</li>
        <li><strong>Code APE / NAF</strong> : 6201Z — Programmation informatique</li>
        <li><strong>TVA intracommunautaire</strong> : Non applicable, article 293 B du Code Général des Impôts.</li>
      </ul>

      <H2>2. Clientèle</H2>
      <P>
        Indysigner s'adresse exclusivement à une clientèle professionnelle
        (entreprises, artisans, professions libérales, associations,
        indépendants). Les prestations proposées ne sont pas destinées aux
        consommateurs au sens du Code de la consommation.
      </P>

      <H2>3. Nature de la prestation</H2>
      <P>
        Indysigner propose une prestation unique de création de site web
        vitrine livré clé en main. À la livraison, le Client reçoit la
        propriété exclusive et complète du site (code, domaine, hébergement,
        interface d'administration). Aucune prestation de maintenance, de
        suivi ou de support n'est proposée après la période de garantie
        contractuelle.
      </P>

      <H2>4. Hébergeur du site</H2>
      <ul className="space-y-2">
        <li><strong>Raison sociale</strong> : Cloudflare, Inc.</li>
        <li><strong>Adresse</strong> : 101 Townsend Street, San Francisco, CA 94107, États-Unis</li>
        <li>
          <strong>Site web</strong> :{" "}
          <a href="https://www.cloudflare.com" className="text-ocean-blue underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
            https://www.cloudflare.com
          </a>
        </li>
      </ul>

      <H2>5. Propriété intellectuelle</H2>
      <P>
        L'ensemble des éléments présents sur le site indysigner.fr (textes,
        images, graphismes, logo, icônes, sons, logiciels, code source) sont,
        sauf mention contraire, la propriété exclusive d'Indysigner.
      </P>
      <P>
        Toute reproduction, représentation, modification, publication,
        adaptation totale ou partielle, quel que soit le moyen ou le procédé
        utilisé, est interdite sans l'autorisation écrite préalable
        d'Indysigner.
      </P>
      <P>
        Toute exploitation non autorisée sera considérée comme constitutive
        d'une contrefaçon et poursuivie conformément aux articles L.335-2 et
        suivants du Code de la propriété intellectuelle.
      </P>

      <H2>6. Liens hypertextes</H2>
      <P>
        Le site peut contenir des liens vers d'autres sites. Indysigner se
        réserve le droit de demander la suppression d'un lien qu'il estime non
        conforme à l'objet du site.
      </P>

      <H2>7. Limitation de responsabilité</H2>
      <P>
        Indysigner s'efforce de fournir des informations aussi précises que
        possible. Toutefois, il ne pourra être tenu responsable des omissions,
        inexactitudes ou carences dans la mise à jour. Les informations sont
        données à titre indicatif.
      </P>

      <H2>8. Droit applicable et juridiction compétente</H2>
      <P>
        Tout litige est soumis au droit français. Les relations d'Indysigner
        s'inscrivant exclusivement dans un cadre professionnel (B2B), les
        tribunaux du ressort du siège social d'Indysigner sont seuls
        compétents.
      </P>

      <H2>9. Contact</H2>
      <ul className="space-y-2">
        <li><strong>Email</strong> : contact@indysigner.fr</li>
        <li><strong>Téléphone</strong> : 07 69 76 20 76</li>
      </ul>
    </LegalShell>
  );
}
