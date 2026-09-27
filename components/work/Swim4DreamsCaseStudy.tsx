import Link from "next/link";
import {getLocale, getTranslations} from "next-intl/server";
import {Container} from "@/components/ui/Container";

const heading = "text-3xl font-semibold tracking-tight text-white sm:text-4xl";
const section = "border-b border-white/10 py-12 sm:py-16";
const linkStyle = "inline-flex border-b border-[var(--brand-cyan)]/50 pb-2 text-sm text-[var(--brand-cyan)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]";

export async function Swim4DreamsCaseStudy() {
  const t = await getTranslations("Swim4DreamsCaseStudy");
  const locale = await getLocale();
  const schema = {
    "@context": "https://schema.org", "@type": "CreativeWork",
    name: t("metaTitle"), description: t("metaDescription"), inLanguage: locale,
    url: `https://alexnicoara.com/${locale}/work/swim4dreams`,
    author: {"@type": "Person", name: "Alex Nicoară", url: "https://alexnicoara.com"},
  };
  return (
    <Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, "\\u003c")}} />
      <article>
        <header className="border-b border-white/10 py-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand-cyan)]">{t("eyebrow")}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">{t("title")}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{t("intro")}</p>
          <dl className="my-10 grid grid-cols-2 gap-6 border-y border-white/10 py-6 lg:grid-cols-4">
            {["role", "system", "stack", "status"].map((key) => (
              <div key={key}><dt className="font-mono text-xs uppercase text-white/40">{t(`facts.${key}`)}</dt>
                <dd className="mt-2 text-sm text-white/80">{key === "stack" ? "Next.js · Supabase · Stripe · Vercel" : t(`facts.${key}Value`)}</dd></div>
            ))}
          </dl>
          <a href="https://72ore-swim4dreams.ro" target="_blank" rel="noopener noreferrer" className={linkStyle}>{t("visit")}</a>
        </header>

        <section className={section}>
          <h2 className={heading}>{t("challengeTitle")}</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/65">{t("challengeBody")}</p>
        </section>

        <section className={section}>
          <h2 className={heading}>{t("constraintsTitle")}</h2>
          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {["deadline", "payments", "rules", "review", "languages", "production"].map((key, i) => (
              <div key={key} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-white/10 pt-4">
                <span aria-hidden="true" className="font-mono text-sm text-[var(--brand-cyan)]">0{i+1}</span>
                <div><h3 className="font-medium text-white">{t(`constraints.${key}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-white/55">{t(`constraints.${key}.body`)}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className={section}>
          <h2 className={heading}>{t("systemTitle")}</h2>
          <ol className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {["races", "cart", "checkout", "registration", "participants", "admin"].map((key, i) => (
              <li key={key} className="min-w-0 border-l-2 border-[var(--brand-cyan)]/35 bg-white/[0.02] p-4">
                <span aria-hidden="true" className="font-mono text-xs text-white/40">0{i+1} →</span>
                <p className="mt-2 break-words text-sm font-medium text-white/90">{t(`flow.${key}`)}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 border-l-2 border-white/15 pl-4 text-sm leading-relaxed text-white/55">{t("branches")}</p>
          <h3 className="mt-10 text-xl font-medium text-white">{t("architectureTitle")}</h3>
          <dl className="mt-6 grid gap-5 md:grid-cols-2">
            {["public", "logic", "data", "payments", "operations", "delivery"].map((key) => (
              <div key={key} className="border-t border-white/10 pt-4"><dt className="text-sm font-medium text-white/85">{t(`layers.${key}.title`)}</dt><dd className="mt-2 text-sm leading-relaxed text-white/55">{t(`layers.${key}.body`)}</dd></div>
            ))}
          </dl>
        </section>

        <section className={section}>
          <h2 className={heading}>{t("executionTitle")}</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-white/60">{t("executionIntro")}</p>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {["before", "during", "after"].map((key, i) => (
              <li key={key} className="border-t border-[var(--brand-cyan)]/40 pt-4"><span aria-hidden="true" className="font-mono text-3xl text-white/20">0{i+1}</span><h3 className="mt-3 font-medium text-white">{t(`execution.${key}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-white/55">{t(`execution.${key}.body`)}</p></li>
            ))}
          </ol>
        </section>

        <section className={section}>
          <h2 className={heading}>{t("resultTitle")}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">{t("resultBody")}</p>
        </section>

        <section className={section}>
          <h2 className={heading}>{t("proofTitle")}</h2>
          <dl className="mt-8 divide-y divide-white/10">
            {["product", "payment", "admin", "iteration", "security"].map((key) => (
              <div key={key} className="grid gap-2 py-4 md:grid-cols-[1fr_2fr]"><dt className="font-medium text-white/85">{t(`proof.${key}.title`)}</dt><dd className="text-sm leading-relaxed text-white/55">{t(`proof.${key}.body`)}</dd></div>
            ))}
          </dl>
        </section>

        <footer className="py-16 sm:py-20">
          <h2 className={`${heading} max-w-3xl`}>{t("finalTitle")}</h2>
          <p className="mt-5 text-white/60">{t("finalBody")}</p>
          <Link href={`/${locale}#contact`} className={`${linkStyle} mt-8`}>{t("cta")}</Link>
        </footer>
      </article>
    </Container>
  );
}
