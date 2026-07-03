import Eyebrow from "./Eyebrow";

/**
 * Gabarit provisoire des pages secondaires — remplacé par le contenu
 * complet après validation de la page d’accueil.
 */
export default function PageStub({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-radial-silver-soft min-h-[60svh]">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-4xl text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-graphite-900">
          {title}
        </h1>
        <div className="hairline mt-12 max-w-2xl pt-8 text-graphite-700">
          {children}
        </div>
      </div>
    </section>
  );
}
