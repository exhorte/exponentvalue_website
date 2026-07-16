import type { MetadataRoute } from "next";

/* Requis par `output: "export"` : le robots.txt est figé au build. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://exponentvalue.com/sitemap.xml",
  };
}
