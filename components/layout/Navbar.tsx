"use client";

import {useState} from "react";
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
    focus-visible:ring-cyan-400
    focus-visible:ring-offset-4
    focus-visible:ring-offset-black
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
    focus-visible:ring-cyan-400
    focus-visible:ring-offset-2
    focus-visible:ring-offset-black
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
    focus-visible:text-cyan-300
  `;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl"
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
              rounded-sm
              text-lg
              font-semibold
              tracking-tight
              text-white
              transition
              hover:text-cyan-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400
              focus-visible:ring-offset-4
              focus-visible:ring-offset-black
            "
          >
            Alex Nicoară
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
                hover:border-cyan-400/40
                hover:text-cyan-300
              `}
            >
              {nextLocale.toUpperCase()}
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-3 md:hidden">
            {/* LANGUAGE */}
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

            {/* HAMBURGER */}
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
                hover:border-white/20
                hover:bg-white/[0.05]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
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
            bg-[#050505]/95
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
                  focus-visible:text-cyan-300
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