import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {Swim4DreamsCaseStudy} from "@/components/work/Swim4DreamsCaseStudy";

type Props = {params: Promise<{locale: string}>};
const base = "https://alexnicoara.com";
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  if (locale !== "en" && locale !== "ro") notFound();
  const t = await getTranslations({locale, namespace: "Swim4DreamsCaseStudy"});
  const title = t("metaTitle");
  const description = t("metaDescription");
  return {
    title, description,
    alternates: {canonical: `${base}/${locale}/work/swim4dreams`, languages: {
      en: `${base}/en/work/swim4dreams`, ro: `${base}/ro/work/swim4dreams`, "x-default": `${base}/en/work/swim4dreams`,
    }},
    openGraph: {title, description, url: `${base}/${locale}/work/swim4dreams`},
    twitter: {title, description},
  };
}
export default async function Page({params}: Props) {
  const {locale} = await params;
  if (locale !== "en" && locale !== "ro") notFound();
  setRequestLocale(locale);
  return <Swim4DreamsCaseStudy />;
}
