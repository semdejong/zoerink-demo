import type { Metadata, Viewport } from "next";
import { Bitter, Instrument_Sans, Overpass_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileBar from "@/components/site/MobileBar";
import ScrollTape from "@/components/graphics/ScrollTape";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bitter",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

const overpass = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-overpass",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | René Zoerink",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.primary };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${bitter.variable} ${instrument.variable} ${overpass.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip">
        <a href="#inhoud" className="skip">
          Naar inhoud
        </a>
        <ScrollTape />
        <Header />
        <div id="inhoud" className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
