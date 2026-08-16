import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  return (
    <header className="border-b border-white/10">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            Alex Nicoară
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="/projects" className="transition hover:text-white">
              Projects
            </Link>

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link href="/about" className="transition hover:text-white">
              About
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}