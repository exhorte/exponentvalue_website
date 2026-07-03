import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Eyebrow from "@/components/Eyebrow";
import PixelMark from "@/components/PixelMark";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StatBlock from "@/components/StatBlock";

const frictions = [
  {
    title: "Applications internes obsolètes",
    text: "Les outils qui portent la production, la logistique ou la relation client datent d’une autre décennie et freinent chaque décision.",
  },
  {
    title: "Cycles de développement de deux ans",
    text: "Entre le cahier des charges et la mise en production, le besoin a changé trois fois. Le logiciel livré est déjà en retard.",
  },
  {
    title: "Perte massive d’efficacité opérationnelle",
    text: "Chaque processus critique mal outillé se paie en heures perdues, en erreurs manuelles et en opportunités manquées.",
  },
];

const pillars = [
  {
    title: "Architecture orientée objet",
    text: "Des composants réutilisables et éprouvés assemblés pour votre métier : 80 % de code en moins à écrire, à tester et à maintenir.",
  },
  {
    title: "Intégration totale",
    text: "Zéro silo entre conception et exécution. Une même équipe conçoit, déploie et opère — la production s’ajuste en agilité, à l’unité.",
  },
  {
    title: "Robustesse structurelle",
    text: "Moins de code, c’est moins de bugs, moins de dette technique et une maintenance simplifiée sur toute la durée de vie du système.",
  },
];

const steps = [
  {
    num: "01",
    title: "Cadrage",
    text: "Identification du point de friction opérationnel qui impacte directement votre cœur de métier. Pas d’audit interminable : un diagnostic ciblé.",
  },
  {
    num: "02",
    title: "Assemblage",
    text: "Composition de votre application à partir de briques logicielles éprouvées. Nous ne réinventons pas la roue, nous l’assemblons pour vous.",
  },
  {
    num: "03",
    title: "Déploiement",
    text: "Prototype fonctionnel en conditions réelles sous 90 jours, puis itération continue au rythme de vos opérations.",
  },
];

const sectors = [
  {
    title: "Logistique & supply chain",
    text: "Pilotage des flux, traçabilité et orchestration des opérations de bout en bout.",
  },
  {
    title: "Finance & trading",
    text: "Systèmes de traitement et de contrôle pour les opérations à forte criticité.",
  },
  {
    title: "Industrie",
    text: "Supervision de production, maintenance et qualité connectées au terrain.",
  },
  {
    title: "Distribution & commerce",
    text: "Gestion unifiée des stocks, des prix et des canaux de vente.",
  },
  {
    title: "Santé",
    text: "Applications de coordination et de suivi conformes aux exigences du secteur.",
  },
  {
    title: "Administration & services",
    text: "Dématérialisation des processus critiques et des parcours usagers.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1 — HERO : plein écran, fond argent granuleux, halo bleu discret */}
      <section className="bg-radial-silver relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        <div className="halo-blue" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10">
          <div
            className="hero-line"
            style={{ animationDelay: "0ms" }}
          >
            <Eyebrow>Re-engineering opérationnel</Eyebrow>
          </div>
          <h1 className="mt-8 max-w-5xl text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-graphite-900">
            <span className="hero-line block" style={{ animationDelay: "120ms" }}>
              Vos applications métiers critiques.
            </span>
            <span className="hero-line block" style={{ animationDelay: "240ms" }}>
              Déployées en{" "}
              <span className="text-accent-blue">90 jours</span>, pas en 24
              mois.
            </span>
          </h1>
          <p
            className="hero-line mt-8 max-w-2xl text-lg leading-relaxed text-graphite-700"
            style={{ animationDelay: "360ms" }}
          >
            exponentvalue conçoit, déploie et exécute les logiciels qui font
            tourner votre cœur de métier — 5 à 10 fois plus vite que les
            solutions standards du marché.
          </p>
          <div
            className="hero-line mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "480ms" }}
          >
            <Button href="/contact">Prendre contact</Button>
            <Button href="/methode" variant="outline">
              Découvrir la méthode
            </Button>
          </div>
          <div
            className="hero-line hairline mt-16 pt-8"
            style={{ animationDelay: "600ms" }}
          >
            <StatBlock
              stats={[
                { value: "90 JOURS", label: "Premier déploiement" },
                { value: "–80 %", label: "Code écrit" },
                { value: "×5 À ×10", label: "Vitesse de livraison" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 2 — LE PROBLÈME : deux colonnes sur fond silver-100 */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Le constat</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
                Les entreprises investissent dans le confort. Rarement dans
                leurs processus critiques.
              </h2>
              <p className="mt-6 max-w-xl">
                La plupart des organisations équipent leurs cadres d’outils de
                reporting et de collaboration, et délaissent les applications
                qui exécutent réellement le métier. Le résultat est mesurable
                partout.
              </p>
            </div>
            <div>
              {frictions.map((f, i) => (
                <div key={f.title} className={`py-6 ${i > 0 ? "hairline" : "lg:pt-0"}`}>
                  <h3 className="text-lg font-extrabold tracking-tight text-graphite-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem]">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 3 — LA SOLUTION : section sombre de rupture */}
      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>La plateforme</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
            Le logiciel est le produit.
          </h2>
          <p className="mt-6 max-w-2xl text-silver-300">
            Nous ne vendons pas des jours-homme. Nous livrons un système qui
            exécute votre métier, construit sur une architecture qui a déjà
            fait ses preuves.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title} title={p.title} dark>
                {p.text}
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 4 — LA MÉTHODE : numérotation monospace 01–03 */}
      <Section rule={false} className="bg-radial-silver-soft">
        <Reveal>
          <Eyebrow>La méthode</Eyebrow>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            90 jours, trois mouvements.
          </h2>
          <div className="mt-14 grid gap-0 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
              <div key={step.num} className="hairline py-8 md:py-6">
                <p className="font-mono text-[0.85rem] tracking-[0.18em] text-silver-400">
                  {step.num}
                </p>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-graphite-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.98rem]">{step.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/methode"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-graphite-900 underline decoration-silver-300 underline-offset-8 transition-colors duration-150 hover:decoration-graphite-700"
          >
            Voir la méthode en détail
          </Link>
        </Reveal>
      </Section>

      {/* 5 — PREUVE / PROMESSE : grand bloc éditorial centré */}
      <Section>
        <Reveal>
          <blockquote className="mx-auto max-w-4xl py-6 text-center md:py-10">
            <PixelMark className="mx-auto text-silver-400" />
            <p className="mt-8 text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-snug tracking-tight text-graphite-900">
              Lancez huit nouveaux services quand votre concurrent n’aura pas
              fini de coder le premier.
            </p>
          </blockquote>
        </Reveal>
      </Section>

      {/* 6 — SECTEURS D’APPLICATION : grille de 6 cartes sobres */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>Secteurs d’application</Eyebrow>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            Partout où un processus critique attend son logiciel.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Card key={s.title} title={s.title}>
                {s.text}
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 7 — CTA FINAL : seconde section sombre */}
      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
              Parlons de votre point de friction le plus coûteux.
            </h2>
            <p className="mt-6 text-silver-300">
              Un échange de trente minutes suffit pour évaluer ce qu’un
              déploiement en 90 jours changerait à vos opérations.
            </p>
            <Button href="/contact" variant="inverse" className="mt-10">
              Prendre contact
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
