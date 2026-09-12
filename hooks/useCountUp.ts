"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anime un entier de 0 vers `target` une fois l'élément visible à 30 % —
 * même IntersectionObserver que Reveal, déclenché une seule fois (ease-out
 * cubique). Sous `prefers-reduced-motion`, affiche directement la valeur
 * finale sans animation.
 */
export function useCountUp<T extends HTMLElement>(
  target: number,
  duration = 1200,
) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          frame = progress < 1 ? requestAnimationFrame(tick) : 0;
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}
