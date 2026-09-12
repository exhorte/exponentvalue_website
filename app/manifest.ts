import type { MetadataRoute } from "next";

/* Requis par `output: "export"` : le manifeste est figé au build, comme
   robots.ts et sitemap.ts. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ExponentValue",
    short_name: "ExponentValue",
    description:
      "Governed AI agent systems for French-speaking SMBs and mid-market companies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e2124",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
