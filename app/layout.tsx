import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// app/page.tsx

export const metadata: Metadata = {
  title: "Roogle - The Reddit-Powered Search Engine",
  description: "Tired of corporate SEO results? Discover the raw, unfiltered truth from Reddit with Roogle – powered by AI and Reddit's authenticity.",
  keywords: "Roogle, Reddit search, alternative search engine, authentic search results, Reddit-powered search, AI search engine",
  openGraph: {
    title: "Roogle - The Reddit-Powered Search Engine",
    description: "Find the internet's truth through Reddit posts with Roogle – AI-enhanced, crowd-sourced search results.",
    url: "https://roogle.vercel.app",
    siteName: "Roogle",
    images: [
      {
        url: "./favicon-32x32.png",
        width: 800,
        height: 600,
        alt: "Roogle - Reddit-Powered Search Engine",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roogle - The Reddit-Powered Search Engine",
    description: "Get unfiltered, crowd-sourced Reddit search results with Roogle.",
    images: "./favicon-32x32.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
