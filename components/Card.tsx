import Logomark from "./Logomark";

/**
 * Carte sobre : bordure fine qui s’assombrit au survol, translation de 2px.
 * Pas d’ombre portée. `dark` pour les cartes graphite des sections sombres.
 */
export default function Card({
  title,
  children,
  dark = false,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group p-7 transition-[border-color,transform] duration-150 motion-safe:hover:-translate-y-0.5 ${
        dark
          ? "border border-graphite-700 bg-graphite-900/60 hover:border-silver-400"
          : "border border-silver-200 bg-silver-50 hover:border-graphite-700"
      } ${className}`}
    >
      <Logomark className="h-[10px] w-[10px] text-silver-400" />
      <h3
        className={`heading-md mt-5 ${
          dark ? "text-silver-50" : "text-graphite-900"
        }`}
      >
        {title}
      </h3>
      <div
        className={`mt-3 text-[0.98rem] leading-relaxed ${
          dark ? "text-silver-300" : "text-graphite-700"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
