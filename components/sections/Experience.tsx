import {useTranslations} from "next-intl";

import {Badge} from "@/components/ui/Badge";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export function Experience() {
  const t = useTranslations("Experience");

  const milestones = [
    {
      id: "security",
      year: t("security.year"),
      title: t("security.title"),
      description: t("security.description"),
    },
    {
      id: "builder",
      year: t("builder.year"),
      title: t("builder.title"),
      description: t("builder.description"),
    },
    {
      id: "endurance",
      year: t("endurance.year"),
      title: t("endurance.title"),
      description: t("endurance.description"),
    },
    {
      id: "ai",
      year: t("ai.year"),
      title: t("ai.title"),
      description: t("ai.description"),
    },
  ];

  return (
    <Section>
      <Container>

        <div className="mb-16">
          <Badge>
            {t("badge")}
          </Badge>

          <h2
            className="
              mt-6
              max-w-4xl
              text-3xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            {t("headline1")}
            <br />
            {t("headline2")}
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
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
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          {milestones.map((item) => (
            <div
              key={item.id}
              className="
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
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400/80
                "
              >
                {item.year}
              </p>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-white/60
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}