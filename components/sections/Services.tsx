import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "AI Product Development",
    description:
      "Building intelligent digital products using AI workflows, automation and modern software architecture.",
    tags: [
      "AI Integration",
      "Automation",
      "Product Architecture",
    ],
  },
  {
    title: "Cybersecurity Engineering",
    description:
      "Designing and securing enterprise environments with modern networking, cloud and security practices.",
    tags: [
      "Network Security",
      "Cloud Security",
      "Security Architecture",
    ],
  },
  {
    title: "Digital Product Delivery",
    description:
      "Transforming ideas into production-ready platforms with scalable architecture and reliable deployment.",
    tags: [
      "Full-stack Development",
      "Next.js",
      "Cloud Deployment",
    ],
  },
];

export function Services() {
  return (
    <Section>
      <Container>

        <div>

          <Badge>
            Services
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
            Building secure products
            <br />
            from idea to production.
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
            I help businesses transform ideas into secure,
            scalable digital solutions by combining AI,
            engineering and cybersecurity expertise.
          </p>


          <div
            className="
              mt-12
              grid
              gap-6
              lg:grid-cols-3
            "
          >

            {services.map((service) => (
              <div
                key={service.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
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


                <div
                  className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {service.tags.map((tag) => (
                    <Badge key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>


              </div>
            ))}


          </div>


        </div>


      </Container>
    </Section>
  );
}