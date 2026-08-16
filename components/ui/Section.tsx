import { Container } from "./Container";

export function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-24">
      <Container>{children}</Container>
    </section>
  );
}