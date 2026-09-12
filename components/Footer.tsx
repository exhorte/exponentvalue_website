import Link from "next/link";
import PixelMark from "./PixelMark";

const columns = [
  {
    title: "Site",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/method", label: "Method" },
      { href: "/sectors", label: "Sectors" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "Manifesto" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-silver-300">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-silver-50">
              ExponentValue
            </p>
            <p className="mt-3 max-w-xs text-[0.92rem] leading-relaxed">
              Multiply what matters. Governed AI agents for French-speaking
              SMBs and mid-market companies.
            </p>
          </div>
          <div className="flex gap-16 md:gap-24">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-silver-400">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.92rem] transition-colors duration-150 hover:text-silver-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="hairline-dark mt-14 flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-silver-400">
            exponentvalue.com
          </p>
          <p className="text-[0.82rem] text-silver-400">
            © {new Date().getFullYear()} ExponentValue. All rights reserved.
          </p>
          <PixelMark className="text-silver-400" />
        </div>
      </div>
    </footer>
  );
}
