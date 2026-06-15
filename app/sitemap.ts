import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vladholoborodko.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: `${base}/cases/${c.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes];
}
