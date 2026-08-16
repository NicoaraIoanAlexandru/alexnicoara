import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section>
      <Container>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            text-center
            sm:p-12
            lg:p-16
          "
        >

          <Badge>
            Start a Project
          </Badge>


          <h2
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Let's build secure
              <br />
              digital products.
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            I help teams build AI-powered solutions,
              secure platforms and scalable digital products.
            Available for selected projects and collaborations.
          </p>


          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >

            <Button href="mailto:nicoara.ioan.alexandru@gmail.com">
              Start a Conversation →
            </Button>


            <Button href="https://www.linkedin.com/in/nicoara-ioan-alexandru-44a59978/">
              Connect on LinkedIn →
            </Button>

          </div>


        </div>

      </Container>
    </Section>
  );
}