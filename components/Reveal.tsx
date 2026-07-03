"use client";

import { useEffect, useRef } from "react";

/**
 * Révélation discrète au scroll (opacity 0→1, y 16→0), une seule fois,
 * seuil 0.2. Implémentée en IntersectionObserver + CSS plutôt qu’avec
 * Framer Motion : zéro dépendance, même rendu, meilleur score Lighthouse.
 * `prefers-reduced-motion` est géré côté CSS (voir globals.css).
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
