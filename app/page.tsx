import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Eyebrow from "@/components/Eyebrow";
import PixelMark from "@/components/PixelMark";
import Reveal from "@/components/Reveal";
import ScrollVideo from "@/components/ScrollVideo";
import Section from "@/components/Section";
import StatBlock from "@/components/StatBlock";
import StepFlow from "@/components/StepFlow";

const frictions = [
  {
    title: "La surpromesse",
    text: "« Autonomie totale », « zéro friction » : aucun déploiement n’a un effort nul et un agent a toujours besoin d’une supervision. Le discours dominant sur l’IA ignore cette réalité.",
  },
  {
    title: "Le fossé pilote → production",
    text: "Un agent testé en démonstration n’est pas un agent qui tourne, tous les jours, connecté à vos outils réels, avec quelqu’un qui en répond.",
  },
  {
    title: "Zéro gouvernance, zéro preuve",
    text: "Sans journal d’audit ni validation humaine avant action, une recommandation d’IA reste une opinion — jamais une décision qu’on peut défendre.",
  },
];

const pillars = [
  {
    title: "Agents gouvernés, jamais autonomes par défaut",
    text: "Un agent qui produit un travail n’est jamais celui qui le valide. Autonomie progressive, validation humaine obligatoire pour toute action critique.",
  },
  {
    title: "Une mémoire d’entreprise, pas un chatbot",
    text: "Recherche hybride (exact, vecteurs, graphe) et un journal de preuves : chaque réponse reliée à sa source, sa date de validité et son niveau de confiance.",
  },
  {
    title: "Branché sur vos outils, pas l’inverse",
    text: "Excel, WhatsApp, Odoo, Sage, e-mail : ExponentValue s’intègre à ce que vous utilisez déjà, sans migration forcée ni dépendance à un écosystème fermé.",
  },
];

const methodSteps = [
  {
    number: "E",
    title: "Examine",
    description:
      "Diagnostic ciblé de vos opérations : où l’IA change réellement la donne, où elle n’apporte rien.",
  },
  {
    number: "O",
    title: "Orchestrate",
    description:
      "Déploiement de l’AgentOS : missions, validateurs indépendants, budgets, sandbox — jamais un script isolé.",
  },
  {
    number: "N",
    title: "Navigate",
    description:
      "Un tableau de bord vivant : agents actifs, coût, heures économisées, ROI mesuré en continu.",
  },
  {
    number: "T",
    title: "Transform",
    description:
      "Amélioration continue en abonnement Managed AI Operations — le projet devient un système permanent.",
  },
];

const verticalPacks = [
  {
    title: "Inventory & Cash Control",
    text: "Stock unifié, prévision des ruptures, suivi des créances, rapprochement ventes-paiements, alertes WhatsApp — validation humaine avant chaque action.",
  },
  {
    title: "Customer / ServiceOps",
    text: "Qualification, SLA et suivi client sur WhatsApp et e-mail : un agent qui recommande, un humain qui répond.",
  },
  {
    title: "DocumentOps",
    text: "Devis, factures et rapports générés puis vérifiés automatiquement — le résultat le plus rapide à constater.",
  },
];

