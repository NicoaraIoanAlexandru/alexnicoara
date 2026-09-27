import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {AIProductDevelopmentPage} from "@/components/services/AIProductDevelopmentPage";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {locale} = await params;

  if (locale === "ro") {
    return {
      title: "AI Product Development | Alex Nicoară",
      description:
        "Transformă idei, procese și oportunități de business în produse AI sigure și pregătite pentru producție.",
      alternates: {
        canonical:
          "https://alexnicoara.com/ro/services/ai-product-development",
        languages: {
          en: "https://alexnicoara.com/en/services/ai-product-development",
          ro: "https://alexnicoara.com/ro/services/ai-product-development",
          "x-default":
            "https://alexnicoara.com/en/services/ai-product-development",
        },
      },
    };
  }

  return {
    title: "AI Product Development | Alex Nicoară",
    description:
      "Turn business ideas, operational problems and workflows into secure, production-ready AI products.",
    alternates: {
      canonical:
        "https://alexnicoara.com/en/services/ai-product-development",
      languages: {
        en: "https://alexnicoara.com/en/services/ai-product-development",
        ro: "https://alexnicoara.com/ro/services/ai-product-development",
        "x-default":
          "https://alexnicoara.com/en/services/ai-product-development",
      },
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