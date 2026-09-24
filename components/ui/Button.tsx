"use client";

import type {MouseEventHandler, ReactNode} from "react";
import Link from "next/link";

import {handleHashLinkClick} from "@/lib/scrollToHash";

type ButtonProps = {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  href,
  children,
  onClick,
}: ButtonProps) {
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
    hover:bg-[var(--brand-cyan)]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--brand-cyan)]
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
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        handleHashLinkClick(event, href);
      }}
      className={className}
    >
      {children}
    </Link>
  );
}