/**
 * Bandeau défilant infini — CSS pur (.marquee/.marquee-track, globals.css),
 * contenu dupliqué une fois pour boucler sans coupure. Pause au survol,
 * figé sous `prefers-reduced-motion`.
 */
export default function Marquee({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center gap-10 pr-10">
          {children}
        </div>
        <div
          className="flex shrink-0 items-center gap-10 pr-10"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
