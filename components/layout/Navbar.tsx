"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {Menu, X} from "lucide-react";

import {Container} from "@/components/ui/Container";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const nextLocale = locale === "en" ? "ro" : "en";

  const closeMenu = () => {
    setIsOpen(false);
  };

  const languageLabel =
    nextLocale === "ro"
      ? t("switchToRomanian")
      : t("switchToEnglish");

  const desktopLinkClassName = `
    rounded-sm
    transition
    hover:text-white
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--brand-cyan)]
    focus-visible:ring-offset-4
    focus-visible:ring-offset-[#05080b]
  `;

  const languageLinkClassName = `
    rounded-full
    border
    border-white/10
    text-xs
    uppercase
    tracking-widest
    transition
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--brand-cyan)]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#05080b]
  `;

  const mobileLinkClassName = `
    border-b
    border-white/[0.06]
    py-4
    text-lg
    font-medium
    text-white/70
    transition
    hover:text-white
    focus-visible:outline-none
    focus-visible:text-[var(--brand-cyan)]
  `;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-[#05080b]/85
        backdrop-blur-xl
      "
    >
      <Container>
        <nav
          aria-label={t("navigationLabel")}
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          {/* BRAND */}
          <Link
            href={`/${locale}`}
            onClick={closeMenu}
            className="
              group
              flex
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
                border-[rgba(0,240,248,0.22)]
                bg-black
                shadow-[0_0_18px_rgba(0,240,248,0.08)]
                transition
                duration-300
                group-hover:border-[rgba(0,240,248,0.45)]
                group-hover:shadow-[0_0_24px_rgba(0,240,248,0.15)]
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

          {/* DESKTOP NAVIGATION */}
          <div
            className="
              hidden
              items-center
              gap-8
              text-sm
              text-white/70
              md:flex
            "
          >
            <Link
              href={`/${locale}#projects`}
              className={desktopLinkClassName}
            >
              {t("projects")}
            </Link>

            <Link
              href={`/${locale}#services`}
              className={desktopLinkClassName}
            >
              {t("services")}
            </Link>

            <Link
              href={`/${locale}#about`}
              className={desktopLinkClassName}
            >
              {t("about")}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className={desktopLinkClassName}
            >
              {t("contact")}
            </Link>

            <Link
              href={`/${nextLocale}`}
              aria-label={languageLabel}
              className={`
                ${languageLinkClassName}
                px-4
                py-2
                text-white/70
                hover:border-[rgba(0,240,248,0.40)]
                hover:text-[var(--brand-cyan)]
              `}
            >
              {nextLocale.toUpperCase()}
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href={`/${nextLocale}`}
              onClick={closeMenu}
              aria-label={languageLabel}
              className={`
                ${languageLinkClassName}
                px-3
                py-2
                text-white/60
                hover:text-white
              `}
            >
              {nextLocale.toUpperCase()}
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={
                isOpen
                  ? t("closeMenu")
                  : t("openMenu")
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white
                transition
                hover:border-[rgba(0,240,248,0.28)]
                hover:bg-white/[0.05]
                hover:text-[var(--brand-cyan)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--brand-cyan)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#05080b]
              "
            >
              {isOpen ? (
                <X size={20} strokeWidth={1.8} />
              ) : (
                <Menu size={20} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            w-full
            border-b
            border-white/10
            bg-[#05080b]/95
            backdrop-blur-xl
            md:hidden
          "
        >
          <Container>
            <nav
              id="mobile-navigation"
              aria-label={t("navigationLabel")}
              className="
                flex
                flex-col
                py-6
              "
            >
              <Link
                href={`/${locale}#projects`}
                onClick={closeMenu}
                className={mobileLinkClassName}
              >
                {t("projects")}
              </Link>

              <Link
                href={`/${locale}#services`}
                onClick={closeMenu}
                className={mobileLinkClassName}
              >
                {t("services")}
              </Link>

              <Link
                href={`/${locale}#about`}
                onClick={closeMenu}
                className={mobileLinkClassName}
              >
                {t("about")}
              </Link>

              <Link
                href={`/${locale}#contact`}
                onClick={closeMenu}
                className="
                  py-4
                  text-lg
                  font-medium
                  text-white/70
                  transition
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:text-[var(--brand-cyan)]
                "
              >
                {t("contact")}
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}