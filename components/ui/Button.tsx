import Link from "next/link";

export function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
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
      "
    >
      {children}
    </Link>
  );
}