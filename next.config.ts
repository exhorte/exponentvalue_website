import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* Chaque route devient un dossier + index.html : Apache (Hostinger) les sert
     sans règle de réécriture. */
  trailingSlash: true,
};

export default nextConfig;
