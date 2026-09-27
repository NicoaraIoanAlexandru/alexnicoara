import Link from "next/link";
import {getLocale, getTranslations} from "next-intl/server";

import {Container} from "@/components/ui/Container";

const linkStyle = "inline-flex rounded-sm border border-white/20 px-5 py-3 text-sm text-white transition hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]";
const headingStyle = "text-3xl font-semibold tracking-tight text-white sm:text-4xl";

export async function CybersecurityConsultingPage() {
  const t = await getTranslations("CybersecurityConsulting");
  const locale = await getLocale();
  const contactHref = `/${locale}#contact`;

  return (
    <Container>
      <section className="border-b border-white/10 py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand-cyan)]">{t("eyebrow")}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">{t("title")}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">{t("intro")}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={contactHref} className={linkStyle}>{t("primary")}</Link>
          <a href="#environment-review" className={linkStyle}>{t("secondary")}</a>
        </div>
      </section>

      <section id="environment-review" className="scroll-mt-24 border-b border-white/10 py-14 sm:py-20">
        <h2 className={headingStyle}>{t("riskTitle")}</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-white/60">{t("riskIntro")}</p>
        <div className="mt-10 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10">
          <div className="hidden grid-cols-[1fr_auto_1.5fr] gap-6 py-3 font-mono text-xs uppercase tracking-widest text-white/45 md:grid">
            <span>{t("riskLabel")}</span><span aria-hidden="true">→</span><span>{t("controlLabel")}</span>
          </div>
          {["policy", "paths", "access", "cloud", "change"].map((key) => (
            <div key={key} className="grid gap-3 py-5 md:grid-cols-[1fr_auto_1.5fr] md:gap-6">
              <h3 className="font-medium text-white">{t(`risks.${key}.title`)}</h3>
              <span aria-hidden="true" className="hidden text-[var(--brand-cyan)] md:block">→</span>
              <p className="text-sm leading-relaxed text-white/60">{t(`risks.${key}.control`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 py-14 sm:py-20">
        <h2 className={`${headingStyle} max-w-3xl`}>{t("helpTitle")}</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {["architecture", "controls", "hardening", "operations"].map((key) => (
            <article key={key} className="border-l border-[var(--brand-cyan)]/30 pl-5">
              <h3 className="text-xl font-medium text-white">{t(`areas.${key}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-white/60">{t(`areas.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 py-14 sm:py-20">
        <h2 className={`${headingStyle} max-w-3xl`}>{t("flowTitle")}</h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {["assess", "design", "validate", "implement", "verify"].map((key, index) => (
            <li key={key} className="border-t border-[var(--brand-cyan)]/35 pt-4">
              <span aria-hidden="true" className="font-mono text-xs text-[var(--brand-cyan)]">0{index + 1} →</span>
              <h3 className="mt-2 font-mono text-sm uppercase text-white">{t(`steps.${key}.title`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{t(`steps.${key}.body`)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-14 sm:py-20 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className={headingStyle}>{t("enterpriseTitle")}</h2>
          <p className="mt-5 leading-relaxed text-white/60">{t("enterpriseBody")}</p>
        </div>
        <aside className="border-l border-white/15 pl-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-white/50">{t("proofLabel")}</h3>
          <p className="mt-4 text-5xl font-semibold text-white">{t("proofValue")}</p>
          <p className="mt-2 text-sm text-[var(--brand-cyan)]">{t("proofUnit")}</p>
          <p className="mt-5 text-sm leading-relaxed text-white/60">{t("proofBody")}</p>
        </aside>
      </section>

      <section className="border-b border-white/10 py-14 sm:py-20">
        <h2 className={headingStyle}>{t("fitTitle")}</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-white/65">{t("fitBody")}</p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/45">{t("notFit")}</p>
      </section>

      <section className="border-b border-white/10 py-14 sm:py-20">
        <h2 className={headingStyle}>{t("faqTitle")}</h2>
        <div className="mt-8 divide-y divide-white/10">
          {["team", "production", "review", "delivery"].map((key) => (
            <details key={key} className="group py-5">
              <summary className="cursor-pointer text-lg text-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]">{t(`faq.${key}.question`)}</summary>
              <p className="mt-4 max-w-3xl leading-relaxed text-white/60">{t(`faq.${key}.answer`)}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <h2 className={`${headingStyle} max-w-3xl`}>{t("finalTitle")}</h2>
        <p className="mt-5 text-white/60">{t("finalBody")}</p>
        <Link href={contactHref} className={`${linkStyle} mt-8`}>{t("primary")}</Link>
      </section>
    </Container>
  );
}
