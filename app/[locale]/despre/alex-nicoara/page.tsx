import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {FounderProfile} from "@/components/about/FounderProfile";
import {getProfilePath, profilePaths} from "@/lib/profile";

type Props = {params: Promise<{locale: string}>};
const pageLocale = "ro";
const base = "https://alexnicoara.com";

export function generateStaticParams() {
  return [{locale: pageLocale}];
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  if (locale !== pageLocale) notFound();
  const t = await getTranslations({locale, namespace: "FounderProfile"});
  const title = t("metaTitle");
  const description = t("metaDescription");
  const url = `${base}${getProfilePath(locale)}`;
  return {
    title, description,
    alternates: {canonical: url, languages: {
      en: `${base}${profilePaths.en}`, ro: `${base}${profilePaths.ro}`,
      "x-default": `${base}${profilePaths.en}`,
    }},
    openGraph: {title, description, url},
    twitter: {title, description},
  };
}

export default async function Page({params}: Props) {
  const {locale} = await params;
  if (locale !== pageLocale) notFound();
  setRequestLocale(locale);
  return <FounderProfile />;
}
