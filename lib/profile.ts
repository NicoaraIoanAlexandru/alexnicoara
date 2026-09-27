export const profilePaths = {
  en: "/en/about/alex-nicoara",
  ro: "/ro/despre/alex-nicoara",
} as const;

export function getProfilePath(locale: string) {
  return locale === "ro" ? profilePaths.ro : profilePaths.en;
}

export const PERSON_ID = "https://alexnicoara.com/#person";

export const personIdentity = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Alex Nicoară",
  alternateName: "Alex Nicoara",
  url: "https://alexnicoara.com",
  jobTitle: "AI Product Developer · Cybersecurity Engineer · Digital Builder",
  sameAs: ["https://www.linkedin.com/in/nicoara-ioan-alexandru-44a59978/"],
} as const;
