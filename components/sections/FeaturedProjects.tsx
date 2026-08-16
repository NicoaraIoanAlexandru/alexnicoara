import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Badge>
            Featured Projects
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
            Digital products built from idea to production.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            Real-world applications combining modern engineering,
            secure architecture and AI-driven workflows.
          </p>
        </div>


        <div
          className="
            mt-16
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            lg:p-12
          "
        >

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">

            <div>

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-cyan-400/80
                "
              >
                Case Study
              </p>


              <h3
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  text-white
                "
              >
                Swim4Dreams Platform
              </h3>


              <p
                className="
                  mt-6
                  text-lg
                 leading-relaxed
                  text-white/60
                "
              >
                A complete digital ecosystem engineered for a
                real-world endurance event.
              </p>


              <p
                className="
                  mt-4
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                Built to manage registrations, secure payments,
                participant workflows, administration and results
                processing from a single ecosystem.
              </p>


              <div className="mt-8 space-y-3 text-white/70">

                <p>✓ Participant registration</p>
                <p>✓ Secure payments</p>
                <p>✓ Admin operations dashboard</p>
                <p>✓ Results & rankings management</p>
                <p>✓ Multilingual experience</p>

              </div>


              <div className="mt-10 flex flex-wrap gap-3">

                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Supabase</Badge>
                <Badge>Stripe</Badge>
                <Badge>Vercel</Badge>

              </div>

            </div>


            <div
              className="
                relative
                flex
                h-[600px]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-black
              "
            >
              <video
                src="/swim4dreams_video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="
                  h-full
                  w-auto
                  object-contain
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-white/70
                  backdrop-blur
                "
              >
                MOBILE-FIRST
              </div>
            </div>


          </div>

        </div>

      </Container>
    </Section>
  );
}