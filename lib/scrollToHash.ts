export function scrollToHash(hash: string): boolean {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const target = document.getElementById(id);

  if (!target) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  return true;
}

export function handleHashLinkClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return;
  }

  const hash = href.slice(hashIndex);
  const scrolled = scrollToHash(hash);

  if (!scrolled) {
    return;
  }

  event.preventDefault();
  window.history.pushState(null, "", href);
}
