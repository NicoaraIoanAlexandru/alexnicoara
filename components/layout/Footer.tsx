import Image from "next/image";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const footerLinkClassName = `
    rounded-sm
    transition
    hover:text-[var(--brand-cyan)]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--brand-cyan)]
    focus-visible:ring-offset-4
    focus-visible:ring-offset-[#05080b]
  `;

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#05080b]/70
      "
    >
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
          {/* BRAND */}
          <div>
            <Link
              href={`/${locale}`}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--brand-cyan)]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#05080b]
              "
            >
              <span
                className="
                  relative
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[rgba(0,240,248,0.18)]
                  bg-black
                  shadow-[0_0_18px_rgba(0,240,248,0.06)]
                  transition
                  duration-300
                  group-hover:border-[rgba(0,240,248,0.38)]
                  group-hover:shadow-[0_0_24px_rgba(0,240,248,0.12)]
                "
              >
                <Image
                  src="/alex-logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </span>

              <span
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                  text-white
                  transition
                  group-hover:text-[var(--brand-cyan)]
                "
              >
                Alex Nicoară
              </span>
            </Link>

            <p
              className="
                mt-3
                max-w-md
                text-sm
                leading-relaxed
                text-white/40
              "
            >
              {t("descriptor")}
            </p>
          </div>

          {/* FOOTER NAVIGATION */}
          <nav
            aria-label="Footer navigation"
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
              className={footerLinkClassName}
            >
              {t("projects")}
            </Link>

            <Link
              href={`/${locale}#services`}
              className={footerLinkClassName}
            >
              {t("services")}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className={footerLinkClassName}
            >
              {t("contact")}
            </Link>
          </nav>
        </div>

        {/* COPYRIGHT */}
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