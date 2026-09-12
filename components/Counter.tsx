"use client";

import { useCountUp } from "@/hooks/useCountUp";

/**
 * Compteur 0 → cible déclenché au scroll (useCountUp). `prefix`/`suffix`
 * pour habiller la valeur ("+", "%", "j"…).
 */
export default function Counter({
  target,
  prefix = "",
  suffix = "",
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const { ref, value } = useCountUp<HTMLSpanElement>(target);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
