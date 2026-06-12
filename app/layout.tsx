import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedHcareSwiss | Premium Medical Tourism in Switzerland & Spain",
  description:
    "Your premium partner in value-based medical healthcare tourism services across Switzerland and Spain. Expert consultation, seamless care, end-to-end support.",
  metadataBase: new URL("https://landing.medhcareswiss.com"),
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-32x32.png",  sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "MedHcareSwiss | Premium Medical Tourism in Switzerland & Spain",
    description:
      "Your premium partner in value-based medical healthcare tourism services across Switzerland and Spain. Expert consultation, seamless care, end-to-end support.",
    url: "https://landing.medhcareswiss.com",
    siteName: "MedHcareSwiss",
    type: "website",
    images: [
      {
        url: "https://landing.medhcareswiss.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MedHcareSwiss – Premium Medical Tourism in Switzerland & Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedHcareSwiss | Premium Medical Tourism in Switzerland & Spain",
    description:
      "Your premium partner in value-based medical healthcare tourism services across Switzerland and Spain.",
    images: ["https://landing.medhcareswiss.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${libreBaskerville.variable} ${inter.variable} font-inter text-brand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
