import {Container} from "@/components/ui/Container";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--brand-cyan)]">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-sm text-white/40">
            {lastUpdated}
          </p>

          <p className="mt-8 text-base leading-8 text-white/65">
            {intro}
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-8 text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.items && (
                  <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-white/60">
                    {section.items.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}