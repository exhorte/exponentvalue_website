import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import PixelMark from "@/components/PixelMark";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Inventory & Cash Control, Customer/ServiceOps, DocumentOps: the ExponentValue vertical packs, ready to deploy.",
};

const verticals = [
  {
    order: "01",
    flagship: true,
    title: "Inventory & Cash Control",
    pitch:
      "The launch vertical: distribution, stock, and cash. A frequent pain point, ROI measurable in a few weeks, data already sitting in Excel or your ERP.",
    features: [
      "Unified stock across channels",
      "Stockout forecasting",
      "Receivables tracking",
      "Sales-to-payment reconciliation",
      "Automatic WhatsApp alerts",
      "Human validation before every action",
    ],
  },
  {
    order: "02",
    flagship: false,
    title: "Customer / ServiceOps",
    pitch:
      "Qualification, follow-up, and escalation for customer relationships on the channels your customers already use — WhatsApp and email.",
    features: [
      "Inbound request qualification",
      "WhatsApp and email follow-up",
      "SLAs tracked continuously",
      "Escalation to a human when needed",
    ],
  },
  {
    order: "03",
    flagship: false,
    title: "DocumentOps",
    pitch:
      "Quotes, invoices, and reports: the fastest result to see, often visible within the first week.",
    features: [
      "Quote and invoice generation",
      "Automated reporting",
      "Verification before sending",
      "Full traceability",
    ],
  },
];

export default function SectorsPage() {
  return (
    <>
      <section className="bg-radial-silver-soft">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <Eyebrow>Sectors</Eyebrow>
            <h1 className="heading-hero mt-8 max-w-3xl text-graphite-900">
              One vertical, one system, one measurable result.
            </h1>
            <p className="hairline mt-10 max-w-2xl pt-8 text-graphite-700">
              ExponentValue doesn&rsquo;t sell a generic platform to endlessly
              adapt. Each vertical pack is a complete application, ready to
              deploy, with its own agents, its own data model, and its own
              governance rules.
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
              {v.flagship ? " · launch vertical" : ""}
            </span>
            <h2 className="heading-lg mt-4 text-graphite-900">{v.title}</h2>
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
            <h2 className="heading-lg text-silver-50">
              Don&rsquo;t see your sector listed?
            </h2>
            <p className="mt-6 text-silver-300">
              That&rsquo;s exactly what the free diagnostic is for: finding
              out whether your first critical process matches an existing
              vertical pack, or an adaptation worth making.
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
