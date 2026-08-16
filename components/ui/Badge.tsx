export function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-xs
        font-medium
        uppercase
        tracking-wider
        text-white/70
        backdrop-blur
      "
    >
      {children}
    </span>
  );
}