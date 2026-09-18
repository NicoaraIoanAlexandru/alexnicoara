import {useTranslations} from "next-intl";

import {Badge} from "@/components/ui/Badge";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";
import {ProjectVideo} from "@/components/sections/ProjectVideo";

export function FeaturedProjects() {
  const t = useTranslations("FeaturedProjects");

  return (
    <Section>
      <Container>
        <div
          id="projects"
          className="scroll-mt-24"
        >
          <div className="max-w-3xl">
            <Badge>
              {t("badge")}
            </Badge>

            <h2
              className="
                mt-6
                text-3xl
                font-semibold
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              {t("title")}
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              {t("description")}
            </p>
          </div>

          <div
            className="
              mt-12
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              hover:shadow-[0_0_32px_rgba(0,240,248,0.07)]
              p-6
              sm:p-8
              lg:p-12
            "
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">

              {/* PROJECT CONTENT */}
              <div>
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.35em]
                    text-[var(--brand-cyan)]/80
                  "
                >
                  {t("caseStudy")}
                </p>

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-semibold
                    text-white
                    sm:text-3xl
                  "
                >
                  <a
                    href="https://72ore-swim4dreams.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      transition
                      hover:text-[var(--brand-cyan)]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--brand-cyan)]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#050505]
                    "
                  >
                    {t("projectTitle")}
                  </a>
                </h3>

                <p
                  className="
                    mt-6
                    text-base
                    leading-relaxed
                    text-white/60
                    sm:text-lg
                  "
                >
                  {t("projectDescription1")}
                </p>

                <p
                  className="
                    mt-4
                    text-base
                    leading-relaxed
                    text-white/60
                    sm:text-lg
                  "
                >
                  {t("projectDescription2")}
                </p>

                <div className="mt-8 space-y-3 text-white/70">
                  <p>✓ {t("feature1")}</p>
                  <p>✓ {t("feature2")}</p>
                  <p>✓ {t("feature3")}</p>
                  <p>✓ {t("feature4")}</p>
                  <p>✓ {t("feature5")}</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Supabase</Badge>
                  <Badge>Stripe</Badge>
                  <Badge>Vercel</Badge>
                </div>

                <a
                  href="https://72ore-swim4dreams.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    text-sm
                    font-medium
                    text-[var(--brand-cyan)]
                    transition
                    hover:text-[var(--brand-cyan-soft)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--brand-cyan)]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#050505]
                  "
                >
                  {t("visitPlatform")}
                </a>
              </div>

              {/* PROJECT VIDEO */}
              <ProjectVideo badgeLabel={t("mobileFirst")} />

            </div>
          </div>

          {/* SECONDARY PROOF CARD */}
          <div
            className="
              mt-6
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
              sm:p-8
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              {t("secondaryEyebrow")}
            </p>

            <h3
              className="
                mt-3
                text-xl
                font-semibold
                text-white
              "
            >
              {t("secondaryTitle")}
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-relaxed
                text-white/60
              "
            >
              {t("secondaryDescription")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge>Next.js 16</Badge>
              <Badge>Supabase</Badge>
              <Badge>Stripe</Badge>
              <Badge>TypeScript</Badge>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}