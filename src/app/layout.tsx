import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XXVI — Private Luxury Jewelry",
  description:
    "Private jewelry, diamond timepieces, custom pieces, and showroom appointments in Accra.",
  openGraph: {
    title: "XXVI — Private Luxury Jewelry",
    description:
      "Private jewelry, diamond timepieces, custom pieces, and showroom appointments in Accra.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "XXVI private luxury jewelry vault.",
      },
    ],
    siteName: "XXVI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XXVI — Private Luxury Jewelry",
    description:
      "Private jewelry, diamond timepieces, custom pieces, and showroom appointments in Accra.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
