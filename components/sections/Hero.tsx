"use client";

import {motion, useReducedMotion} from "framer-motion";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

import {Badge} from "@/components/ui/Badge";
import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {Section} from "@/components/ui/Section";

export function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section>
      <Container>
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            xl:grid-cols-2
            xl:gap-16
          "
        >
          {/* LEFT SIDE - CONTENT */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {opacity: 0, y: 20}
            }
            animate={{opacity: 1, y: 0}}
            transition={
              shouldReduceMotion
                ? {duration: 0}
                : {duration: 0.6}
            }
          >
            <Badge>
              {t("studio")}
            </Badge>

            <h1
              className="
                mt-6
                max-w-4xl
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-[44px]
                xl:text-6xl
              "
            >
              {t("headline1")}
              <br />

              {t("headline2")}
              <br />

              {t("headline3")}
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-relaxed
                text-white/60
                sm:text-lg
              "
            >
              {t("description")}
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                items-start
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              <Button href={`/${locale}#contact`}>
                {t("primaryCta")}
              </Button>

              <Button href={`/${locale}#projects`}>
                {t("secondaryCta")}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>
                {t("role1")}
              </Badge>

              <Badge>
                {t("role2")}
              </Badge>

              <Badge>
                {t("role3")}
              </Badge>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-semibold text-white">
                  {t("yearsValue")}
                </p>

                <p className="text-xs text-white/40">
                  {t("yearsLabel")}
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  {t("enduranceValue")}
                </p>

                <p className="text-xs text-white/40">
                  {t("enduranceLabel")}
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  {t("productsValue")}
                </p>

                <p className="text-xs text-white/40">
                  {t("productsLabel")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {opacity: 0, scale: 0.95}
            }
            animate={{opacity: 1, scale: 1}}
            transition={
              shouldReduceMotion
                ? {duration: 0}
                : {duration: 0.8}
            }
            className="relative"
          >
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black
              "
            >
              <Image
                src="/alex_hero.jpeg"
                alt={t("imageAlt")}
                fill
                priority
                className="scale-105 object-cover object-[center_40%]"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-2
                  text-sm
                  text-white
                  backdrop-blur
                "
              >
                {t("imageBadge")}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}