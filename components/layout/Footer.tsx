import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <Container>
        <div
          className="
            flex
            flex-col
            gap-8
            py-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <Link
              href={`/${locale}`}
              className="
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
            >
              Alex Nicoară
            </Link>

            <p
              className="
                mt-2
                text-sm
                text-white/40
              "
            >
              {t("descriptor")}
            </p>
          </div>

          <nav
            className="
              flex
              flex-wrap
              gap-6
              text-sm
              text-white/60
            "
          >
            <Link
              href={`/${locale}#projects`}
              className="transition hover:text-white"
            >
              {t("projects")}
            </Link>

            <Link
              href={`/${locale}#services`}
              className="transition hover:text-white"
            >
              {t("services")}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className="transition hover:text-white"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>

        <div
          className="
            border-t
            border-white/10
            py-6
            text-xs
            text-white/40
          "
        >
          © {year} Alex Nicoară. {t("rights")}
        </div>
      </Container>
    </footer>
  );
}