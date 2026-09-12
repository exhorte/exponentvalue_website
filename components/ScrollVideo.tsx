"use client";

import { useEffect, useRef } from "react";
import { useScrollParallax } from "@/hooks/useScrollParallax";

/**
 * Vidéo locale (public/videos) en boucle silencieuse, mise en pause
 * hors-écran (IntersectionObserver — perf, même logique que Scale AI),
 * décalée en parallax au scroll (useScrollParallax). Carte à coins arrondis
 * + filet, cohérente avec la grammaire de carte existante. Purement
 * décorative : `aria-hidden`, aucun contrôle.
 */
export default function ScrollVideo({
  src,
  poster,
  speed = 0.12,
  preload = "metadata",
  className = "",
}: {
  src: string;
  poster?: string;
  speed?: number;
  preload?: "none" | "metadata" | "auto";
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxRef = useScrollParallax<HTMLDivElement>(speed);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={parallaxRef}
      className={`overflow-hidden rounded-2xl border border-silver-200 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload={preload}
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        className="block h-full w-full object-cover"
      />
    </div>
  );
}
