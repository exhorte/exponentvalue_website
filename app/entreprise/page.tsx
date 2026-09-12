import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Entreprise",
  description:
    "Mission, vision et principes non négociables d'ExponentValue : le système d'exploitation opérationnel des entreprises francophones.",
};

const moat = [
  "Une ontologie opérationnelle adaptée aux PME africaines et francophones.",
  "Des connecteurs profonds vers Excel, WhatsApp, Odoo, Sage et vos outils déjà en place — jamais l’inverse.",
  "Une bibliothèque de processus sectoriels réutilisables, pas du sur-mesure à chaque fois.",
  "Un journal de preuves : chaque décision reliée à ce qui la justifie.",
  "Des données exportables et réversibles pour vous — jamais de dépendance forcée.",
  "Une expérience pensée pour le français et le mobile, pas traduite après coup.",
];

export default function EntreprisePage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>Entreprise</Eyebrow>
            <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-graphite-900">
              Le système d’exploitation opérationnel des entreprises
              francophones.
            </h1>
            <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
              ExponentValue conçoit, déploie et supervise des systèmes
              d’agents IA gouvernés qui transforment les opérations
              dispersées des PME et ETI francophones — en particulier en
              Afrique de l’Ouest — en actions mesurables, contrôlées et
              auditables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manifeste : ce que nous ne sommes pas — section sombre, ton affirmé */}
      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>Ce que nous ne sommes pas</Eyebrow>
          <p className="mt-8 max-w-4xl text-[clamp(1.5rem,2.8vw,2.2rem)] font-extrabold leading-snug tracking-tight text-silver-50">
            ExponentValue n’est pas une agence d’automatisation généraliste.
            Pas un simple installateur n8n/Make. Pas un vendeur de chatbots.
            Pas une formation qui fabrique ses propres concurrents. Pas une
            copie horizontale de Palantir, BridgeSpace ou QM. Pas une marque
            dépendante d’une seule personnalité. Et pas une officine de
            développement sur mesure où rien n’est jamais réutilisé d’un
            client à l’autre.
          </p>
        </Reveal>
      </Section>

      {/* Le moat : ce qui ne se copie pas */}
      <Section rule={false}>
        <Reveal>
          <Eyebrow>Ce qui ne se copie pas</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            Les frameworks se copient. Ceci ne se copie pas facilement.
          </h2>
          <ol className="mt-14 max-w-3xl">
            {moat.map((item, i) => (
              <li
                key={item}
                className={`flex gap-6 py-6 ${i > 0 ? "hairline" : ""}`}
              >
                <span className="font-mono text-[0.85rem] text-silver-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-graphite-700">{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* Équipe : hybride humain + agents IA, sans surclaim */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>Équipe</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            Une équipe hybride : un fondateur, plusieurs agents IA.
          </h2>
          <p className="mt-6 max-w-2xl text-graphite-700">
            ExponentValue est conçue et opérée par une équipe hybride : un
            fondateur, et des agents IA spécialisés qui prennent en charge une
            partie du travail opérationnel — sous la même gouvernance que
            nous déployons chez nos clients. Nous n’exigeons rien que nous
            n’appliquions pas d’abord à nous-mêmes.
          </p>
        </Reveal>
      </Section>

      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
              Parlons de votre point de friction le plus coûteux.
            </h2>
            <Button href="/contact" variant="inverse" className="mt-10">
              Prendre contact
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
