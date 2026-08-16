import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section>
      <Container>

        <div className="grid gap-16 lg:grid-cols-2 items-center">


          <div>

            <Badge>
              Background
            </Badge>


            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              Engineering mindset.
              <br />
              Builder mentality.
              <br />
              Endurance discipline.
            </h2>


          </div>


          <div>

            <p
              className="
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              I am a cybersecurity engineer and digital product builder
              focused on creating secure, scalable solutions.
            </p>


            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              My work combines enterprise security, AI-driven development
              and real-world product execution — from secure infrastructure
              to complete digital platforms.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              Beyond technology, I apply the same discipline from endurance
              sports to building systems that require resilience, reliability
              and long-term thinking.
            </p>

            <div
              className="
                mt-10
                grid
                grid-cols-3
                gap-6
              "
            >

              <div>
                <p className="text-3xl font-semibold text-white">
                  10+
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Years Engineering
                </p>
              </div>


              <div>
                <p className="text-3xl font-semibold text-white">
                  72h
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Endurance Project
                </p>
              </div>


              <div>
                <p className="text-3xl font-semibold text-white">
                  3+
                </p>

                <p className="mt-2 text-sm text-white/40">
                  Digital Products
                </p>
              </div>


            </div>


          </div>


        </div>


      </Container>
    </Section>
  );
}