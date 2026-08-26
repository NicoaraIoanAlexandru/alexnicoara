import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export function WhatIBuild() {
  const t = useTranslations("WhatIBuild");

  const services = [
    {
      id: "ai",
      title: t("ai.title"),
      description: t("ai.description"),
      tags: [
        t("ai.tag1"),
        t("ai.tag2"),
        t("ai.tag3"),
      ],
    },
    {
      id: "security",
      title: t("security.title"),
      description: t("security.description"),
      tags: [
        t("security.tag1"),
        t("security.tag2"),
        t("security.tag3"),
      ],
    },
    {
      id: "platforms",
      title: t("platforms.title"),
      description: t("platforms.description"),
      tags: [
        t("platforms.tag1"),
        t("platforms.tag2"),
        t("platforms.tag3"),
      ],
    },
  ];

  return (
    <Section>
      <Container>

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            {t("eyebrow")}
          </p>

          <h2
            className="
              mt-4
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
            sm:mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="
                group
                rounded-3xl
                border
                border-[rgba(0,240,248,0.14)]
                bg-white/[0.03]
                p-6
                shadow-[0_0_24px_rgba(0,240,248,0.035)]
                transition
                duration-300
                hover:border-[rgba(0,240,248,0.30)]
                hover:bg-white/[0.05]
                hover:shadow-[0_0_32px_rgba(0,240,248,0.07)]
                sm:p-8
              "
            >
              <h3
                className="
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-relaxed
                  text-white/60
                "
              >
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      text-white/50
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}