import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/legal-shell";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions Générales de Vente d'Indysigner — prestations, tarifs, propriété, responsabilités et juridiction.",
  robots: { index: false, follow: true },
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

export default function CGV() {
  return (
    <LegalShell title="Conditions Générales de Vente" updated="En vigueur au [DATE DE PUBLICATION]">
      <H2>Article 1 — Objet et champ d'application</H2>
      <P>Les présentes CGV régissent les relations contractuelles entre :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Indysigner</strong>, entreprise individuelle enregistrée sous le régime de la
          micro-entreprise, représentée par Indy FRANCOIS, SIRET [SIRET À COMPLÉTER], siège social
          222 chemin de la Brague, 06410 Biot, France (ci-après "Indysigner" ou "le Prestataire") ;
        </li>
        <li>
          et toute personne morale ou personne physique agissant à titre professionnel souscrivant
          aux services d'Indysigner (ci-après "le Client").
        </li>
      </ul>
      <P>
        Indysigner s'adresse exclusivement à une clientèle professionnelle. Toute commande implique
        que le Client agit dans le cadre de son activité professionnelle. Les dispositions du Code
        de la consommation relatives aux consommateurs ne sont pas applicables.
      </P>
      <P>Toute commande implique l'acceptation sans réserve des présentes CGV.</P>

      <H2>Article 2 — Description des prestations</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Formule Autonomie</strong> : création d'un site web vitrine avec livraison
          complète au Client, incluant la formation à l'administration autonome, pour un prix
          forfaitaire unique.
        </li>
        <li>
          <strong>Formule Sérénité</strong> : création d'un site web vitrine associée à un contrat
          de maintenance récurrent (mensuel ou annuel) incluant les modifications et le suivi
          technique.
        </li>
      </ul>
      <P>
        Le détail des prestations est disponible sur indysigner.fr et précisé dans le devis
        contractuel.
      </P>

      <H2>Article 3 — Commande et acceptation</H2>
      <P>
        3.1 — Toute commande est formalisée au choix du Client par la signature électronique d'un
        devis ou le paiement d'un acompte, valant acceptation expresse du devis.
      </P>
      <P>3.2 — Le devis précise la formule, le prix, le délai de livraison, et les prestations complémentaires.</P>
      <P>3.3 — La commande devient ferme à réception du paiement de l'acompte (50% pour Autonomie) ou du premier paiement (Sérénité).</P>
      <P>3.4 — Le Client reconnaît être habilité à engager juridiquement l'entité qu'il représente.</P>

      <H2>Article 4 — Tarifs et conditions de paiement</H2>
      <H3>4.1 — Formule Autonomie</H3>
      <P>Prix forfaitaire : 490€ TTC. Paiement en deux fois : 50% à la commande, 50% à la livraison du site validé.</P>
      <H3>4.2 — Formule Sérénité</H3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Création : 250€ TTC, payables à la commande.</li>
        <li>Maintenance : 20€ TTC/mois ou 200€ TTC/an.</li>
        <li>Option domaine géré : +10€ TTC/mois ou +100€ TTC/an.</li>
        <li>Abonnements facturés d'avance.</li>
      </ul>
      <H3>4.3 — Moyens de paiement</H3>
      <P>Carte bancaire via Stripe. Prélèvement automatique pour la formule Sérénité.</P>
      <H3>4.4 — Retard de paiement</H3>
      <P>Conformément à la loi LME du 4 août 2008, tout retard entraîne :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Pénalités de retard au taux de 3 fois le taux d'intérêt légal</li>
        <li>Indemnité forfaitaire de recouvrement de 40€ par facture impayée</li>
      </ul>
      <P>
        Indysigner se réserve le droit de suspendre l'accès aux services de maintenance après mise
        en demeure restée sans effet pendant 15 jours.
      </P>
      <H3>4.5 — TVA</H3>
      <P>
        Indysigner étant enregistré sous le régime de la micro-entreprise, TVA non applicable —
        article 293 B du Code Général des Impôts.
      </P>

      <H2>Article 5 — Propriété du site</H2>
      <P>
        5.1 — Le site web créé est la propriété exclusive du Client dès la livraison et le paiement
        complet. Cette propriété inclut :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Le code source</li>
        <li>Les contenus rédigés et intégrés</li>
        <li>Le nom de domaine (si acheté par Indysigner)</li>
        <li>Les accès à l'interface d'administration</li>
      </ul>
      <P>
        5.2 — Indysigner procède au transfert formel des accès et de la propriété technique lors de
        la livraison :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Transfert du code sur un compte GitHub au nom du Client</li>
        <li>Transfert du nom de domaine vers un registrar au nom du Client</li>
        <li>Remise des accès à l'interface d'administration</li>
      </ul>
      <P>
        5.3 — Indysigner conserve la propriété intellectuelle de ses méthodes, templates internes
        et outils de production. Indysigner se réserve le droit de présenter le site dans son
        portfolio commercial.
      </P>

      <H2>Article 6 — Dépendances techniques tierces</H2>
      <P>
        6.1 — Le site fonctionne grâce à des services tiers (Cloudflare Pages, GitHub, Decap CMS).
        Ces services sont gratuits à la date des présentes pour l'usage couvert.
      </P>
      <P>6.2 — Indysigner ne garantit pas la pérennité des conditions tarifaires de ces services tiers.</P>
      <P>6.3 — En cas d'évolution rendant le service tiers payant, Indysigner s'engage à :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Informer le Client dans les meilleurs délais</li>
        <li>Proposer une solution alternative équivalente</li>
        <li>Facturer la migration au tarif préférentiel (35€ pour Autonomie, gratuit pour Sérénité)</li>
      </ul>

      <H2>Article 7 — Délais de livraison</H2>
      <P>
        7.1 — Délai standard : 7 jours ouvrés à compter de la validation du brief et du paiement de
        l'acompte.
      </P>
      <P>7.2 — Ce délai peut être allongé en cas de :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Retard du Client dans la fourniture des contenus ou validations</li>
        <li>Demandes de modifications majeures en cours de production</li>
        <li>Force majeure</li>
      </ul>
      <P>
        7.3 — Les délais communiqués sont donnés à titre indicatif et ne sauraient engager la
        responsabilité d'Indysigner au-delà de l'article 12.
      </P>

      <H2>Article 8 — Obligations du Client</H2>
      <P>8.1 — Fournir un brief complet et sincère.</P>
      <P>8.2 — Respecter les délais de retour sur validations.</P>
      <P>
        8.3 — Garantir détenir les droits d'usage sur les contenus fournis (textes, photos, logos,
        marques). Indysigner ne peut être tenu responsable de l'utilisation de contenus protégés
        fournis par le Client.
      </P>
      <P>8.4 — Conserver en sécurité les accès remis.</P>
      <P>8.5 — Respecter les lois en vigueur concernant le contenu du site.</P>

      <H2>Article 9 — Support et maintenance</H2>
      <H3>9.1 — Formule Autonomie</H3>
      <P>Support technique gratuit pendant 30 jours calendaires couvrant :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Questions d'utilisation</li>
        <li>Correction de modifications erronées</li>
        <li>Ajustements mineurs</li>
      </ul>
      <P>Au-delà, tarifs applicables :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Intervention simple : 35€</li>
        <li>Intervention complexe : 80€</li>
        <li>Refonte de section / ajout de page : 100€</li>
        <li>Formation complémentaire 1h : 60€</li>
        <li>Intégration widget tiers : 60€</li>
        <li>Récupération de site cassé : 180€</li>
      </ul>
      <H3>9.2 — Formule Sérénité</H3>
      <P>Maintenance incluant sans limite :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Modifications illimitées du contenu</li>
        <li>Ajout de pages et refonte de sections</li>
        <li>Intégration de widgets tiers</li>
        <li>Corrections de bugs</li>
        <li>Réponse sous 48h ouvrées</li>
        <li>Optimisation SEO continue</li>
        <li>Conseils stratégiques</li>
      </ul>
      <P>Sont exclus et font l'objet d'un devis séparé :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Prestations hors site (photos pro, logo, Google My Business, rédaction SEO)</li>
        <li>Refonte complète du site après modification majeure de l'activité</li>
      </ul>

      <H2>Article 10 — Résiliation de la formule Sérénité</H2>
      <P>
        10.1 — Résiliation possible à tout moment par email à contact@indysigner.fr avec préavis
        de 30 jours calendaires.
      </P>
      <P>10.2 — La résiliation prend effet à la fin de la période de facturation en cours.</P>
      <P>10.3 — Aucun remboursement dû pour les périodes déjà facturées, y compris en cas d'abonnement annuel.</P>
      <P>10.4 — Le Client conserve l'intégralité de son site, de ses accès, et de son nom de domaine.</P>
      <P>10.5 — Une formation de reprise en main peut être proposée au tarif de 60€.</P>

      <H2>Article 11 — Résiliation par Indysigner</H2>
      <P>11.1 — Indysigner peut résilier avec préavis de 60 jours en cas de :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Comportement abusif ou irrespectueux</li>
        <li>Demandes répétées hors périmètre</li>
        <li>Impayé persistant malgré mise en demeure</li>
      </ul>
      <P>
        11.2 — Transfert complet du site et des accès au Client. Aucune somme due au-delà de la
        dernière période facturée.
      </P>

      <H2>Article 12 — Garanties et responsabilités</H2>
      <P>12.1 — Indysigner s'engage à fournir une prestation conforme aux règles de l'art.</P>
      <P>12.2 — Correction gratuite de tout bug ou défaut de conformité pendant 30 jours après livraison.</P>
      <P>12.3 — Indysigner ne peut être tenu responsable :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Des indisponibilités dues aux prestataires techniques tiers</li>
        <li>Des dommages indirects (perte de CA, clientèle, données, préjudice commercial)</li>
        <li>D'une utilisation non conforme du site</li>
        <li>Des contenus fournis par le Client</li>
      </ul>
      <P>
        12.4 — La responsabilité totale d'Indysigner, toutes causes confondues, est expressément
        limitée au montant des sommes effectivement versées par le Client au titre de la prestation
        concernée sur les 12 derniers mois.
      </P>

      <H2>Article 13 — Propriété intellectuelle</H2>
      <P>
        13.1 — Le Client cède à Indysigner un droit non exclusif de présentation du site dans son
        portfolio commercial.
      </P>
      <P>
        13.2 — Le Client autorise l'ajout d'une mention "Site créé par Indysigner" en bas de page,
        avec lien vers indysigner.fr. Mention supprimable sur demande.
      </P>
      <P>13.3 — Les contenus fournis par le Client restent sa propriété exclusive.</P>

      <H2>Article 14 — Données personnelles et RGPD</H2>
      <P>14.1 — Indysigner collecte uniquement les données nécessaires à l'exécution du contrat.</P>
      <P>
        14.2 — Traitement détaillé dans la Politique de confidentialité sur
        indysigner.fr/politique-confidentialite.
      </P>
      <P>14.3 — Droits RGPD exerçables par email à contact@indysigner.fr.</P>

      <H2>Article 15 — Force majeure</H2>
      <P>
        Indysigner ne pourra être tenu responsable d'un retard ou inexécution en cas de force
        majeure au sens de l'article 1218 du Code civil.
      </P>

      <H2>Article 16 — Droit applicable et litiges</H2>
      <P>16.1 — CGV soumises au droit français.</P>
      <P>16.2 — Relations exclusivement B2B. Dispositions du Code de la consommation non applicables.</P>
      <P>16.3 — Recherche d'une solution amiable avant tout recours.</P>
      <P>
        16.4 — À défaut, les tribunaux du ressort du siège social d'Indysigner (Tribunal de commerce
        de Grasse) sont seuls compétents, nonobstant pluralité de défendeurs ou appel en garantie.
      </P>

      <H2>Article 17 — Modification des CGV</H2>
      <P>
        Indysigner se réserve le droit de modifier les CGV. Les CGV applicables sont celles en
        vigueur à la date de la commande. Les modifications ultérieures ne s'appliquent pas aux
        contrats en cours d'exécution.
      </P>

      <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
        [DATE DE PUBLICATION] — Indysigner — Indy FRANCOIS — SIRET [À COMPLÉTER]
      </p>
    </LegalShell>
  );
}
