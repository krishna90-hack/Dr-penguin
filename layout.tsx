import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Penguin – Best CCTV Installation & Security Company in India",
  description: "Dr. Penguin offers advanced CCTV surveillance, smart monitoring, and professional security solutions for homes, shops, offices, and industries across India. 24/7 support, certified engineers, pan-India service.",
  keywords: "CCTV installation, security cameras, surveillance systems, home security, office security, India, Hikvision, Dahua, CP Plus, smart monitoring",
  authors: [{ name: "Dr. Penguin" }],
  creator: "Dr. Penguin",
  metadataBase: new URL("https://drpenguin.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drpenguin.in",
    siteName: "Dr. Penguin – CCTV & Security",
    title: "Dr. Penguin – Best CCTV Installation & Security Company in India",
    description: "Advanced CCTV surveillance and security solutions for homes, shops, offices, and industries across India. 24/7 support with certified engineers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Penguin CCTV & Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Penguin – Best CCTV Installation & Security Company in India",
    description: "Advanced CCTV surveillance and security solutions across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
