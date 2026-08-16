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
  title:
    "Alex Nicoară | AI Product Developer & Cybersecurity Engineer",

  description:
    "Alex Nicoară builds secure digital products combining artificial intelligence, cybersecurity engineering and modern software architecture.",

  keywords: [
    "AI Product Developer",
    "Cybersecurity Engineer",
    "Digital Product Development",
    "AI Solutions",
    "Cybersecurity Consulting",
    "Next.js Developer",
    "Secure Software Architecture",
    "Cloud Security",
    "Network Security",
  ],

  authors: [
    {
      name: "Alex Nicoară",
    },
  ],

  creator: "Alex Nicoară",

  metadataBase: new URL(
    "https://alexnicoara.com"
  ),

  openGraph: {
    title:
      "Alex Nicoară | AI Product Developer & Cybersecurity Engineer",

    description:
      "Building secure digital products with AI, modern engineering and cybersecurity expertise.",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Alex Nicoară | AI Product Developer & Cybersecurity Engineer",

    description:
      "Building secure digital products with AI, modern engineering and cybersecurity expertise.",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}