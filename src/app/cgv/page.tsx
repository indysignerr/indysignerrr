import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/legal-shell";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "CGV Indysigner — prestation unique 329€, option Pack Modifications +90€, propriété totale immédiate, absence de relation post-livraison.",
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
      <P>Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Indysigner</strong>, entreprise individuelle enregistrée sous le régime de la
          micro-entreprise, représentée par Indy FRANCOIS, SIRET [SIRET À COMPLÉTER], dont le siège
          social est situé 222 chemin de la Brague, 06410 Biot, France (ci-après « Indysigner » ou
          « le Prestataire ») ;
        </li>
        <li>
          et toute personne morale ou personne physique agissant à titre professionnel souscrivant
          aux services d'Indysigner (ci-après « le Client »).
        </li>
      </ul>
      <P>
        Indysigner s'adresse exclusivement à une clientèle professionnelle. Toute commande implique
        que le Client agit dans le cadre de son activité professionnelle. Les dispositions du Code
        de la consommation relatives aux consommateurs ne sont pas applicables.
      </P>
      <P>Toute commande implique l'acceptation sans réserve des présentes CGV.</P>

      <H2>Article 2 — Nature de la prestation</H2>
      <H3>2.1 — Prestation unique</H3>
      <P>
        Indysigner propose une prestation unique de création de site web vitrine, livrée clé en
        main au Client pour un prix forfaitaire de 329€ TTC.
      </P>

      <H3>2.2 — Contenu de la prestation</H3>
      <P>La prestation inclut :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>La conception et la réalisation d'un site web vitrine sur-mesure</li>
        <li>Le design premium avec animations</li>
        <li>La rédaction des contenus en français (titres, accroches, SEO local)</li>
        <li>L'intégration des photos fournies par le Client ou le sourcing d'images</li>
        <li>La version mobile optimisée</li>
        <li>L'interface d'administration permettant au Client de modifier son site de manière autonome</li>
        <li>Le setup technique complet (domaine, hébergement, comptes GitHub et Cloudflare au nom du Client)</li>
        <li>Une formation de 1h à la gestion autonome du site (visio ou présentiel)</li>
        <li>La remise d'un manuel d'utilisation PDF</li>
        <li>La cession complète de la propriété au Client (voir article 5)</li>
      </ul>

      <H3>2.3 — Option Pack Modifications</H3>
      <P>
        Le Client peut souscrire, au moment de la commande uniquement, à une option Pack
        Modifications au prix de 90€ TTC. Cette option ouvre le droit à 2 interventions majeures
        réalisées par Indysigner durant les 12 mois suivant la livraison. Sont considérées comme
        « interventions majeures » :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>L'ajout d'une nouvelle page au site</li>
        <li>La refonte d'une section existante</li>
        <li>L'intégration d'un widget tiers (réservation, formulaire, carte)</li>
        <li>Une modification structurelle du site</li>
      </ul>
      <P>
        Cette option est non remboursable, non transmissible, et expire 12 mois après la date de
        livraison, que les 2 interventions aient été utilisées ou non.
      </P>

      <H3>2.4 — Absence de maintenance et de support continu</H3>
      <P>
        À l'exception de la garantie contractuelle de 30 jours (article 9) et de l'option Pack
        Modifications éventuellement souscrite, Indysigner ne propose aucune maintenance, aucun
        support continu, aucune intervention ultérieure. Le Client devient seul responsable de son
        site dès la livraison.
      </P>

      <H2>Article 3 — Commande et acceptation</H2>
      <P>3.1 — Toute commande est formalisée au choix du Client par :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>La signature électronique d'un devis émis par Indysigner</li>
        <li>
          Le paiement d'un acompte via les moyens de paiement proposés, valant acceptation
          expresse du devis et des CGV
        </li>
      </ul>
      <P>
        3.2 — Le devis précise le prix, le délai de livraison, et l'option Pack Modifications si
        souscrite.
      </P>
      <P>3.3 — La commande devient ferme et définitive à réception du paiement de l'acompte.</P>
      <P>
        3.4 — Le Client reconnaît être habilité à engager juridiquement l'entité professionnelle
        qu'il représente.
      </P>

      <H2>Article 4 — Tarifs et conditions de paiement</H2>
      <H3>4.1 — Prestation principale</H3>
      <P>
        Prix forfaitaire : 329€ TTC. Paiement en deux fois : 50% à la commande (164,50€), 50% à la
        livraison du site validé par le Client (164,50€).
      </P>
      <H3>4.2 — Option Pack Modifications</H3>
      <P>
        Prix : 90€ TTC, payable intégralement à la commande en supplément du prix principal.
      </P>
      <H3>4.3 — Moyens de paiement</H3>
      <P>Carte bancaire via la plateforme sécurisée Stripe.</P>
      <H3>4.4 — Retard de paiement</H3>
      <P>
        Conformément à la loi LME du 4 août 2008, tout retard de paiement entraîne de plein droit :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>L'application de pénalités de retard au taux de 3 fois le taux d'intérêt légal</li>
        <li>
          Une indemnité forfaitaire de recouvrement de 40€ par facture impayée (article D441-5 du
          Code de commerce)
        </li>
      </ul>
      <P>
        En cas de non-paiement du solde à la livraison, Indysigner se réserve le droit de
        suspendre le transfert de propriété jusqu'au règlement complet.
      </P>
      <H3>4.5 — TVA</H3>
      <P>
        Indysigner étant enregistré sous le régime de la micro-entreprise, TVA non applicable —
        article 293 B du Code Général des Impôts.
      </P>

      <H2>Article 5 — Propriété du site et transfert complet</H2>
      <H3>5.1 — Principe de propriété totale</H3>
      <P>
        Le site web créé par Indysigner est la propriété exclusive du Client dès la livraison et
        le paiement complet. Cette propriété est totale, irrévocable et inconditionnelle. Elle
        inclut :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Le code source complet du site</li>
        <li>Les contenus rédigés et intégrés (textes, images, visuels)</li>
        <li>Le nom de domaine (si acheté par Indysigner pour le Client)</li>
        <li>Les comptes techniques au nom du Client (GitHub, Cloudflare)</li>
        <li>Les accès à l'interface d'administration</li>
      </ul>

      <H3>5.2 — Transfert effectif à la livraison</H3>
      <P>À la livraison, Indysigner procède au transfert complet et définitif des accès au Client :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Le repo GitHub contenant le code source est placé sous la propriété du compte GitHub du Client</li>
        <li>Le projet Cloudflare Pages est placé sous le compte Cloudflare du Client</li>
        <li>Le nom de domaine est placé sous le compte du Client auprès du registrar</li>
        <li>Les identifiants de l'interface d'administration sont remis au Client</li>
      </ul>

      <H3>5.3 — Effacement d'Indysigner</H3>
      <P>
        Après le transfert, Indysigner ne conserve aucun accès aux comptes techniques du Client.
        Le Client est seul et unique propriétaire et gestionnaire de son site. Indysigner ne
        pourra être sollicité pour aucune intervention technique ultérieure en dehors du cadre
        éventuel de l'option Pack Modifications (article 2.3) et de la garantie contractuelle
        (article 9).
      </P>

      <H3>5.4 — Réserves de propriété intellectuelle d'Indysigner</H3>
      <P>
        Indysigner conserve la propriété intellectuelle de ses méthodes, templates internes et
        outils de production, qui ne sont pas inclus dans la cession. Indysigner se réserve
        également le droit de présenter le site livré dans son portfolio commercial (site, réseaux
        sociaux, présentations).
      </P>

      <H2>Article 6 — Dépendances techniques tierces</H2>
      <P>
        6.1 — Le site livré fonctionne grâce à des services tiers (Cloudflare Pages, GitHub, Decap
        CMS). Ces services sont gratuits à la date des présentes pour l'usage couvert par la
        prestation.
      </P>
      <P>
        6.2 — Indysigner ne garantit pas et ne peut garantir la pérennité des conditions tarifaires
        de ces services tiers, dont les politiques peuvent évoluer indépendamment d'Indysigner.
      </P>
      <P>
        6.3 — En cas d'évolution rendant un service tiers payant, cette charge éventuelle est
        exclusivement à la charge du Client, Indysigner s'étant désengagé de toute relation
        technique avec le site livré.
      </P>
      <P>
        6.4 — Indysigner ne pourra être tenu responsable d'aucun surcoût ultérieur lié aux
        politiques des services tiers.
      </P>

      <H2>Article 7 — Délais de livraison</H2>
      <P>
        7.1 — Le délai standard de livraison est de 7 jours ouvrés à compter de la validation du
        brief et du paiement de l'acompte.
      </P>
      <P>7.2 — Ce délai peut être allongé en cas de :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Retard du Client dans la fourniture des contenus, photos ou validations</li>
        <li>Demandes de modifications majeures en cours de production</li>
        <li>Force majeure</li>
      </ul>
      <P>
        7.3 — Les délais communiqués sont donnés à titre indicatif et ne sauraient engager la
        responsabilité d'Indysigner au-delà des dispositions de l'article 11.
      </P>

      <H2>Article 8 — Obligations du Client</H2>
      <P>Le Client s'engage à :</P>
      <P>8.1 — Fournir un brief complet et sincère via le formulaire de commande.</P>
      <P>
        8.2 — Respecter les délais de retour sur les validations et ajustements demandés par
        Indysigner.
      </P>
      <P>
        8.3 — Garantir qu'il détient les droits d'usage sur l'ensemble des contenus fournis
        (textes, photos, logos, marques). Indysigner ne peut être tenu responsable d'une
        utilisation de contenus protégés fournis par le Client.
      </P>
      <P>
        8.4 — Créer les comptes techniques nécessaires à la livraison (GitHub et Cloudflare) à
        son nom, lors de la session de formation ou préalablement.
      </P>
      <P>8.5 — Conserver en sécurité les accès qui lui sont remis à la livraison.</P>
      <P>
        8.6 — Respecter les lois en vigueur concernant le contenu de son site (mentions légales,
        RGPD, obligations sectorielles).
      </P>
      <P>
        8.7 — Prendre connaissance du fait qu'il devient seul responsable de son site après la
        livraison, y compris pour toute modification, évolution, correction ou dépannage
        technique.
      </P>

      <H2>Article 9 — Garantie contractuelle limitée</H2>
      <P>
        9.1 — Indysigner accorde au Client une garantie contractuelle limitée de 30 jours
        calendaires à compter de la livraison, couvrant exclusivement :
      </P>
      <ul className="list-disc pl-6 space-y-1">
        <li>La correction gratuite de tout bug ou défaut de conformité au brief validé</li>
        <li>L'assistance à l'utilisation de l'interface d'administration dans le cadre de la formation initiale</li>
      </ul>
      <P>9.2 — Sont expressément exclus de cette garantie :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Les modifications de contenu, de design, ou de structure demandées par le Client</li>
        <li>Les ajouts de fonctionnalités ou de pages</li>
        <li>Les interventions consécutives à une manipulation erronée du Client</li>
        <li>Les dysfonctionnements liés aux services tiers (Cloudflare, GitHub, etc.)</li>
        <li>Tout support technique au-delà de la période de garantie</li>
      </ul>
      <P>
        9.3 — Au-delà des 30 jours de garantie, Indysigner n'accepte plus aucune demande
        d'intervention technique, sauf dans le cadre d'une option Pack Modifications souscrite à
        la commande (article 2.3).
      </P>
      <P>
        9.4 — Toute demande d'intervention ultérieure hors garantie et hors Pack Modifications
        sera refusée. Le Client est invité à faire appel à un autre prestataire s'il nécessite
        une intervention ultérieure.
      </P>

      <H2>Article 10 — Absence de relation contractuelle après livraison</H2>
      <P>
        10.1 — Sous réserve des dispositions de l'article 9 (garantie) et de l'article 2.3 (Pack
        Modifications), la relation contractuelle entre Indysigner et le Client prend fin à la
        livraison et au transfert complet de propriété.
      </P>
      <P>10.2 — Le Client reconnaît et accepte qu'après la livraison :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Aucune maintenance ne sera assurée par Indysigner</li>
        <li>Aucun support technique ne sera assuré par Indysigner</li>
        <li>Aucun dépannage ne sera assuré par Indysigner</li>
        <li>Aucune modification ne sera effectuée par Indysigner (hors Pack Modifications)</li>
      </ul>
      <P>
        10.3 — Cette absence de relation post-livraison est une caractéristique essentielle de
        l'offre d'Indysigner, justifiant le prix forfaitaire unique de 329€.
      </P>

      <H2>Article 11 — Garanties et responsabilités</H2>
      <P>
        11.1 — Indysigner s'engage à fournir une prestation conforme aux règles de l'art du
        développement web et au brief validé.
      </P>
      <P>11.2 — Indysigner ne peut être tenu responsable :</P>
      <ul className="list-disc pl-6 space-y-1">
        <li>Des indisponibilités dues aux prestataires techniques tiers (Cloudflare, GitHub)</li>
        <li>Des dommages indirects (perte de chiffre d'affaires, perte de clientèle, perte de données, préjudice commercial)</li>
        <li>D'une utilisation non conforme du site par le Client ou par des tiers après la livraison</li>
        <li>Des contenus fournis par le Client et des éventuelles atteintes aux droits de tiers qu'ils pourraient entraîner</li>
        <li>Des évolutions techniques ou tarifaires des services tiers postérieures à la livraison</li>
        <li>De tout dysfonctionnement du site consécutif à une modification effectuée par le Client</li>
      </ul>
      <P>
        11.3 — La responsabilité totale d'Indysigner, toutes causes confondues, est expressément
        limitée au montant des sommes effectivement versées par le Client au titre de la prestation
        concernée.
      </P>

      <H2>Article 12 — Propriété intellectuelle</H2>
      <P>
        12.1 — Le Client cède à Indysigner un droit non exclusif de présentation du site livré
        dans son portfolio commercial (site web, réseaux sociaux, présentations commerciales).
      </P>
      <P>
        12.2 — Le Client autorise l'ajout d'une mention discrète « Site créé par Indysigner » en
        bas de page de son site, avec un lien vers indysigner.fr. Cette mention peut être retirée
        par le Client à tout moment puisque le site lui appartient.
      </P>
      <P>
        12.3 — Les contenus fournis par le Client (textes, photos, logos) restent sa propriété
        exclusive.
      </P>

      <H2>Article 13 — Données personnelles et RGPD</H2>
      <P>13.1 — Indysigner collecte uniquement les données nécessaires à l'exécution du contrat.</P>
      <P>
        13.2 — Le traitement des données est détaillé dans la Politique de confidentialité
        disponible sur indysigner.fr/politique-confidentialite.
      </P>
      <P>
        13.3 — Le Client dispose des droits prévus par le RGPD, exerçables par email à
        contact@indysigner.fr.
      </P>
      <P>
        13.4 — Après la livraison, Indysigner supprime de ses systèmes les accès techniques au
        site du Client. Les données de facturation et de correspondance sont conservées
        conformément aux durées indiquées dans la Politique de confidentialité.
      </P>

      <H2>Article 14 — Force majeure</H2>
      <P>
        Indysigner ne pourra être tenu responsable d'un retard ou d'une inexécution de ses
        obligations en cas de force majeure au sens de l'article 1218 du Code civil.
      </P>

      <H2>Article 15 — Droit applicable et litiges</H2>
      <P>15.1 — Les présentes CGV sont soumises au droit français.</P>
      <P>
        15.2 — Les relations entre Indysigner et ses Clients s'inscrivant exclusivement dans un
        cadre professionnel (B2B), les dispositions du Code de la consommation ne sont pas
        applicables.
      </P>
      <P>
        15.3 — En cas de litige, les parties s'engagent à rechercher une solution amiable avant
        tout recours judiciaire.
      </P>
      <P>
        15.4 — À défaut d'accord amiable, les tribunaux du ressort du siège social d'Indysigner
        (Tribunal de commerce de Grasse) sont seuls compétents, nonobstant pluralité de
        défendeurs ou appel en garantie.
      </P>

      <H2>Article 16 — Modification des CGV</H2>
      <P>
        Indysigner se réserve le droit de modifier les présentes CGV à tout moment. Les CGV
        applicables sont celles en vigueur à la date de la commande. Les modifications ultérieures
        ne s'appliquent pas aux contrats en cours d'exécution.
      </P>

      <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
        [DATE DE PUBLICATION] — Indysigner — Indy FRANCOIS — SIRET [À COMPLÉTER]
      </p>
    </LegalShell>
  );
}
