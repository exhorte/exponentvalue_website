import type { MetadataRoute } from "next";

const BASE_URL = "https://exponentvalue.com";

/* Requis par `output: "export"` : le sitemap est figé au build. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/platform", "/method", "/sectors", "/company", "/contact"].map(
    (path) => ({
      /* Slash final : `trailingSlash` rend `/method/` canonique, et une URL
         sans slash coûterait une redirection 301 à chaque crawl. */
      url: `${BASE_URL}${path}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    }),
  );
}
