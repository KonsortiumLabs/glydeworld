import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteContent.nav.map((item) => ({
    url: `https://glydeworld.com${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
  }));
}
