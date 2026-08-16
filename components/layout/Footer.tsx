import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
      "
    >
      <Container>

        <div
          className="
            flex
            flex-col
            gap-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <p
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Alex Nicoară
            </p>


            <p
              className="
                mt-2
                text-sm
                text-white/40
              "
            >
              AI Product Developer · Cybersecurity Engineer · Digital Builder
            </p>

          </div>



          <div
            className="
              flex
              gap-6
              text-sm
              text-white/50
            "
          >

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>


            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>


            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

          </div>

        </div>



        <div
          className="
            mt-8
            border-t
            border-white/10
            pt-6
            text-sm
            text-white/30
          "
        >
          © {new Date().getFullYear()} Alex Nicoară. All rights reserved.
        </div>


      </Container>
    </footer>
  );
}