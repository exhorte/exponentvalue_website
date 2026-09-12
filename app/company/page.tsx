import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Company",
  description:
    "ExponentValue's mission, vision, and non-negotiable principles: the operational operating system for French-speaking companies.",
};

const moat = [
  "An operational ontology built for French-speaking African SMBs.",
  "Deep connectors into Excel, WhatsApp, Odoo, Sage, and the tools you already run — never the other way around.",
  "A library of reusable sector processes, not custom work redone every time.",
  "An evidence log: every decision linked to what justifies it.",
  "Exportable, reversible data — yours, always. Never a forced dependency.",
  "An experience built for French and mobile from day one, not translated after the fact.",
];

export default function CompanyPage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>Company</Eyebrow>
            <h1 className="heading-hero mt-8 max-w-3xl text-graphite-900">
              The operational operating system for French-speaking companies.
            </h1>
            <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
              ExponentValue designs, deploys, and supervises governed AI
              agent systems that turn the scattered operations of
              French-speaking SMBs and mid-market companies — particularly
              in West Africa — into measurable, controlled, auditable
              actions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manifesto: what we are not — dark section, assertive tone */}
      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>What we are not</Eyebrow>
          <p className="heading-lg mt-8 max-w-4xl text-silver-50">
            ExponentValue is not a generalist automation agency. Not a simple
            n8n/Make installer. Not a chatbot vendor. Not a training program
            manufacturing its own competitors. Not a horizontal copy of
            Palantir, BridgeSpace, or QM. Not a brand dependent on a single
            personality. And not a custom-development shop where nothing is
            ever reused from one client to the next.
          </p>
        </Reveal>
      </Section>

      {/* The moat: what doesn't copy easily */}
      <Section rule={false}>
        <Reveal>
          <Eyebrow>What doesn&rsquo;t copy easily</Eyebrow>
          <h2 className="heading-lg mt-6 max-w-2xl text-graphite-900">
            Frameworks get copied. This doesn&rsquo;t copy easily.
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

      {/* Team: hybrid human + AI agents, no overclaiming */}
      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>Team</Eyebrow>
          <h2 className="heading-lg mt-6 max-w-2xl text-graphite-900">
            A hybrid team: one founder, several AI agents.
          </h2>
          <p className="mt-6 max-w-2xl text-graphite-700">
            ExponentValue is designed and operated by a hybrid team: a
            founder, and specialized AI agents that handle part of the
            operational work — under the same governance we deploy for our
            clients. We don&rsquo;t ask of you anything we don&rsquo;t first
            apply to ourselves.
          </p>
        </Reveal>
      </Section>

      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="heading-lg text-silver-50">
              Let&rsquo;s talk about your most expensive friction point.
            </h2>
            <Button href="/contact" variant="inverse" className="mt-10">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