const offers = [
  {
    level: "0",
    title: "AI Opportunity Scan",
    text: "Diagnostic léger, gratuit — la porte d’entrée.",
  },
  {
    level: "1",
    title: "Decision Sprint",
    text: "5 à 30 jours, forfait fixe. Premier résultat mesuré.",
  },
  {
    level: "2",
    title: "Déploiement vertical",
    text: "Le vertical pack complet, connecté à vos outils.",
  },
  {
    level: "3",
    title: "Managed AI Operations",
    text: "Abonnement — supervision continue, le moteur économique récurrent.",
  },
  {
    level: "4",
    title: "Exponent Assurance",
    text: "Audit et gouvernance — vendable même si vous utilisez déjà ChatGPT, Copilot ou n8n.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1 — HERO : plein écran, fond argent granuleux, halo bleu discret,
          carte vidéo flottante à droite (desktop uniquement) */}
      <section className="bg-radial-silver relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        <div className="halo-blue" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <div className="hero-line" style={{ animationDelay: "0ms" }}>
              <Eyebrow>Agents IA gouvernés</Eyebrow>
            </div>
            <h1 className="mt-8 max-w-2xl text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-graphite-900">
              <span
                className="hero-line block"
                style={{ animationDelay: "120ms" }}
              >
                Compress time.
              </span>
              <span
                className="hero-line block"
                style={{ animationDelay: "240ms" }}
              >
                Expand <span className="text-accent-blue">value</span>.
              </span>
            </h1>
            <p
              className="hero-line mt-8 max-w-2xl text-lg leading-relaxed text-graphite-700"
              style={{ animationDelay: "360ms" }}
            >
              ExponentValue conçoit, déploie et supervise des systèmes
              d’agents IA gouvernés qui transforment les opérations
              dispersées des PME et ETI francophones en actions mesurables,
              contrôlées et auditables.
            </p>
            <div
              className="hero-line mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "480ms" }}
            >
              <Button href="/contact">Démarrer mon diagnostic</Button>
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
                  { value: "8", label: "Étapes du framework EXPONENT" },
                  { value: "3", label: "Vertical packs en feuille de route" },
                  {
                    value: "0",
                    label: "Action critique sans validation humaine",
                  },
                ]}
              />
            </div>
          </div>
          <div className="hero-line hidden lg:block" style={{ animationDelay: "300ms" }}>
            <ScrollVideo
              src="/videos/v1.mp4"
              speed={0.1}
              preload="auto"
              className="aspect-[9/16] w-full"
            />
          </div>
        </div>
      </section>

      {/* 2 — LE CONSTAT : deux colonnes sur fond silver-100 */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Le constat</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
                Tout le monde parle d’IA. Peu d’entreprises en tirent une
                valeur mesurable.
              </h2>
              <p className="mt-6 max-w-xl">
                La plupart des pilotes IA restent des démonstrations : un
                agent sans supervision, déconnecté des outils réels, qui ne
                survit pas au premier changement d’équipe. Le problème n’est
                jamais le modèle — c’est l’absence de système autour de lui.
              </p>
            </div>
            <div>
              {frictions.map((f, i) => (
                <div
                  key={f.title}
                  className={`py-6 ${i > 0 ? "hairline" : "lg:pt-0"}`}
                >
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

      {/* 3 — LA PLATEFORME : section sombre de rupture, principe de
          gouvernance en intro */}
      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>La plateforme</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
            Des agents qui recommandent. Des humains qui décident.
          </h2>
          <p className="mt-6 max-w-2xl text-silver-300">
            Un principe traverse toute l’architecture ExponentOS : un agent
            qui produit un travail n’est jamais celui qui le valide. La
            discipline d’un système financier, appliquée à vos opérations.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title} title={p.title} dark>
                {p.text}
              </Card>
            ))}
          </div>
          <Link
            href="/plateforme"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-silver-100 underline decoration-silver-400/60 underline-offset-8 transition-colors duration-150 hover:decoration-silver-100"
          >
            Explorer l’architecture ExponentOS
          </Link>
        </Reveal>
      </Section>

      {/* 4 — LA MÉTHODE : aperçu du framework EXPONENT (4 des 8 lettres) */}
      <Section rule={false} className="bg-radial-silver-soft">
        <Reveal>
          <Eyebrow>La méthode</Eyebrow>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            Huit étapes, une seule trajectoire.
          </h2>
        </Reveal>
        <StepFlow steps={methodSteps} className="mt-14" />
        <Reveal>
          <Link
            href="/methode"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-graphite-900 underline decoration-silver-300 underline-offset-8 transition-colors duration-150 hover:decoration-graphite-700"
          >
            Voir les 8 étapes du framework EXPONENT
          </Link>
        </Reveal>
      </Section>

      {/* 5 — MANIFESTE : grand bloc éditorial centré */}
      <Section>
        <Reveal>
          <blockquote className="mx-auto max-w-4xl py-6 text-center md:py-10">
            <PixelMark className="mx-auto text-silver-400" />
            <p className="mt-8 text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-snug tracking-tight text-graphite-900">
              We build governed intelligent systems that scale human intent.
            </p>
          </blockquote>
        </Reveal>
      </Section>

      {/* 6 — VERTICAL PACKS : 3 cartes réelles, pas de placeholder */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>Vertical packs</Eyebrow>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            Une verticale de départ. Un ROI mesurable en semaines.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verticalPacks.map((v) => (
              <Card key={v.title} title={v.title}>
                {v.text}
              </Card>
            ))}
          </div>
          <Link
            href="/secteurs"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-graphite-900 underline decoration-silver-300 underline-offset-8 transition-colors duration-150 hover:decoration-graphite-700"
          >
            Découvrir les vertical packs
          </Link>
        </Reveal>
      </Section>

      {/* 7 — ÉCHELLE D’OFFRES : de l’audit gratuit à l’exploitation gérée */}
      <Section rule={false}>
        <Reveal>
          <Eyebrow>Comment travailler avec nous</Eyebrow>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-graphite-900">
            De l’audit gratuit à l’exploitation gérée.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {offers.map((o) => (
              <div key={o.level} className="hairline pt-6">
                <span className="font-mono text-[0.78rem] tracking-[0.18em] text-accent-blue">
                  {o.level}
                </span>
                <h3 className="mt-3 text-base font-extrabold tracking-tight text-graphite-900">
                  {o.title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-graphite-700">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 8 — CTA FINAL : seconde section sombre, recentrée sur le diagnostic */}
      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight tracking-tight text-silver-50">
              Votre premier diagnostic IA, gratuit et sans engagement.
            </h2>
            <p className="mt-6 text-silver-300">
              Trente minutes suffisent pour cartographier vos opérations et
              identifier ce qu’un premier système d’agents gouvernés
              changerait concrètement.
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
