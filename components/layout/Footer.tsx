import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Alex Nicoară Studio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}