import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...siteContent.nav,
    { label: "Off Ledger", href: "/off-ledger" },
    { label: "Movement Systems", href: "/movement-systems" },
    { label: "G-Core", href: "/g-core" },
    { label: "Machines", href: "/machines" },
    { label: "Join", href: "/join" },
    { label: "Collaborate", href: "/collaborate" },
    { label: "Support a Drop", href: "/support-a-drop" },
    { label: "Submit Rider", href: "/submit-rider" },
    { label: "Submit Crew", href: "/submit-crew" },
    { label: "Submit Sponsor", href: "/submit-sponsor" },
    { label: "Submit Circuit", href: "/submit-circuit" },
    { label: "Submit Machine", href: "/submit-machine" },
    { label: "Submit Story", href: "/submit-story" },
  ];
  return routes.map((item) => ({
    url: `https://glydeworld.com${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
  }));
}
