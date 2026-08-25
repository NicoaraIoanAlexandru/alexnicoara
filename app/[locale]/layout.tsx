import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

import {Footer} from "@/components/layout/Footer";
import {Navbar} from "@/components/layout/Navbar";
import {routing} from "@/i18n/routing";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://alexnicoara.com";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!routing.locales.includes(locale as "en" | "ro")) {
    return {};
  }

  const isRomanian = locale === "ro";

  const title = isRomanian
    ? "Alex Nicoară | AI Product Developer & Inginer Cybersecurity"
    : "Alex Nicoară | AI Product Developer & Cybersecurity Engineer";

  const description = isRomanian
    ? "Construiesc produse digitale sigure combinând inteligența artificială, ingineria software modernă și securitatea cibernetică."
    : "Alex Nicoară builds secure digital products combining artificial intelligence, cybersecurity engineering and modern software architecture.";

  const ogDescription = isRomanian
    ? "Produse digitale sigure construite cu AI, inginerie modernă și expertiză în securitate cibernetică."
    : "Building secure digital products with AI, modern engineering and cybersecurity expertise.";

  return {
    metadataBase: new URL(siteUrl),

    title,

    description,

    keywords: isRomanian
      ? [
          "Alex Nicoară",
          "AI Product Developer",
          "Cybersecurity Engineer",
          "Dezvoltare Produse Digitale",
          "Soluții AI",
          "Consultanță Cybersecurity",
          "Next.js Developer",
          "Arhitectură Software",
          "Cloud Security",
          "Network Security",
        ]
      : [
          "Alex Nicoară",
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

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ro: "/ro",
        "x-default": "/en",
      },
    },

    openGraph: {
      title,
      description: ogDescription,
      url: `/${locale}`,
      siteName: "Alex Nicoară",
      type: "website",
      locale: isRomanian ? "ro_RO" : "en_US",
      alternateLocale: isRomanian ? ["en_US"] : ["ro_RO"],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as "en" | "ro")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}