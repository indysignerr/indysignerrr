import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/legal-shell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Traitement des données personnelles chez Indysigner, conforme RGPD et Loi Informatique et Libertés.",
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 font-display italic text-2xl md:text-3xl text-ink">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 font-display text-lg text-ink">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-relaxed">{children}</p>
);

export default function Confidentialite() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      updated="Dernière mise à jour : [DATE DE PUBLICATION]"
    >
      <P>
        En application du Règlement Général sur la Protection des Données (RGPD
        — Règlement UE 2016/679) et de la Loi Informatique et Libertés du 6
        janvier 1978 modifiée, Indysigner s'engage à protéger les données
        personnelles des utilisateurs de son site indysigner.fr et de ses
        clients professionnels.
      </P>

      <H2>1. Responsable du traitement</H2>
      <ul className="space-y-2">
        <li><strong>Nom commercial</strong> : Indysigner</li>
        <li><strong>Représentant</strong> : Indy FRANCOIS</li>
        <li><strong>Adresse</strong> : 222 chemin de la Brague, 06410 Biot, France</li>
        <li><strong>Email</strong> : contact@indysigner.fr</li>
        <li><strong>Téléphone</strong> : 07 69 76 20 76</li>
        <li><strong>SIRET</strong> : [SIRET À COMPLÉTER]</li>
      </ul>

      <H2>2. Données collectées</H2>

      <H3>2.1 — Via le formulaire de commande (Tally)</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Nom et prénom du contact professionnel</li>
        <li>Adresse email professionnelle</li>
        <li>Numéro de téléphone</li>
        <li>Nom de l'entreprise</li>
        <li>Informations relatives au projet</li>
        <li>Contenus fournis volontairement</li>
      </ul>

      <H3>2.2 — Via le site indysigner.fr</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Adresse IP (anonymisée par Cloudflare)</li>
        <li>Données de navigation</li>
        <li>Données techniques</li>
      </ul>

      <H3>2.3 — Dans le cadre de la prestation</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Informations de facturation (raison sociale, SIRET, adresse)</li>
        <li>Informations bancaires (traitées exclusivement par Stripe)</li>
        <li>Correspondances liées au projet</li>
      </ul>

      <H2>3. Finalités du traitement</H2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Répondre aux demandes de devis et maquettes</li>
        <li>Exécuter la prestation de création de site</li>
        <li>Facturation et comptabilité</li>
        <li>Respect des obligations légales</li>
      </ul>

      <H2>4. Base légale du traitement</H2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Exécution du contrat (article 6.1.b du RGPD)</li>
        <li>Obligation légale (article 6.1.c du RGPD)</li>
        <li>Intérêt légitime (article 6.1.f du RGPD)</li>
        <li>Consentement pour les communications commerciales (article 6.1.a du RGPD)</li>
      </ul>

      <H2>5. Destinataires des données</H2>
      <P>
        Les données ne sont jamais vendues ou cédées à des tiers à des fins
        commerciales. Elles peuvent être transmises aux sous-traitants
        techniques suivants :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Stripe (paiements)</li>
        <li>Cloudflare (hébergement)</li>
        <li>Tally (formulaires)</li>
        <li>Google Drive (stockage projet)</li>
        <li>Make, Slack, IONOS (automatisations & communication)</li>
        <li>Zoho Invoice (facturation)</li>
        <li>Revolut Business (banque professionnelle)</li>
        <li>GitHub (versioning du code livré au Client)</li>
      </ul>

      <H2>6. Transferts hors UE</H2>
      <P>
        Certains prestataires sont situés aux États-Unis. Ces transferts sont
        encadrés par les Clauses Contractuelles Types de la Commission
        européenne et la certification Data Privacy Framework.
      </P>

      <H2>7. Durée de conservation</H2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Prospection : 3 ans à compter du dernier contact</li>
        <li>
          Clients livrés : 3 ans après la livraison du site (fin de la relation
          contractuelle)
        </li>
        <li>Facturation et comptabilité : 10 ans (obligation légale)</li>
        <li>Navigation : 13 mois maximum</li>
        <li>Correspondances : 3 ans après la livraison</li>
      </ul>

      <H2>8. Droits des personnes concernées</H2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Droit d'accès</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d'opposition</li>
        <li>Droit de retirer son consentement</li>
        <li>Directives post-mortem</li>
      </ul>
      <P>
        Ces droits s'exercent par email à contact@indysigner.fr ou par courrier,
        avec justificatif d'identité. Réponse sous un mois maximum.
      </P>

      <H2>9. Réclamation CNIL</H2>
      <P>
        <strong>Commission Nationale de l'Informatique et des Libertés</strong>
        <br />
        3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07
        <br />
        Téléphone : 01 53 73 22 22
        <br />
        <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-ocean-blue underline-offset-2 hover:underline">
          https://www.cnil.fr
        </a>
      </P>

      <H2>10. Cookies et traceurs</H2>
      <H3>Cookies strictement nécessaires (exemptés de consentement)</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Session technique</li>
        <li>Sécurité (Cloudflare)</li>
      </ul>
      <H3>Cookies avec consentement</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Mesure d'audience anonymisée</li>
        <li>Services tiers (Tally, autres)</li>
      </ul>
      <P>
        Un bandeau permet d'accepter ou refuser les cookies non essentiels lors
        de la première visite. Le refus n'affecte pas le fonctionnement du site.
      </P>

      <H2>11. Sécurité des données</H2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Hébergement SSL/TLS</li>
        <li>Mots de passe forts, authentification sécurisée</li>
        <li>Sauvegardes régulières</li>
        <li>Accès restreint</li>
      </ul>
      <P>
        En cas de violation de données, notification CNIL sous 72 heures et
        information des personnes concernées dans les meilleurs délais.
      </P>

      <H2>12. Modification de la politique</H2>
      <P>
        Indysigner se réserve le droit de modifier la présente politique. La
        version applicable est celle en vigueur à la date de consultation.
      </P>

      <H2>13. Contact</H2>
      <ul className="space-y-2">
        <li><strong>Email</strong> : contact@indysigner.fr</li>
        <li><strong>Adresse</strong> : 222 chemin de la Brague, 06410 Biot, France</li>
        <li><strong>Téléphone</strong> : 07 69 76 20 76</li>
      </ul>
    </LegalShell>
  );
}
