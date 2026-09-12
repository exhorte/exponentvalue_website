"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Progression de scroll (0→1) au fil de la propre hauteur d'un élément :
 * 0 quand son sommet touche le haut du viewport, 1 quand il l'a
 * entièrement dépassé. Sert de base à l'effet "vidéo qui bouge au scroll"
 * façon Scale AI (zoom, décalage, fondu) — écouteur passif + rAF, même
 * philosophie zéro dépendance que useScrollParallax. Fixé à 0 sous
 * `prefers-reduced-motion`.
 */
export function useHeroScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const p = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      setProgress(p);
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
  }, []);

  return { ref, progress };
}
