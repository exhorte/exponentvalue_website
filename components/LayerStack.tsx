"use client";

import { useEffect, useRef, useState } from "react";

export type Layer = {
  key: string;
  codename: string;
  name: string;
  description: string;
};

/**
 * Empilement des 7 couches d'ExponentOS : diagramme sticky à gauche (la
 * couche active s'éclaire au scroll), détail à droite. Scrollspy fait main
 * avec IntersectionObserver (rootMargin centré sur le viewport) — même
 * philosophie que Reveal, zéro dépendance. Diagramme masqué sous lg : la
 * liste seule reste parfaitement lisible sur mobile.
 */
export default function LayerStack({ layers }: { layers: Layer[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = refs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [layers.length]);

  return (
    <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-32 flex flex-col gap-2">
          {layers.map((layer, i) => (
            <div
              key={layer.key}
              className={`border px-4 py-3 transition-colors duration-200 ${
                i === active
                  ? "border-accent-blue bg-accent-blue/5"
                  : "border-silver-200"
              }`}
            >
              <p
                className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] ${
                  i === active ? "text-accent-blue" : "text-silver-400"
                }`}
              >
                {layer.codename}
              </p>
              <p
                className={`mt-1 text-[0.85rem] font-semibold ${
                  i === active ? "text-graphite-900" : "text-graphite-700"
                }`}
              >
                {layer.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-16">
        {layers.map((layer, i) => (
          <div
            key={layer.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="hairline pt-8"
          >
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-accent-blue">
              {layer.codename}
            </p>
            <h3 className="heading-md mt-3 text-graphite-900">
              {layer.name}
            </h3>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-graphite-700">
              {layer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
