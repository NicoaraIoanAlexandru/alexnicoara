import Link from "next/link";

export function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  const isMail = href.startsWith("mailto:");

  const className = `
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white
    px-6
    py-3
    text-sm
    font-medium
    text-black
    transition
    hover:bg-cyan-400
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-cyan-400
    focus-visible:ring-offset-2
    focus-visible:ring-offset-black
  `;

  if (isExternal || isMail) {
    return (
      <a
        href={href}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}