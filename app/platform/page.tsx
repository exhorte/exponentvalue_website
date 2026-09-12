import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import LayerStack from "@/components/LayerStack";
import Reveal from "@/components/Reveal";
import ScrollVideo from "@/components/ScrollVideo";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "ExponentOS: the seven-layer architecture that governs your AI agents, from data ingestion to action on your business tools.",
};

const layers = [
  {
    key: "vertical-packs",
    codename: "Vertical Packs",
    name: "Business applications",
    description:
      "The applications your teams use every day: Inventory & Cash Control, DocumentOps, CustomerOps — each a complete application, not a simple workflow.",
  },
  {
    key: "valuespace",
    codename: "ValueSpace",
    name: "Mission Control",
    description:
      "Missions, kanban, the status of every agent, the human-approval queue, real-time ROI. The command post where the work is supervised, not where it's done by hand.",
  },
  {
    key: "agentos",
    codename: "AgentOS",
    name: "Agent Runtime",
    description:
      "The orchestrator, the workers that execute, the independent validators that verify — never the same agent on both sides — and human checkpoints on every action that matters.",
  },
  {
    key: "valueguard",
    codename: "ValueGuard",
    name: "Assurance — the primary differentiator",
    description:
      "Per-action permissions (not per-tool), spending budgets, an immutable audit log, a kill switch, continuous evaluations. The layer most competitors we studied cover the worst — this is where trust is built.",
  },
  {
    key: "valuememory",
    codename: "ValueMemory",
    name: "Context & Decision Fabric",
    description:
      "Hybrid search — exact, keyword, vector, graph — routed by the question asked, entity resolution, and an evidence log linking every answer to its source and its validity date.",
  },
  {
    key: "connect",
    codename: "Exponent Connect",
    name: "Action Layer",
    description:
      "WhatsApp, Excel and Google Sheets, Odoo, Sage, email, API — the browser only as an absolute last resort, when no clean integration exists.",
  },
  {
    key: "model-gateway",
    codename: "Model Gateway",
    name: "Model routing",
    description:
      "Cost, quality, and confidentiality routing across models — with local or cloud fallback depending on data sensitivity and connection stability.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
            <Reveal>
              <Eyebrow>The platform</Eyebrow>
              <h1 className="heading-hero mt-8 max-w-3xl text-graphite-900">
                ExponentOS. An architecture, not a stack of tools.
              </h1>
              <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
                Every layer has a precise role, and one discipline in common:
                no decision executes without evidence, no agent validates
                itself. It&rsquo;s the same architecture we deploy, layer by
                layer, for every client &mdash; not a custom project
                reinvented each time.
              </p>
            </Reveal>
            <Reveal className="hidden lg:block">
              <ScrollVideo
                src="/videos/v4.mp4"
                speed={0.18}
                className="aspect-square w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Section rule={false}>
        <Reveal>
          <Eyebrow>The seven layers</Eyebrow>
        </Reveal>
        <div className="mt-14">
          <LayerStack layers={layers} />
        </div>
      </Section>

      <Section dark rule={false}>
        <Reveal>
          <div className="mx-auto max-w-3xl py-6 text-center md:py-10">
            <h2 className="heading-lg text-silver-50">
              The method that builds this architecture, step by step.
            </h2>
            <p className="mt-6 text-silver-300">
              The EXPONENT framework &mdash; eight steps, from diagnostic to
              continuous improvement.
            </p>
            <Button href="/method" variant="inverse" className="mt-10">
              See the EXPONENT framework
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
