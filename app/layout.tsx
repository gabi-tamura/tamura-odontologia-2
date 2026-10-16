import type { Metadata } from "next";
import { business } from "@/data/business";
import { dentistSchema, indexable, seoDescription, seoTitle, siteUrl } from "@/data/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: `${siteUrl}/` } : undefined,
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    siteName: business.name,
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image", title: seoTitle, description: seoDescription },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  robots: {
    index: indexable,
    follow: true,
    googleBot: { index: indexable, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema).replace(/</g, "\\u003c") }} />
    {children}
  </body></html>;
}
