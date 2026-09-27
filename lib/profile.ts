export const profilePaths = {
  en: "/en/about/alex-nicoara",
  ro: "/ro/despre/alex-nicoara",
} as const;

export function getProfilePath(locale: string) {
  return locale === "ro" ? profilePaths.ro : profilePaths.en;
}
