import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...siteContent.nav, { label: "Off Ledger", href: "/off-ledger" }, { label: "G-Core", href: "/g-core" }, { label: "Machines", href: "/machines" }];
  return routes.map((item) => ({
    url: `https://glydeworld.com${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
  }));
}
