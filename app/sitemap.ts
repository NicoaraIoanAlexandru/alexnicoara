import type {MetadataRoute} from "next";

const baseUrl = "https://alexnicoara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${baseUrl}/en`,
    ro: `${baseUrl}/ro`,
  };

  return [
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