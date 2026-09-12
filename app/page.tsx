import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import Eyebrow from "@/components/Eyebrow";
import HeroVideo from "@/components/HeroVideo";
import Marquee from "@/components/Marquee";
import PixelMark from "@/components/PixelMark";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StepFlow from "@/components/StepFlow";

const frictions = [
  {
    title: "The overpromise",
    text: "“Full autonomy,” “zero friction”: no deployment has zero effort, and an agent always needs supervision. The dominant AI narrative ignores this.",
  },
  {
    title: "The pilot-to-production gap",
    text: "An agent tested in a demo is not an agent that runs, every day, connected to your real tools, with someone accountable for it.",
  },
  {
    title: "Zero governance, zero proof",
    text: "Without an audit trail or human validation before action, an AI recommendation stays an opinion — never a decision you can defend.",
  },
];

const pillars = [
  {
    title: "Governed agents, never autonomous by default",
    text: "An agent that produces work is never the one that validates it. Progressive autonomy, mandatory human validation for every critical action.",
  },
  {
    title: "An enterprise memory, not a chatbot",
    text: "Hybrid search — exact, vector, graph — and an evidence log: every answer linked to its source, its validity date, and its confidence level.",
  },
  {
    title: "Wired into your tools, not the other way around",
    text: "Excel, WhatsApp, Odoo, Sage, email: ExponentValue plugs into what you already use — no forced migration, no lock-in to a closed ecosystem.",
  },
];

const integrations = [
  "Excel",
  "Google Sheets",
  "WhatsApp",
  "Odoo",
  "Sage",
  "Email",
  "API",
];

const methodSteps = [
  {
    number: "E",
    title: "Examine",
    description:
      "A focused diagnostic of your operations: where AI actually changes the game, where it adds nothing.",
  },
  {
    number: "O",
    title: "Orchestrate",
    description:
      "Deploying the AgentOS: missions, independent validators, budgets, sandboxing — never an isolated script.",
  },
  {
    number: "N",
    title: "Navigate",
    description:
      "A living dashboard: active agents, cost, hours saved, ROI measured continuously.",
  },
  {
    number: "T",
    title: "Transform",
    description:
      "Continuous improvement through a Managed AI Operations subscription — the project becomes a permanent system.",
  },
];

const verticalPacks = [
  {
    title: "Inventory & Cash Control",
    text: "Unified stock, stockout forecasting, receivables tracking, sales-to-payment reconciliation, WhatsApp alerts — human validation before every action.",
  },
  {
    title: "Customer / ServiceOps",
    text: "Qualification, SLAs, and customer follow-up on WhatsApp and email: an agent that recommends, a human who responds.",
  },
  {
    title: "DocumentOps",
    text: "Quotes, invoices, and reports generated and then verified automatically — the fastest result to see for yourself.",
  },
];

