import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Démarrez votre AI Opportunity Scan gratuit : trente minutes pour identifier ce qu'un premier système d'agents gouvernés changerait dans vos opérations.",
};

export default function ContactPage() {
  return (
    <section className="bg-radial-silver-soft min-h-[70svh]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-graphite-900">
            Votre premier diagnostic IA, gratuit et sans engagement.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-graphite-700">
            Décrivez en quelques lignes le processus qui vous coûte le plus
            cher aujourd’hui. Un échange de trente minutes suffit pour évaluer
            ce qu’un premier système d’agents gouvernés changerait
            concrètement.
          </p>
          <div className="hairline mt-12 max-w-2xl pt-10">
            <a
              href="mailto:contact@exponentvalue.com"
              className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold tracking-tight text-graphite-900 underline decoration-accent-blue decoration-2 underline-offset-8 transition-colors duration-150 hover:text-accent-blue"
            >
              contact@exponentvalue.com
            </a>
            <p className="mt-6 text-[0.95rem] text-graphite-700">
              Nous répondons personnellement, sous 48h ouvrées.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
