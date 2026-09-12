"use client";

import { useEffect, useRef } from "react";

/**
 * Décale un élément en `translateY` proportionnellement à sa distance au
 * centre du viewport, au scroll — écouteur passif + requestAnimationFrame,
 * même philosophie que Reveal (zéro dépendance, pas de Framer Motion/Lenis).
 * Neutralisé sous `prefers-reduced-motion`. `speed` : fraction du décalage
 * (0.1 = discret, 0.3 = prononcé — à la manière des cartes vidéo Scale AI).
 */
export function useScrollParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const distanceFromCenter =
        rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${(-distanceFromCenter * speed).toFixed(2)}px)`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
}
