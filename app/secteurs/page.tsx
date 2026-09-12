import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import PixelMark from "@/components/PixelMark";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Secteurs",
  description:
    "Inventory & Cash Control, Customer/ServiceOps, DocumentOps : les vertical packs ExponentValue, prêts à déployer.",
};

const verticals = [
  {
    order: "01",
    flagship: true,
    title: "Inventory & Cash Control",
    pitch:
      "La verticale de lancement : distribution, stock et trésorerie. Douleur fréquente, ROI mesurable en quelques semaines, données déjà disponibles dans Excel ou votre ERP.",
    features: [
      "Stock unifié multi-canal",
      "Prévision des ruptures",
      "Suivi des créances clients",
      "Rapprochement ventes-paiements",
      "Alertes WhatsApp automatiques",
      "Validation humaine avant toute action",
    ],
  },
  {
    order: "02",
    flagship: false,
    title: "Customer / ServiceOps",
    pitch:
      "Qualification, suivi et escalade de la relation client sur les canaux que vos clients utilisent déjà — WhatsApp et e-mail.",
    features: [
      "Qualification des demandes entrantes",
      "Suivi WhatsApp et e-mail",
      "SLA suivis en continu",
      "Escalade vers un humain quand nécessaire",
    ],
  },
  {
    order: "03",
    flagship: false,
    title: "DocumentOps",
    pitch:
      "Devis, factures et rapports : le résultat le plus rapide à constater, souvent visible dès la première semaine.",
    features: [
      "Génération de devis et factures",
      "Rapports automatisés",
      "Vérification avant envoi",
      "Traçabilité complète",
    ],
  },
];

export default function SecteursPage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>Secteurs</Eyebrow>
            <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-graphite-900">
              Un vertical, un système, un résultat mesurable.
            </h1>
            <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
              ExponentValue ne vend pas une plateforme générique à adapter à
              l’infini. Chaque vertical pack est une application complète,
              prête à déployer, avec ses propres agents, son propre modèle de
              données et ses propres règles de gouvernance.
            </p>
          </Reveal>
        </div>
      </section>

      {verticals.map((v, i) => (
        <Section
          key={v.title}
          className={i % 2 === 1 ? "bg-silver-100" : undefined}
          rule={false}
        >
          <Reveal>
            <span className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-accent-blue">
              Vertical pack — {v.order}
              {v.flagship ? " · verticale de lancement" : ""}
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
              {v.title}
            </h2>
            <p className="mt-4 max-w-2xl text-graphite-700">{v.pitch}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {v.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[0.95rem] text-graphite-700"
                >
                  <PixelMark className="mt-1.5 shrink-0 text-accent-blue" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      ))}

      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
              Votre secteur n’est pas listé ?
            </h2>
            <p className="mt-6 text-silver-300">
              Le diagnostic gratuit sert justement à ça : identifier si votre
              premier processus critique correspond à un vertical pack
              existant, ou à une adaptation qui vaut la peine.
            </p>
            <Button href="/contact" variant="inverse" className="mt-10">
              Démarrer mon diagnostic
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
