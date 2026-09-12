import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* Chaque route devient un dossier + index.html : Apache (Hostinger) les sert
     sans règle de réécriture. */
  trailingSlash: true,
  /* Export statique = pas de loader d'optimisation d'image côté serveur.
     Pas de <Image> utilisé aujourd'hui (tout est CSS/SVG), mais on le
     débloque par précaution pour un usage futur (logo, OG image…). */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
