/**
 * Section éditoriale : conteneur max 1280px, filet horizontal optionnel
 * courant sur toute la largeur du conteneur, variante sombre de rupture.
 */
export default function Section({
  id,
  dark = false,
  rule = true,
  className = "",
  containerClassName = "",
  children,
}: {
  id?: string;
  dark?: boolean;
  rule?: boolean;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${dark ? "section-dark" : ""} ${className}`}>
      <div
        className={`relative mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28 ${
          rule ? (dark ? "hairline-dark" : "hairline") : ""
        } ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
