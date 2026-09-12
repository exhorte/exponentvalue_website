import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import LayerStack from "@/components/LayerStack";
import Reveal from "@/components/Reveal";
import ScrollVideo from "@/components/ScrollVideo";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Plateforme",
  description:
    "ExponentOS : l'architecture en sept couches qui gouverne vos agents IA, de l'ingestion des données à l'action sur vos outils métier.",
};

const layers = [
  {
    key: "vertical-packs",
    codename: "Vertical Packs",
    name: "Applications métier",
    description:
      "Les applications que vos équipes utilisent au quotidien : Inventory & Cash Control, DocumentOps, CustomerOps — chacune une application complète, pas un simple workflow.",
  },
  {
    key: "valuespace",
    codename: "ValueSpace",
    name: "Mission Control",
    description:
      "Missions, kanban, statut de chaque agent, file d'approbation humaine, ROI en temps réel. Le poste de commandement où l'on supervise le travail, pas où on le fait à la main.",
  },
  {
    key: "agentos",
    codename: "AgentOS",
    name: "Agent Runtime",
    description:
      "L'orchestrateur, les workers qui exécutent, les validateurs indépendants qui vérifient — jamais le même agent des deux côtés — et les points d'arrêt humains sur toute action qui compte.",
  },
  {
    key: "valueguard",
    codename: "ValueGuard",
    name: "Assurance — le différenciateur principal",
    description:
      "Permissions par action (pas par outil), budgets de dépense, journal d'audit immuable, kill switch, évaluations continues. La couche la moins bien couverte chez les acteurs que nous avons étudiés : c'est ici que se construit la confiance.",
  },
  {
    key: "valuememory",
    codename: "ValueMemory",
    name: "Context & Decision Fabric",
    description:
      "Recherche hybride — exact, mots-clés, vecteurs, graphe — routée selon la question posée, résolution d'entités, et un journal de preuves qui relie chaque réponse à sa source et sa date de validité.",
  },
  {
    key: "connect",
    codename: "Exponent Connect",
    name: "Action Layer",
    description:
      "WhatsApp, Excel et Google Sheets, Odoo, Sage, e-mail, API — le navigateur en tout dernier recours, seulement quand aucune intégration propre n'existe.",
  },
  {
    key: "model-gateway",
    codename: "Model Gateway",
    name: "Routage des modèles",
    description:
      "Un routage coût, qualité et confidentialité entre modèles — avec repli local ou cloud selon la sensibilité de la donnée et la stabilité de la connexion.",
  },
];

export default function PlateformePage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_260px] lg:items-center">
            <Reveal>
              <Eyebrow>La plateforme</Eyebrow>
              <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-graphite-900">
                ExponentOS. Une architecture, pas un empilement d’outils.
              </h1>
              <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
                Chaque couche a un rôle précis, et une seule discipline
                commune : aucune décision ne s’exécute sans preuve, aucun
                agent ne se valide lui-même. C’est la même architecture que
                nous déployons, couche par couche, chez chaque client — pas
                un projet sur-mesure réinventé à chaque fois.
              </p>
            </Reveal>
            <Reveal className="hidden lg:block">
              <ScrollVideo
                src="/videos/v4.mp4"
                speed={0.1}
                className="aspect-square w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Section rule={false}>
        <Reveal>
          <Eyebrow>Les sept couches</Eyebrow>
        </Reveal>
        <div className="mt-14">
          <LayerStack layers={layers} />
        </div>
      </Section>

      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
              La méthode qui construit cette architecture, étape par étape.
            </h2>
            <p className="mt-6 text-silver-300">
              Le framework EXPONENT — huit étapes, du diagnostic à
              l’amélioration continue.
            </p>
            <Button href="/methode" variant="inverse" className="mt-10">
              Voir le framework EXPONENT
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
