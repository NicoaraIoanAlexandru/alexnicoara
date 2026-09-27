import type {Metadata, ResolvingMetadata} from "next";
import {notFound} from "next/navigation";

import {AIProductDevelopmentPage} from "@/components/services/AIProductDevelopmentPage";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(
  {params}: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {locale} = await params;
  const parentMetadata = await parent;
  const isRomanian = locale === "ro";
  const title = isRomanian ? "AI Product Development | Alex Nicoară" : "AI Product Development | Alex Nicoară";
  const description = isRomanian
    ? "Transformă idei, procese și oportunități de business în produse AI sigure și pregătite pentru producție."
    : "Turn business ideas, operational problems and workflows into secure, production-ready AI products.";
  const baseUrl = "https://alexnicoara.com";
  const path = "/services/ai-product-development";
  const url = `${baseUrl}/${isRomanian ? "ro" : "en"}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        ro: `${baseUrl}/ro${path}`,
        "x-default": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      images: parentMetadata.openGraph?.images,
      title,
      description,
      url,
      type: "website",
      locale: isRomanian ? "ro_RO" : "en_US",
      alternateLocale: isRomanian ? ["en_US"] : ["ro_RO"],
    },
    twitter: {
      images: parentMetadata.twitter?.images,
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({params}: PageProps) {
  const {locale} = await params;

  if (locale !== "en" && locale !== "ro") {
    notFound();
  }

  return <AIProductDevelopmentPage />;
}