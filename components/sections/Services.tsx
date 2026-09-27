import {getTranslations, getLocale} from "next-intl/server";

import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export async function Services() {
  const t = await getTranslations("Services");
  const locale = await getLocale();

  return (
    <Section>
      <Container>
        <div id="services" className="scroll-mt-24">
          <Badge>{t("badge")}</Badge>
          <h2 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {t("headline1")}<br />{t("headline2")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {t("description")}
          </p>

          <div className="mt-12 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <article>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-cyan)]">{t("ai.eyebrow")}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("ai.title")}</h3>
              <p className="mt-5 max-w-xl leading-relaxed text-white/70">{t("ai.description")}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                {["tag1", "tag2", "tag3"].map((key) => (
                  <li key={key} className="border-l border-[var(--brand-cyan)]/40 pl-4">{t(`ai.${key}`)}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`/${locale}/services/ai-product-development`}>{t("ai.cta")}</Button>
              </div>
            </article>

            <article className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{t("security.eyebrow")}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{t("security.title")}</h3>
              <p className="mt-5 leading-relaxed text-white/60">{t("security.description")}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/50">
                {["tag1", "tag2", "tag3"].map((key) => (
                  <li key={key}>{t(`security.${key}`)}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`/${locale}/services/cybersecurity-consulting`}>{t("security.cta")}</Button>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}
