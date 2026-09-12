/**
 * Motif de marque : deux carrés en quinconce (damier 2×2 partiel).
 * Seul ornement graphique autorisé — ponctuation des eyebrows,
 * puces de cartes, signature du footer.
 */
export default function PixelMark({ className }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={className}
    >
      <rect x="0" y="0" width="4.5" height="4.5" fill="currentColor" />
      <rect x="5.5" y="5.5" width="4.5" height="4.5" fill="currentColor" />
    </svg>
  );
}
