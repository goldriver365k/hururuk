import type { MetadataRoute } from "next"

const BASE_URL = "https://hururuk.shop"

const ROUTES = ["", "/franchise", "/menu", "/menu-select", "/brand", "/solo", "/couple", "/family", "/friends"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
