import type { Metadata } from "next";
import { spaceGrotesk, inter } from "./fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StatusBar from "@/components/layout/StatusBar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import CurveLoader from "@/components/ui/CurveLoader";
import LenisProvider from "@/components/providers/LenisProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Dinesh Koyyalamudi | Strategic Visionary & Venture Builder",
    template: "%s | Dinesh Koyyalamudi",
  },
  description:
    "Official platform of Dinesh Koyyalamudi—Founder, thinker, and leader focused on building resilient systems and visionary companies.",
  keywords: [
    "Dinesh Koyyalamudi",
    "Founder",
    "Venture Builder",
    "Strategic Leadership",
    "Technology Visionary",
    "Building the Future",
  ],
  authors: [{ name: "Dinesh Koyyalamudi" }],
  creator: "Dinesh Koyyalamudi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dineshkoyyalamudi.com",
    siteName: "Dinesh Koyyalamudi",
    title: "Dinesh Koyyalamudi | Building the Future",
    description:
      "Founder, thinker, and leader focused on building resilient systems and visionary companies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dinesh Koyyalamudi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Koyyalamudi | Building the Future",
    description:
      "Founder, thinker, and leader focused on building resilient systems and visionary companies.",
    creator: "@dineshkoyya",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-brand-dark selection:bg-brand-primary/30">
        <LenisProvider>
          <CurveLoader />

          <Navbar />
          <main className="flex-grow transition-all duration-300 pt-20">
            {/* <Breadcrumbs /> */}
            {children}
          </main>
          <Footer />
          {/* <StatusBar /> */}
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
