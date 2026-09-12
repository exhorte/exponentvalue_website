import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import StepFlow from "@/components/StepFlow";

export const metadata: Metadata = {
  title: "Method",
  description:
    "The EXPONENT framework: eight disciplined steps, from diagnostic to continuous improvement, for deploying governed AI agents.",
};

const exponentSteps = [
  {
    number: "E",
    title: "Examine",
    description:
      "A focused diagnostic of your operations: workflow mapping, prioritized by impact and effort. No endless audit.",
  },
  {
    number: "X",
    title: "Extract",
    description:
      "Building the Context Fabric: ingesting existing data, mapping processes, resolving entities.",
  },
  {
    number: "P",
    title: "Prioritize",
    description:
      "Selecting the first process to tackle on an impact/ROI matrix — never ten workstreams in parallel.",
  },
  {
    number: "O",
    title: "Orchestrate",
    description:
      "Deploying the AgentOS: missions, orchestrator, workers, independent validators, budgets.",
  },
  {
    number: "N",
    title: "Normalize",
    description:
      "An OpsGraph built for your business — Customer, Order, Invoice, Payment, Stock, Incident — the common language between your data and the agents.",
  },
  {
    number: "E",
    title: "Execute",
    description:
      "Progressive, supervised autonomy: from a simple recommendation to execution, never a direct leap to full automation.",
  },
  {
    number: "N",
    title: "Navigate",
    description:
      "A living dashboard: active agents, cost, hours saved, ROI measured continuously — not a quarterly report.",
  },
  {
    number: "T",
    title: "Transform",
    description:
      "Continuous improvement through a Managed AI Operations subscription: the project becomes a permanent system, not a fixed deliverable.",
  },
];

const principles = [
  "An agent that produces work is never the one that validates it.",
  "Progressive, explicit autonomy — never a direct leap to fully automating a critical action.",
  "Mandatory human validation for: any contractual commitment, any payment, any legal or regulatory decision, any access to sensitive data, any data deletion.",
  "An immutable, exportable audit log for every decision and every action.",
  "Reversibility guaranteed by contract: you can always export your data and switch solutions.",
];

export default function MethodPage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>The method</Eyebrow>
            <h1 className="heading-hero mt-8 max-w-3xl text-graphite-900">
              The EXPONENT framework.
            </h1>
            <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
              Eight letters, eight disciplined steps. Not a marketing method
              — the same sequence, run on every engagement, from the first
              diagnostic to ongoing operations.
            </p>
          </Reveal>
        </div>
      </section>

      <Section rule={false}>
        <StepFlow steps={exponentSteps} />
      </Section>

      <Section className="bg-silver-100" rule={false}>
        <Reveal>
          <Eyebrow>The first engagement</Eyebrow>
          <h2 className="heading-lg mt-6 max-w-2xl text-graphite-900">
            The Decision Sprint.
          </h2>
          <p className="mt-6 max-w-xl">
            5 to 30 days, fixed fee. One process, one measured result — before
            talking about a full deployment or a subscription.
          </p>
          <Button href="/contact" className="mt-8">
            Start my diagnostic
          </Button>
        </Reveal>
      </Section>

      <Section dark rule={false}>
        <Reveal>
          <Eyebrow light>Governance</Eyebrow>
          <h2 className="heading-lg mt-6 max-w-2xl text-silver-50">
            Five non-negotiable rules.
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
