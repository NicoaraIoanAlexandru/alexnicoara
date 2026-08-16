import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const milestones = [
  {
    year: "10+ YEARS",
    title: "Enterprise Security Engineering",
    description:
      "Designing and securing enterprise environments through network security, cloud infrastructure and modern security practices.",
  },
  {
    year: "2026",
    title: "Digital Product Builder",
    description:
      "Building complete digital platforms from concept to production, including architecture, development, payments and administration workflows.",
  },
  {
    year: "72 HOURS",
    title: "Endurance Engineering",
    description:
      "A real-world endurance project combining discipline, resilience and execution under extreme physical and mental conditions.",
  },
  {
    year: "TODAY",
    title: "AI-Powered Product Development",
    description:
      "Creating secure digital products by combining artificial intelligence, modern engineering and practical business execution.",
  },
];

export function Experience() {
  return (
    <Section>
      <Container>

        <div className="mb-16">
          <Badge>
            Experience
          </Badge>

          <h2
            className="
              mt-6
              max-w-4xl
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Engineering experience.
            <br />
            Real-world execution.
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
            A journey built across enterprise security, digital products
            and endurance challenges.
          </p>
        </div>


        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {milestones.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                hover:bg-white/[0.05]
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400/80
                "
              >
                {item.year}
              </p>


              <h3
                className="
                  mt-5
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  mt-4
                  leading-relaxed
                  text-white/60
                "
              >
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}