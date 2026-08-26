import {useTranslations} from "next-intl";

import {Badge} from "@/components/ui/Badge";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export function Services() {
  const t = useTranslations("Services");

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
      id: "delivery",
      title: t("delivery.title"),
      description: t("delivery.description"),
      tags: [
        t("delivery.tag1"),
        t("delivery.tag2"),
        t("delivery.tag3"),
      ],
    },
  ];

  return (
    <Section>
      <Container>
        <div
          id="services"
          className="scroll-mt-24"
        >
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

          <div
            className="
              mt-12
              grid
              gap-6
              lg:grid-cols-3
            "
          >
            {services.map((service) => (
              <div
                key={service.id}
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

                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {service.tags.map((tag) => (
                    <Badge key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}