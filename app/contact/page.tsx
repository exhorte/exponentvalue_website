import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your free AI Opportunity Scan: thirty minutes to identify what a first governed agent system would change in your operations.",
};

export default function ContactPage() {
  return (
    <section className="bg-radial-silver-soft min-h-[70svh]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="heading-hero mt-8 max-w-3xl text-graphite-900">
            Your first AI diagnostic, free and without obligation.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-graphite-700">
            Describe, in a few lines, the process costing you the most today.
            A thirty-minute conversation is enough to evaluate what a first
            governed agent system would actually change.
          </p>
          <div className="hairline mt-12 max-w-2xl pt-10">
            <a
              href="mailto:contact@exponentvalue.com"
              className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-normal tracking-tight text-graphite-900 underline decoration-accent-blue decoration-2 underline-offset-8 transition-colors duration-150 hover:text-accent-blue"
            >
              contact@exponentvalue.com
            </a>
            <p className="mt-6 text-[0.95rem] text-graphite-700">
              We reply personally, within 48 business hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
