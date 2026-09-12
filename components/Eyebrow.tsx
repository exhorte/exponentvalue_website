import Logomark from "./Logomark";

/**
 * Label monospace uppercase précédé du Logomark — geste typographique
 * emprunté à Palantir. `light` pour les sections sombres.
 */
export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] ${
        light ? "text-silver-300" : "text-silver-400"
      }`}
    >
      <Logomark
        className={`h-[10px] w-[10px] ${light ? "text-silver-300" : "text-silver-400"}`}
      />
      {children}
    </p>
  );
}
