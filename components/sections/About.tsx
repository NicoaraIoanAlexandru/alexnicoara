import {useTranslations} from "next-intl";

import {Badge} from "@/components/ui/Badge";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export function About() {
  const t = useTranslations("About");

  return (
    <Section>
      <Container>
        <div
          id="about"
          className="scroll-mt-24"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div>
              <Badge>
                {t("badge")}
              </Badge>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-5xl
                "
              >
                {t("headline1")}
                <br />
                {t("headline2")}
                <br />
                {t("headline3")}
              </h2>
            </div>

            <div>
              <p
                className="
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                {t("paragraph1")}
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                {t("paragraph2")}
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                {t("paragraph3")}
              </p>

              <div
                className="
                  mt-10
                  grid
                  grid-cols-3
                  gap-6
                "
              >

                <div>
                  <p className="text-3xl font-semibold text-white">
                    {t("yearsValue")}
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    {t("yearsLabel")}
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    {t("enduranceValue")}
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    {t("enduranceLabel")}
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    {t("productsValue")}
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    {t("productsLabel")}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}