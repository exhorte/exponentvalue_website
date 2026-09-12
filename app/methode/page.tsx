import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StepFlow from "@/components/StepFlow";

export const metadata: Metadata = {
  title: "Méthode",
  description:
    "Le framework EXPONENT : huit étapes disciplinées, du diagnostic à l'amélioration continue, pour déployer des agents IA gouvernés.",
};

const exponentSteps = [
  {
    number: "E",
    title: "Examine",
    description:
      "Diagnostic ciblé de vos opérations : cartographie des workflows, priorisation par impact et effort. Pas d’audit interminable.",
  },
  {
    number: "X",
    title: "Extract",
    description:
      "Construction du Context Fabric : ingestion des données existantes, cartographie des processus, résolution des entités.",
  },
  {
    number: "P",
    title: "Prioritize",
    description:
      "Sélection du premier processus à traiter, sur une matrice impact/ROI — jamais dix chantiers en parallèle.",
  },
  {
    number: "O",
    title: "Orchestrate",
    description:
      "Déploiement de l’AgentOS : missions, orchestrateur, workers, validateurs indépendants, budgets.",
  },
  {
    number: "N",
    title: "Normalize",
    description:
      "Un OpsGraph propre à votre métier — Client, Commande, Facture, Paiement, Stock, Incident — le langage commun entre vos données et les agents.",
  },
  {
    number: "E",
    title: "Execute",
    description:
      "Autonomie progressive et supervisée : de la simple recommandation à l’exécution, jamais un saut direct vers l’automatisation totale.",
  },
  {
    number: "N",
    title: "Navigate",
    description:
      "Un tableau de bord vivant : agents actifs, coût, heures économisées, ROI mesuré en continu — pas un rapport trimestriel.",
  },
  {
    number: "T",
    title: "Transform",
    description:
      "Amélioration continue en abonnement Managed AI Operations : le projet devient un système permanent, pas un livrable figé.",
  },
];

const principles = [
  "Un agent qui produit un travail n’est jamais celui qui le valide.",
  "Autonomie progressive et explicite — jamais un passage direct à l’automatisation totale d’une action critique.",
  "Validation humaine obligatoire pour : tout engagement contractuel, tout paiement, toute décision juridique ou réglementaire, tout accès à des données sensibles, toute suppression de données.",
  "Journal d’audit immuable et exportable pour chaque décision et chaque action.",
  "Réversibilité garantie contractuellement : vous pouvez toujours exporter vos données et changer de solution.",
];

export default function MethodePage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>La méthode</Eyebrow>
            <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-graphite-900">
              Le framework EXPONENT.
            </h1>
            <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
              Huit lettres, huit étapes disciplinées. Pas une méthode
              marketing : la même séquence, exécutée à chaque mission, du
              premier diagnostic à l’exploitation continue.
            </p>
          </Reveal>
        </div>
      </section>

      <Section rule={false}>
        <StepFlow steps={exponentSteps} />
      </Section>

      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>Le premier engagement</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            Le Decision Sprint.
          </h2>
          <p className="mt-6 max-w-xl">
            5 à 30 jours, forfait fixe. Un seul processus, un premier résultat
            mesuré — avant de parler de déploiement complet ou d’abonnement.
          </p>
          <Button href="/contact" className="mt-8">
            Démarrer mon diagnostic
          </Button>
        </Reveal>
      </Section>

      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>Gouvernance</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
            Cinq règles non négociables.
          </h2>
          <ol className="mt-14 max-w-3xl">
            {principles.map((principle, i) => (
              <li
                key={principle}
                className={`flex gap-6 py-6 ${i > 0 ? "hairline-dark" : ""}`}
              >
                <span className="font-mono text-[0.85rem] text-silver-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-silver-100">{principle}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>
    </>
  );
}
