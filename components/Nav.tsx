"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logomark from "./Logomark";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/method", label: "Method" },
  { href: "/sectors", label: "Sectors" },
  { href: "/company", label: "Company" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Bloque le scroll du document quand le menu mobile est ouvert */
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Le backdrop-blur reste confiné à cette barre : posé sur le <header>,
          il créerait un containing block qui piégerait l'overlay fixed du menu. */}
      <div className="border-b border-silver-200 bg-silver-50/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="flex items-center gap-3 text-[1.05rem] font-extrabold tracking-tight text-graphite-900"
          >
            <Logomark className="h-5 w-5 text-graphite-900" />
            ExponentValue
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9rem] transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-accent-blue"
                    : "text-graphite-700 hover:text-graphite-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-ink px-5 py-2.5 text-[0.85rem] font-medium text-silver-50 transition-colors duration-150 hover:bg-graphite-700"
            >
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`h-px w-6 bg-graphite-900 transition-transform duration-150 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-graphite-900 transition-transform duration-150 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran sur fond --ink */}
      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-ink px-6 py-10 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`heading-md hairline-dark py-5 ${
                  pathname === link.href ? "text-accent-blue" : "text-silver-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center bg-silver-50 px-7 py-4 text-[0.95rem] font-medium text-ink"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
