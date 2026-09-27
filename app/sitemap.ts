import type {MetadataRoute} from "next";
import {profilePaths} from "@/lib/profile";

const baseUrl = "https://alexnicoara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${baseUrl}/en`,
    ro: `${baseUrl}/ro`,
  };

  return [
    ...Object.values(profilePaths).map((path) => ({
      url: `${baseUrl}${path}`, changeFrequency: "monthly" as const, priority: 0.8,
      alternates: {languages: {en: `${baseUrl}${profilePaths.en}`, ro: `${baseUrl}${profilePaths.ro}`, "x-default": `${baseUrl}${profilePaths.en}`}},
    })),
    ...(["en", "ro"] as const).map((locale) => ({
      url: `${baseUrl}/${locale}/work/swim4dreams`,
      changeFrequency: "monthly" as const, priority: 0.8,
      alternates: {languages: {en: `${baseUrl}/en/work/swim4dreams`, ro: `${baseUrl}/ro/work/swim4dreams`}},
    })),
    ...(["en", "ro"] as const).map((locale) => ({
      url: `${baseUrl}/${locale}/services/cybersecurity-consulting`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services/cybersecurity-consulting`,
          ro: `${baseUrl}/ro/services/cybersecurity-consulting`,
        },
      },
    })),
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/ro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages,
      },
    },
  ];
}