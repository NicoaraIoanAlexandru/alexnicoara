import type {MetadataRoute} from "next";

const baseUrl = "https://alexnicoara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${baseUrl}/en`,
    ro: `${baseUrl}/ro`,
  };

  return [
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