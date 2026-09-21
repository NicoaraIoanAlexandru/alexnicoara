export function Select({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<"select">) {
  return (
    <select
      {...props}
      className={`
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        px-4
        py-3
        text-sm
        text-white
        transition
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--brand-cyan)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
        ${className ?? ""}
      `}
    >
      {children}
    </select>
  );
}
