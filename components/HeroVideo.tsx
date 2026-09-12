"use client";

import { useEffect, useRef } from "react";
import { useHeroScroll } from "@/hooks/useHeroScroll";

/**
 * Vidéo plein cadre en fond de section, façon Scale AI : lecture en boucle
 * silencieuse, zoom + décalage + fondu proportionnels au scroll (progress
 * 0→1 sur la hauteur de la section — useHeroScroll), mise en pause une fois
 * la section dépassée. Dégradé sombre superposé pour la lisibilité du texte.
 * `prefers-reduced-motion` : progress reste à 0, la vidéo continue de
 * tourner, seul le mouvement s'arrête (aucun style dynamique appliqué).
 */
export default function HeroVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const { ref, progress } = useHeroScroll<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPastHero = progress > 0.96;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (isPastHero) el.pause();
    else el.play().catch(() => {});
  }, [isPastHero]);

  const scale = 1 + progress * 0.15;
  const translate = progress * -60;
  const opacity = 1 - progress * 0.75;

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          transform: `scale(${scale}) translateY(${translate}px)`,
          opacity,
        }}
        className="h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-true-black via-true-black/55 to-true-black/25" />
    </div>
  );
}