const offers = [
  {
    level: "0",
    title: "AI Opportunity Scan",
    text: "A light, free diagnostic — the entry point.",
  },
  {
    level: "1",
    title: "Decision Sprint",
    text: "5 to 30 days, fixed fee. A first measured result.",
  },
  {
    level: "2",
    title: "Vertical deployment",
    text: "The full vertical pack, wired into your tools.",
  },
  {
    level: "3",
    title: "Managed AI Operations",
    text: "Subscription — continuous oversight, the recurring economic engine.",
  },
  {
    level: "4",
    title: "Exponent Assurance",
    text: "Audit and governance — sellable even if you already run ChatGPT, Copilot, or n8n.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1 — HERO : vidéo plein cadre, zoom/décalage/fondu au scroll (Scale AI) */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        <HeroVideo src="/videos/v1.mp4" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10">
          <div className="hero-line" style={{ animationDelay: "0ms" }}>
            <Eyebrow light>Governed AI agents</Eyebrow>
          </div>
          <h1 className="heading-hero mt-8 max-w-3xl text-silver-50">
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
            className="hero-line mt-8 max-w-2xl text-lg leading-relaxed text-silver-300"
            style={{ animationDelay: "360ms" }}
          >
            ExponentValue designs, deploys, and supervises governed AI agent
            systems that turn the scattered operations of French-speaking
            SMBs and mid-market companies into measurable, controlled,
            auditable actions.
          </p>
          <div
            className="hero-line mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "480ms" }}
          >
            <Button href="/contact" variant="inverse">
              Start my diagnostic
            </Button>
            <Button href="/method" variant="outline-inverse">
              Explore the method
            </Button>
          </div>
          <div
            className="hero-line hairline-dark mt-16 pt-8"
            style={{ animationDelay: "600ms" }}
          >
            <dl className="flex flex-col gap-4 font-mono sm:flex-row sm:gap-0">
              <div className="flex-1 py-1 sm:pl-0">
                <dd className="text-[0.95rem] font-medium tracking-[0.08em] text-silver-50">
                  <Counter target={8} />
                </dd>
                <dt className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-silver-400">
                  Steps in the EXPONENT framework
                </dt>
              </div>
              <div className="flex-1 border-t border-silver-100/15 py-1 pt-4 sm:border-t-0 sm:border-l sm:border-silver-100/15 sm:px-8 sm:pt-1">
                <dd className="text-[0.95rem] font-medium tracking-[0.08em] text-silver-50">
                  <Counter target={3} />
                </dd>
                <dt className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-silver-400">
                  Vertical packs on the roadmap
                </dt>
              </div>
              <div className="flex-1 border-t border-silver-100/15 py-1 pt-4 sm:border-t-0 sm:border-l sm:border-silver-100/15 sm:px-8 sm:pt-1">
                <dd className="text-[0.95rem] font-medium tracking-[0.08em] text-silver-50">
                  0
                </dd>
                <dt className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-silver-400">
                  Critical actions without human validation
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 2 — THE REALITY CHECK */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>The reality check</Eyebrow>
              <h2 className="heading-lg mt-6 text-graphite-900">
                Everyone talks about AI. Few companies get measurable value
                from it.
              </h2>
              <p className="mt-6 max-w-xl">
                Most AI pilots stay demos: an unsupervised agent, disconnected
                from real tools, that doesn&rsquo;t survive the first team
                change. The problem is never the model &mdash; it&rsquo;s the
                absence of a system around it.
              </p>
            </div>
            <div>
              {frictions.map((f, i) => (
                <div
                  key={f.title}
                  className={`py-6 ${i > 0 ? "hairline" : "lg:pt-0"}`}
                >
                  <h3 className="heading-md text-graphite-900">{f.title}</h3>
                  <p className="mt-2 text-[0.98rem]">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 3 — THE PLATFORM : section sombre, principe de gouvernance en intro,
          bandeau d'intégrations en marquee */}
      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>The platform</Eyebrow>
          <h2 className="heading-lg mt-6 max-w-3xl text-silver-50">
            Agents that recommend. Humans who decide.
          </h2>
          <p className="mt-6 max-w-2xl text-silver-300">
            One principle runs through the entire ExponentOS architecture: an
            agent that produces work is never the one that validates it. The
            discipline of a financial system, applied to your operations.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title} title={p.title} dark>
                {p.text}
              </Card>
            ))}
          </div>
          <Link
            href="/platform"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-silver-100 underline decoration-silver-400/60 underline-offset-8 transition-colors duration-150 hover:decoration-silver-100"
          >
            Explore the ExponentOS architecture
          </Link>
        </Reveal>
        <Reveal className="mt-16">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-silver-400">
            Connects to the tools you already run
          </p>
          <Marquee className="mt-6">
            {integrations.map((name) => (
              <span
                key={name}
                className="font-mono text-sm uppercase tracking-[0.1em] text-silver-300"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </Reveal>
      </Section>

      {/* 4 — THE METHOD : aperçu du framework EXPONENT (4 des 8 lettres) */}
      <Section rule={false} className="bg-radial-silver-soft">
        <Reveal>
          <Eyebrow>The method</Eyebrow>
          <h2 className="heading-lg mt-6 text-graphite-900">
            Eight steps, one trajectory.
          </h2>
        </Reveal>
        <StepFlow steps={methodSteps} className="mt-14" />
        <Reveal>
          <Link
            href="/method"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-graphite-900 underline decoration-silver-300 underline-offset-8 transition-colors duration-150 hover:decoration-graphite-700"
          >
            See all 8 steps of the EXPONENT framework
          </Link>
        </Reveal>
      </Section>

      {/* 5 — MANIFESTO : citation plein cadre, vidéo en fond (Scale AI) */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden">
        <HeroVideo src="/videos/v5.mp4" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal>
            <PixelMark className="mx-auto text-silver-300" />
            <p className="heading-lg mt-8 text-silver-50">
              We build governed intelligent systems that scale human intent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6 — VERTICAL PACKS : 3 cartes réelles, pas de placeholder */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>Vertical packs</Eyebrow>
          <h2 className="heading-lg mt-6 text-graphite-900">
            One starting vertical. Measurable ROI in weeks.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verticalPacks.map((v) => (
              <Card key={v.title} title={v.title}>
                {v.text}
              </Card>
            ))}
          </div>
          <Link
            href="/sectors"
            className="mt-10 inline-block font-mono text-[0.85rem] uppercase tracking-[0.18em] text-graphite-900 underline decoration-silver-300 underline-offset-8 transition-colors duration-150 hover:decoration-graphite-700"
          >
            Discover the vertical packs
          </Link>
        </Reveal>
      </Section>

      {/* 7 — OFFER LADDER : from a free scan to fully managed operations */}
      <Section rule={false}>
        <Reveal>
          <Eyebrow>How we work together</Eyebrow>
          <h2 className="heading-lg mt-6 text-graphite-900">
            From a free scan to fully managed operations.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {offers.map((o) => (
              <div key={o.level} className="hairline pt-6">
                <span className="font-mono text-[0.78rem] tracking-[0.18em] text-accent-blue">
                  {o.level}
                </span>
                <h3 className="mt-3 text-base font-medium tracking-tight text-graphite-900">
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
            <h2 className="heading-lg text-silver-50">
              Your first AI diagnostic, free and without obligation.
            </h2>
            <p className="mt-6 text-silver-300">
              Thirty minutes is enough to map your operations and identify
              what a first governed agent system would actually change.
            </p>
            <Button href="/contact" variant="inverse" className="mt-10">
              Start my diagnostic
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
