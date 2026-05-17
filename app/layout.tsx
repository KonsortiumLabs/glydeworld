import type { Metadata } from "next";
import "./globals.css";
import { ContentProvider } from "@/components/ContentProvider";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://glydeworld.com"),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  openGraph: {
    title: siteContent.seo.ogTitle,
    description: siteContent.seo.ogDescription,
    url: "https://glydeworld.com",
    siteName: "G//LYDE",
    images: [siteContent.seo.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.twitterTitle,
    description: siteContent.seo.twitterDescription,
    images: [siteContent.seo.twitterImage],
  },
  icons: {
    icon: siteContent.brand.faviconUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ContentProvider>
          <div className="shell">
            <SiteHeader />
            <main className="main">{children}</main>
            <SiteFooter />
          </div>
        </ContentProvider>
      </body>
    </html>
  );
}
