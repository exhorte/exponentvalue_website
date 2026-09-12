/**
 * Symbole de marque officiel (dossier `ressouce/logo_icon/Exponentvalue
 * branding assets/` — même tracé que le favicon et les icônes PWA) : un
 * carré traversé par une courbe exponentielle. Remplace PixelMark, qui
 * n'était qu'un ornement provisoire en attendant un vrai logo. `fill`
 * hérite de `currentColor` : la couleur se pilote via la classe de texte
 * du parent, comme PixelMark avant lui.
 */
export default function Logomark({
  className = "h-[10px] w-[10px]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M20 20 L580 20 L580 580 L20 580 Z M68 20 A512 512 0 0 0 580 532 L580 427 A407 407 0 0 1 173 20 Z"
      />
    </svg>
  );
}
