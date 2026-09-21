export function Textarea({
  className,
  ...props
}: React.ComponentPropsWithRef<"textarea">) {
  return (
    <textarea
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
        placeholder:text-white/40
        transition
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--brand-cyan)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
        ${className ?? ""}
      `}
    />
  );
}
