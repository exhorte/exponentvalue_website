import Link from "next/link";

type Variant = "primary" | "outline" | "inverse";

const variants: Record<Variant, string> = {
  /* CTA principal : noir plein sur fond argent — jamais de bouton bleu */
  primary:
    "bg-ink text-silver-50 hover:bg-graphite-700 border border-ink hover:border-graphite-700",
  outline:
    "border border-graphite-700 text-graphite-900 hover:bg-silver-200/60",
  /* Sur sections sombres : blanc */
  inverse:
    "bg-silver-50 text-ink hover:bg-silver-200 border border-silver-50 hover:border-silver-200",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3.5 text-[0.95rem] font-semibold tracking-wide transition-colors duration-150 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
