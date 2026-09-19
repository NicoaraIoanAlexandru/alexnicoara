import {useTranslations} from "next-intl";

import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <Section>
      <Container>
        <div
          id="contact"
          className="
            scroll-mt-24
            rounded-3xl
            border
            border-[rgba(0,240,248,0.14)]
            bg-white/[0.03]
            shadow-[0_0_24px_rgba(0,240,248,0.035)]
            p-8
            text-center
            sm:p-12
            lg:p-16
          "
        >
          <Badge>
            {t("badge")}
          </Badge>

          <h2
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t("headline1")}
            <br />
            {t("headline2")}
          </h2>

          <p
            className="
              mx-auto
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
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <Button href="mailto:nicoara.ioan.alexandru@gmail.com">
              {t("conversation")}
            </Button>

            <Button href="https://www.linkedin.com/in/nicoara-ioan-alexandru-44a59978/">
              {t("linkedin")}
            </Button>
          </div>

          <div
            className="
              mx-auto
              mt-12
              max-w-2xl
              border-t
              border-white/10
              pt-8
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/50
              "
            >
              {t("emailLabel")}
            </p>

            <a
              href="mailto:nicoara.ioan.alexandru@gmail.com"
              className="
                mt-3
                block
                text-[12px]
                text-white/70
                transition
                hover:text-[var(--brand-cyan)]
                min-[360px]:text-sm
                sm:text-base
              "
            >
              nicoara.ioan.alexandru@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}