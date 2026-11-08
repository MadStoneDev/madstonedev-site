import type { MetadataRoute } from "next";
import { pageProducts } from "@/content/products";

const BASE = "https://madstone.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/privacy", "/terms", "/azimuth/privacy"];

  const productRoutes = pageProducts().map((p) => `/${p.slug}`);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
