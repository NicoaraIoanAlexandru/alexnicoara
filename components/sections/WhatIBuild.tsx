import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "AI-Powered Products",
    description:
      "Transforming ideas into intelligent digital products using AI workflows, automation and modern software architecture.",
    tags: [
      "AI Integration",
      "Automation",
      "Product Development",
    ],
  },
  {
    title: "Cybersecurity & Infrastructure",
    description:
      "Designing and securing enterprise environments with modern networking, cloud and security engineering practices.",
    tags: [
      "Network Security",
      "Cloud Security",
      "Enterprise Systems",
    ],
  },
  {
    title: "Digital Platforms",
    description:
      "Building high-performance websites and platforms focused on user experience, reliability and business growth.",
    tags: [
      "Next.js",
      "Modern Web",
      "Scalable Architecture",
    ],
  },
];

export function WhatIBuild() {
  return (
    <Section>
      <Container>

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            What I Build
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Digital products engineered for performance and trust.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            I combine artificial intelligence, cybersecurity and modern
            engineering to create secure digital solutions for ambitious teams
            and businesses.
          </p>
        </div>


        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                duration-300
                hover:border-white/20
                hover:bg-white/[0.06]
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


              <div className="mt-8 flex flex-wrap gap-2">

                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      text-white/50
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}