"use client";

import {useState} from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const problemKeys = [
  "manual",
  "systems",
  "ideas",
  "existing",
] as const;

const processKeys = [
  "discover",
  "design",
  "build",
  "launch",
  "improve",
] as const;

const faqKeys = [
  "specification",
  "team",
  "afterLaunch",
] as const;

type ProblemKey = (typeof problemKeys)[number];

const problemVisuals: Record<
  ProblemKey,
  {
    left: string;
    middle: string;
    right: string;
  }
> = {
  manual: {
    left: "MANUAL INPUT",
    middle: "AI WORKFLOW",
    right: "REVIEW + ACTION",
  },
  systems: {
    left: "TOOLS + DATA",
    middle: "INTELLIGENCE LAYER",
    right: "CONNECTED OPS",
  },
  ideas: {
    left: "IDEA",
    middle: "VALIDATION + DESIGN",
    right: "MVP",
  },
  existing: {
    left: "EXISTING PRODUCT",
    middle: "AI CAPABILITY",
    right: "NEW VALUE",
  },
};

export function AIProductDevelopmentPage() {
  const t = useTranslations("AIProductDevelopment");
  const locale = useLocale();

  const [activeProblem, setActiveProblem] =
    useState<ProblemKey>("manual");

  const contactHref = `/${locale}#contact`;

  const activeVisual = problemVisuals[activeProblem];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,248,0.10),transparent_42%)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.18]
            [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <Container>
          <div className="relative mx-auto max-w-6xl py-24 sm:py-28 lg:py-32">
            <div className="max-w-5xl">
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[var(--brand-cyan)]
                "
              >
                {t("hero.eyebrow")}
              </p>

              <h1
                className="
                  mt-7
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                  lg:text-[5.6rem]
                  lg:leading-[0.98]
                "
              >
                {t("hero.title")}
              </h1>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-8
                  text-white/65
                  sm:text-xl
                "
              >
                {t("hero.description")}
              </p>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-white/40
                  sm:text-base
                "
              >
                {t("hero.supporting")}
              </p>

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <Link
                  href="#discovery"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition
                    hover:bg-[var(--brand-cyan)]
                  "
                >
                  {t("hero.primaryCta")}
                </Link>

                <Link
                  href={contactHref}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white/75
                    transition
                    hover:border-[var(--brand-cyan)]
                    hover:text-white
                  "
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
            </div>

            <div
              className="
                mt-16
                flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.26em]
                text-white/25
              "
            >
              <span>Discovery</span>
              <span className="h-px w-8 bg-white/15" />
              <span>Architecture</span>
              <span className="h-px w-8 bg-white/15" />
              <span>Build</span>
              <span className="h-px w-8 bg-white/15" />
              <span>Launch</span>
            </div>
          </div>
        </Container>
      </section>

      {/* INTERACTIVE PROBLEM INDEX */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[var(--brand-cyan)]
                "
              >
                {t("problems.eyebrow")}
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                "
              >
                {t("problems.title")}
              </h2>

              <p className="mt-6 text-base leading-8 text-white/50">
                {t("problems.description")}
              </p>
            </div>

            <div
              className="
                mt-16
                grid
                gap-12
                lg:grid-cols-[0.8fr_1.2fr]
                lg:items-stretch
              "
            >
              {/* INDEX */}
              <div className="border-y border-white/10">
                {problemKeys.map((key, index) => {
                  const active = key === activeProblem;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveProblem(key)}
                      onMouseEnter={() => setActiveProblem(key)}
                      className={`
                        group
                        grid
                        w-full
                        grid-cols-[48px_1fr_auto]
                        items-center
                        gap-4
                        border-b
                        border-white/10
                        py-6
                        text-left
                        transition
                        last:border-b-0
                        ${
                          active
                            ? "text-white"
                            : "text-white/40 hover:text-white/75"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-xs
                          tracking-[0.22em]
                          ${
                            active
                              ? "text-[var(--brand-cyan)]"
                              : "text-white/20"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          text-lg
                          font-medium
                          sm:text-xl
                        "
                      >
                        {t(`problems.items.${key}.title`)}
                      </span>

                      <span
                        className={`
                          text-lg
                          transition
                          ${
                            active
                              ? "translate-x-0 text-[var(--brand-cyan)]"
                              : "-translate-x-2 text-white/20 group-hover:translate-x-0"
                          }
                        `}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE VISUAL */}
              <div
                className="
                  relative
                  min-h-[360px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-[#071116]
                  p-7
                  sm:p-10
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-25
                    [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                    [background-size:40px_40px]
                  "
                />

                <div className="relative flex h-full flex-col">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      text-white/30
                    "
                  >
                    ACTIVE SYSTEM
                  </p>

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {t(`problems.items.${activeProblem}.title`)}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    {t(`problems.items.${activeProblem}.description`)}
                  </p>

                  <div
                    className="
                      mt-auto
                      grid
                      gap-3
                      pt-12
                      sm:grid-cols-[1fr_auto_1fr_auto_1fr]
                      sm:items-center
                    "
                  >
                    <SystemNode label={activeVisual.left} />

                    <SystemArrow />

                    <SystemNode
                      label={activeVisual.middle}
                      accent
                    />

                    <SystemArrow />

                    <SystemNode label={activeVisual.right} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DISCOVERY PRODUCT */}
      <section
        id="discovery"
        className="
          relative
          overflow-hidden
          border-y
          border-white/10
          bg-white/[0.015]
          py-24
          sm:py-32
        "
      >
        <Container>
          <div
            className="
              mx-auto
              grid
              max-w-6xl
              gap-16
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[var(--brand-cyan)]
                "
              >
                {t("discovery.eyebrow")}
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                "
              >
                {t("discovery.title")}
              </h2>

              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  border-y
                  border-white/10
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.24em]
                  text-white/45
                "
              >
                <span className="text-[var(--brand-cyan)]">
                  5–7 DAYS
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span>Focused engagement</span>
              </div>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/65
                "
              >
                {t("discovery.subtitle")}
              </p>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/45
                "
              >
                {t("discovery.description")}
              </p>

              <Link
                href={contactHref}
                className="
                  mt-8
                  inline-flex
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-[var(--brand-cyan)]
                "
              >
                {t("discovery.cta")}
              </Link>
            </div>

            <div
              className="
                relative
                border-l
                border-white/10
                pl-8
                sm:pl-10
              "
            >
              <DiscoveryStep
                number="01"
                label={t(
                  "discovery.deliverables.businessDiscovery"
                )}
              />

              <DiscoveryStep
                number="02"
                label={t(
                  "discovery.deliverables.useCaseValidation"
                )}
              />

              <DiscoveryStep
                number="03"
                label={t(
                  "discovery.deliverables.architecture"
                )}
              />

              <DiscoveryStep
                number="04"
                label={t(
                  "discovery.deliverables.scope"
                )}
              />

              <div
                className="
                  mt-8
                  border-t
                  border-[rgba(0,240,248,0.25)]
                  pt-8
                "
              >
                <p
                  className="
                    max-w-lg
                    text-xl
                    font-medium
                    leading-8
                    text-white
                  "
                >
                  {t("discovery.result")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS LINE */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[var(--brand-cyan)]
                "
              >
                {t("process.eyebrow")}
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.035em]
                  text-white
                  sm:text-5xl
                "
              >
                {t("process.title")}
              </h2>
            </div>

            <div
              className="
                relative
                mt-16
                grid
                gap-10
                md:grid-cols-5
                md:gap-0
              "
            >
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-[22px]
                  hidden
                  h-px
                  bg-white/10
                  md:block
                "
              />

              {processKeys.map((key, index) => (
                <div
                  key={key}
                  className="
                    relative
                    md:px-5
                    md:first:pl-0
                    md:last:pr-0
                  "
                >
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[rgba(0,240,248,0.28)]
                      bg-[#05080b]
                      text-xs
                      font-medium
                      text-[var(--brand-cyan)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3
                    className="
                      mt-6
                      text-lg
                      font-medium
                      text-white
                    "
                  >
                    {t(`process.steps.${key}.title`)}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-white/45
                    "
                  >
                    {t(`process.steps.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ENGINEERING + SECURITY */}
      <section
        className="
          border-y
          border-white/10
          bg-[#071116]
          py-24
          sm:py-32
        "
      >
        <Container>
          <div
            className="
              mx-auto
              grid
              max-w-6xl
              gap-16
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-center
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[var(--brand-cyan)]
                "
              >
                {t("security.eyebrow")}
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                "
              >
                {t("security.title")}
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-white/55
                "
              >
                {t("security.description")}
              </p>

              <p
                className="
                  mt-8
                  max-w-xl
                  border-l
                  border-[var(--brand-cyan)]
                  pl-5
                  text-lg
                  leading-8
                  text-white
                "
              >
                {t("build.callout")}
              </p>
            </div>

            <ArchitectureDiagram />
          </div>
        </Container>
      </section>

      {/* SELECTED WORK */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-[var(--brand-cyan)]
              "
            >
              {t("proof.eyebrow")}
            </p>

            <h2
              className="
                mt-4
                max-w-4xl
                text-3xl
                font-semibold
                tracking-[-0.035em]
                text-white
                sm:text-5xl
              "
            >
              {t("proof.title")}
            </h2>

            <div className="mt-14 border-y border-white/10">
              <ProjectRow
                number="01"
                title="Swim4Dreams"
                href={`/${locale}/work/swim4dreams`}
                description={t("proof.swim4dreams")}
                meta="Registrations / Payments / Operations / Results"
              />

              <ProjectRow
                number="02"
                title="MarilenaFitCoach"
                description={t("proof.marilena")}
                meta="Clients / Training / Nutrition / Payments"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="
          border-t
          border-white/10
          py-24
          sm:py-28
        "
      >
        <Container>
          <div
            className="
              mx-auto
              grid
              max-w-6xl
              gap-12
              lg:grid-cols-[0.6fr_1.4fr]
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[var(--brand-cyan)]
                "
              >
                FAQ
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                {t("faq.title")}
              </h2>
            </div>

            <div className="border-y border-white/10">
              {faqKeys.map((key) => (
                <div
                  key={key}
                  className="
                    border-b
                    border-white/10
                    py-7
                    last:border-b-0
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-medium
                      text-white
                    "
                  >
                    {t(`faq.items.${key}.question`)}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-2xl
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    {t(`faq.items.${key}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/10
          py-28
          sm:py-36
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_100%,rgba(0,240,248,0.08),transparent_45%)]
          "
        />

        <Container>
          <div className="relative mx-auto max-w-6xl">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.28em]
                text-[var(--brand-cyan)]
              "
            >
              NEXT
            </p>

            <h2
              className="
                mt-5
                max-w-5xl
                text-4xl
                font-semibold
                uppercase
                tracking-[-0.045em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              {t("finalCta.title")}
            </h2>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-white/50
              "
            >
              {t("finalCta.description")}
            </p>

            <Link
              href={contactHref}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                text-base
                font-medium
                text-white
                transition
                hover:text-[var(--brand-cyan)]
              "
            >
              {t("finalCta.primary")}

              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function SystemNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`
        flex
        min-h-20
        items-center
        justify-center
        border
        px-4
        text-center
        text-[10px]
        font-medium
        uppercase
        tracking-[0.18em]
        ${
          accent
            ? "border-[rgba(0,240,248,0.35)] bg-[rgba(0,240,248,0.05)] text-[var(--brand-cyan)]"
            : "border-white/10 bg-black/20 text-white/45"
        }
      `}
    >
      {label}
    </div>
  );
}

function SystemArrow() {
  return (
    <>
      <div
        className="
          hidden
          items-center
          text-white/20
          sm:flex
        "
      >
        →
      </div>

      <div
        className="
          flex
          justify-center
          text-white/20
          sm:hidden
        "
      >
        ↓
      </div>
    </>
  );
}

function DiscoveryStep({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[48px_1fr]
        gap-4
        border-b
        border-white/10
        py-5
        first:pt-0
      "
    >
      <span
        className="
          text-xs
          font-medium
          tracking-[0.18em]
          text-[var(--brand-cyan)]
        "
      >
        {number}
      </span>

      <span
        className="
          text-base
          text-white/65
        "
      >
        {label}
      </span>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div
      className="
        relative
        overflow-hidden
        border
        border-white/10
        bg-black/20
        p-6
        sm:p-8
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-25
          [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:36px_36px]
        "
      />

      <div className="relative">
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-5
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-white/30
            "
          >
            PRODUCT ARCHITECTURE
          </span>

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[var(--brand-cyan)]
              shadow-[0_0_14px_rgba(0,240,248,0.65)]
            "
          />
        </div>

        {/* MOBILE */}
        <div className="mt-8 space-y-4 sm:hidden">
          <ArchitectureNode
            label="USER / CLIENT"
            muted
          />

          <Connector />

          <ArchitectureGroup
            title="PRODUCT LAYER"
            items={["UI", "ADMIN", "AUTH"]}
          />

          <Connector />

          <ArchitectureGroup
            title="CORE SYSTEM"
            items={["AI / LLM", "DATA", "APIs"]}
            accent
          />

          <Connector />

          <ArchitectureNode
            label="SECURITY + INFRASTRUCTURE"
            strong
          />
        </div>

        {/* TABLET / DESKTOP */}
        <div className="mt-8 hidden space-y-4 sm:block">
          <ArchitectureNode
            label="USER / CLIENT"
            muted
          />

          <Connector />

          <ArchitectureNode
            label="AUTH + ACCESS CONTROL"
          />

          <Connector />

          <div className="grid gap-3 sm:grid-cols-2">
            <ArchitectureNode
              label="PRODUCT UI"
              accent
            />

            <ArchitectureNode
              label="ADMIN / OPS"
            />
          </div>

          <Connector />

          <div className="grid gap-3 sm:grid-cols-3">
            <ArchitectureNode
              label="AI / LLM"
              accent
            />

            <ArchitectureNode
              label="DATA"
            />

            <ArchitectureNode
              label="APIs"
            />
          </div>

          <Connector />

          <ArchitectureNode
            label="SECURITY + INFRASTRUCTURE LAYER"
            strong
          />
        </div>
      </div>
    </div>
  );
}

function ArchitectureNode({
  label,
  accent = false,
  muted = false,
  strong = false,
}: {
  label: string;
  accent?: boolean;
  muted?: boolean;
  strong?: boolean;
}) {
  return (
    <div
      className={`
        border
        px-4
        py-4
        text-center
        text-[10px]
        font-medium
        uppercase
        tracking-[0.18em]
        ${
          strong
            ? "border-[rgba(0,240,248,0.3)] bg-[rgba(0,240,248,0.04)] text-white/75"
            : accent
              ? "border-[rgba(0,240,248,0.28)] text-[var(--brand-cyan)]"
              : muted
                ? "border-white/5 text-white/30"
                : "border-white/10 text-white/50"
        }
      `}
    >
      {label}
    </div>
  );
}

function ArchitectureGroup({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`
        border
        p-4
        ${
          accent
            ? "border-[rgba(0,240,248,0.28)]"
            : "border-white/10"
        }
      `}
    >
      <p
        className={`
          text-center
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          ${
            accent
              ? "text-[var(--brand-cyan)]"
              : "text-white/45"
          }
        `}
      >
        {title}
      </p>

      <div
        className="
          mt-4
          grid
          grid-cols-3
          gap-2
        "
      >
        {items.map((item) => (
          <div
            key={item}
            className="
              border
              border-white/10
              px-2
              py-3
              text-center
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-white/45
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center">
      <div
        className="
          h-5
          w-px
          bg-gradient-to-b
          from-white/5
          to-[var(--brand-cyan)]
          opacity-40
        "
      />
    </div>
  );
}
function ProjectRow({
  number,
  title,
  description,
  meta,
  href,
}: {
  number: string;
  title: string;
  description: string;
  meta: string;
  href?: string;
}) {
  return (
    <article
      className="
        group
        grid
        gap-6
        border-b
        border-white/10
        py-8
        last:border-b-0
        md:grid-cols-[70px_0.7fr_1.3fr]
        md:items-start
        md:py-10
      "
    >
      <span
        className="
          text-xs
          tracking-[0.2em]
          text-[var(--brand-cyan)]
        "
      >
        {number}
      </span>

      <div>
        <h3
          className="
            text-2xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {href ? (
            <Link href={href} className="hover:text-[var(--brand-cyan)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]">{title}</Link>
          ) : title}
        </h3>

        <p
          className="
            mt-2
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/25
          "
        >
          {meta}
        </p>
      </div>

      <p
        className="
          max-w-2xl
          text-sm
          leading-7
          text-white/50
        "
      >
        {description}
      </p>
    </article>
  );
}