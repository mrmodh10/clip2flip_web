import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { publicAsset } from "@/lib/public-assets";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clip2Flip",
  url: "https://clip2flip.com",
  logo: "https://clip2flip.com/images/brand/logo.svg",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Clip2Flip",
  url: "https://clip2flip.com",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Clip2Flip",
  description: "Clip2Flip marketing website pages",
  icons: {
    icon: [
      {
        url: publicAsset("/images/brand/logo.svg?v=20260513"),
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: [
      {
        url: publicAsset("/images/brand/logo.svg?v=20260513"),
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
