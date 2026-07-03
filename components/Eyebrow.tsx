import PixelMark from "./PixelMark";

/**
 * Label monospace uppercase précédé du PixelMark — geste typographique
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
      className={`flex items-center gap-3 font-mono text-[0.78rem] uppercase tracking-[0.18em] ${
        light ? "text-silver-300" : "text-silver-400"
      }`}
    >
      <PixelMark className={light ? "text-silver-300" : "text-silver-400"} />
      {children}
    </p>
  );
}
