import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";

import {CybersecurityConsultingPage} from "@/components/services/CybersecurityConsultingPage";

type PageProps = {params: Promise<{locale: string}>};
const baseUrl = "https://alexnicoara.com";
const path = "/services/cybersecurity-consulting";

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale} = await params;
  if (locale !== "en" && locale !== "ro") notFound();
  const t = await getTranslations({locale, namespace: "CybersecurityConsulting"});
  const title = t("metaTitle");
  const description = t("metaDescription");
  const url = `${baseUrl}/${locale}${path}`;
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
    openGraph: {title, description, url},
    twitter: {title, description},
  };
}

export default async function Page({params}: PageProps) {
  const {locale} = await params;
  if (locale !== "en" && locale !== "ro") notFound();
  setRequestLocale(locale);
  return <CybersecurityConsultingPage />;
}
