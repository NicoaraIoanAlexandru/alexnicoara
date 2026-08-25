export function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      {children}
    </section>
  );
}