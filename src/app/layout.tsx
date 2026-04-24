import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { PageTransition } from "@/components/providers/page-transition";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { GlassFilter } from "@/components/ui/liquid-glass";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indysigner.fr"),
  title: {
    default: "Indysigner — Votre site en 10 jours chrono",
    template: "%s · Indysigner",
  },
  description:
    "Agence web indépendante française. Sites vitrines premium, livrés en 7 jours. Propriété totale du client sur son site.",
  keywords: [
    "agence web",
    "site vitrine",
    "design premium",
    "Next.js",
    "Biot",
    "Côte d'Azur",
    "freelance web",
  ],
  authors: [{ name: "Indy François" }],
  creator: "Indysigner",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://indysigner.fr",
    siteName: "Indysigner",
    title: "Indysigner — Votre site en 10 jours chrono",
    description:
      "Design unique. Livraison express. Prix juste. Sites vitrines premium livrés en 7 jours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indysigner — Votre site en 10 jours chrono",
    description: "Design unique. Livraison express. Prix juste.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/favicon.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-dvh bg-paper text-ink">
        <LenisProvider>
          <GlassFilter />
          <SiteHeader />
          <main id="main" className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
