import Reveal from "./Reveal";

export type Step = {
  number: string;
  title: string;
  description: string;
};

/**
 * Séquence numérotée (framework EXPONENT, étapes condensées) — même
 * grammaire que la grille "01/02/03" de l'accueil (filet + numéro mono +
 * titre), généralisée à N étapes, chacune révélée individuellement au
 * scroll.
 */
export default function StepFlow({
  steps,
  className = "",
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {steps.map((step) => (
        <Reveal key={step.title}>
          <div className="hairline h-full pt-6">
            <span className="font-mono text-[0.78rem] tracking-[0.18em] text-accent-blue">
              {step.number}
            </span>
            <h3 className="mt-3 text-lg font-extrabold tracking-tight text-graphite-900">
              {step.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-graphite-700">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
