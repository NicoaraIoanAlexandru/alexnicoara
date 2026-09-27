import Link from "next/link";
import {getLocale, getTranslations} from "next-intl/server";
import {Container} from "@/components/ui/Container";
import {getProfilePath} from "@/lib/profile";

const heading = "text-3xl font-semibold tracking-tight text-white sm:text-4xl";
const linkStyle = "inline-flex rounded-sm text-sm text-[var(--brand-cyan)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]";
const sectionStyle = "grid gap-6 border-t border-white/10 py-12 sm:py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16";

export async function FounderProfile() {
  const t = await getTranslations("FounderProfile");
  const locale = await getLocale();
  const aiHref = `/${locale}/services/ai-product-development`;
  const securityHref = `/${locale}/services/cybersecurity-consulting`;
  const schema = {
    "@context": "https://schema.org", "@type": "ProfilePage",
    url: `https://alexnicoara.com${getProfilePath(locale)}`, inLanguage: locale,
    mainEntity: {
      "@type": "Person", "@id": "https://alexnicoara.com/#person",
      name: "Alex Nicoară", alternateName: "Alex Nicoara",
      url: "https://alexnicoara.com",
      jobTitle: "AI Product Developer · Cybersecurity Engineer · Digital Builder",
      description: t("metaDescription"),
      sameAs: ["https://www.linkedin.com/in/nicoara-ioan-alexandru-44a59978/"],
    },
  };
  return (
    <Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, "\\u003c")}} />
      <article>
        <header className="py-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand-cyan)]">{t("eyebrow")}</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl">{t("name")}</h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">{t("title")}</p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--brand-cyan)]">{t("descriptor")}</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">{t("intro")}</p>
        </header>

        <section className={sectionStyle}>
          <h2 className={heading}>{t("storyTitle")}</h2>
          <div className="space-y-5 leading-relaxed text-white/65">
            <p>{t("story1")}</p><p>{t("story2")}</p><p>{t("story3")}</p>
          </div>
        </section>

        <section className={sectionStyle}>
          <h2 className={heading}>{t("pathsTitle")}</h2>
          <div>
            <div className="border-l-2 border-[var(--brand-cyan)] pl-6">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">{t("aiTitle")}</h3>
              <p className="mt-4 leading-relaxed text-white/65">{t("aiBody")}</p>
              <Link href={aiHref} className={`${linkStyle} mt-5`}>{t("aiCta")}</Link>
            </div>
            <div className="mt-10 border-l border-white/20 pl-6">
              <h3 className="text-xl font-medium text-white">{t("securityTitle")}</h3>
              <p className="mt-4 leading-relaxed text-white/55">{t("securityBody")}</p>
              <Link href={securityHref} className={`${linkStyle} mt-5`}>{t("securityCta")}</Link>
            </div>
          </div>
        </section>

        <section className={sectionStyle}>
          <h2 className={heading}>{t("workTitle")}</h2>
          <div>
            <h3 className="text-xl font-medium text-white">Swim4Dreams</h3>
            <p className="mt-3 leading-relaxed text-white/60">{t("swimBody")}</p>
            <Link href={`/${locale}/work/swim4dreams`} className={`${linkStyle} mt-5`}>{t("caseCta")}</Link>
            <h3 className="mt-10 text-xl font-medium text-white">MarilenaFitCoach</h3>
            <p className="mt-3 leading-relaxed text-white/60">{t("marilenaBody")}</p>
          </div>
        </section>

        <section className={sectionStyle}>
          <h2 className={heading}>{t("principlesTitle")}</h2>
          <dl className="divide-y divide-white/10">
            {["production", "security", "complexity", "outcomes", "iteration"].map((key) => (
              <div key={key} className="py-4 first:pt-0"><dt className="text-lg font-medium text-white/85">{t(`principles.${key}.title`)}</dt><dd className="mt-2 text-sm leading-relaxed text-white/55">{t(`principles.${key}.body`)}</dd></div>
            ))}
          </dl>
        </section>

        <section className={sectionStyle}>
          <h2 className={heading}>{t("enduranceTitle")}</h2>
          <p className="leading-relaxed text-white/65">{t("enduranceBody")}</p>
        </section>

        <section className={sectionStyle}>
          <h2 className={heading}>{t("focusTitle")}</h2>
          <p className="leading-relaxed text-white/65">{t("focusBody")}</p>
        </section>

        <footer className="border-t border-white/10 py-16 sm:py-20">
          <h2 className={`${heading} max-w-3xl`}>{t("finalTitle")}</h2>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
            <Link href={aiHref} className={linkStyle}>{t("aiDiscuss")}</Link>
            <Link href={securityHref} className={linkStyle}>{t("securityDiscuss")}</Link>
          </div>
        </footer>
      </article>
    </Container>
  );
}
