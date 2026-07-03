import type { MetadataRoute } from "next";

const BASE_URL = "https://exponentvalue.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/plateforme", "/methode", "/secteurs", "/entreprise", "/contact"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    }),
  );
}
