"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>
              Alex Nicoară Studio
            </Badge>

            <h1
              className="
                mt-6
                max-w-4xl
                text-5xl
                font-semibold
                leading-tight
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-6xl
              "
            >
              Building digital products.
              <br />
              Securing systems.
              <br />
              Challenging limits.
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              I help businesses transform ideas into secure digital products
              using AI, modern engineering and enterprise-grade technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a Project →
              </Button>

              <Button href="/projects">
                Explore My Work →
              </Button>
            </div>


            <div className="mt-10 flex flex-wrap gap-3">
              <Badge>
                AI Product Developer
              </Badge>

              <Badge>
                Cybersecurity Engineer
              </Badge>

              <Badge>
                Digital Builder
              </Badge>
            </div>


            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-semibold text-white">
                  10+
                </p>
                <p className="text-xs text-white/40">
                  Years Engineering
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  72h
                </p>
                <p className="text-xs text-white/40">
                  Endurance Project
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  3+
                </p>
                <p className="text-xs text-white/40">
                  Digital Products
                </p>
              </div>
            </div>

          </motion.div>


          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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
                alt="Alex Nicoară"
                fill
                priority
                className="object-cover object-[center_40%] scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
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
                AI · Security · Endurance
              </div>

            </div>

          </motion.div>

        </div>
      </Container>
    </Section>
  );
}