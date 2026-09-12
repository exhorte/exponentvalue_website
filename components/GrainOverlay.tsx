/**
 * Grain photographique global — signature visuelle n°1.
 * SVG feTurbulence (fractalNoise, baseFrequency 0.65, 3 octaves) en data-URI,
 * fixé sur tout le viewport, opacité 0.05, mix-blend-mode overlay.
 * La texture est déclarée une seule fois dans globals.css (--grain-url).
 */
export default function GrainOverlay() {
  return <div aria-hidden="true" className="grain-overlay" />;
}
