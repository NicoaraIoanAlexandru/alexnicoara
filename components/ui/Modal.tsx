"use client";

import {useEffect, useId, useRef} from "react";
import {AnimatePresence, motion, useReducedMotion} from "framer-motion";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

function getFocusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) {
    return [];
  }

  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
  ).filter((element) => element.offsetParent !== null);
}

/**
 * Generic, reusable modal primitive. Independent of `Navbar.tsx` — it
 * implements its own Escape-to-close, focus-restore and body-scroll-lock
 * (same technique as the mobile menu) plus a focus trap that keeps Tab /
 * Shift+Tab cycling within the dialog while it is open.
 */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Focus the first focusable element on open, restore focus to the
  // trigger on close.
  useEffect(() => {
    if (!open) {
      return;
    }

    previouslyFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const frame = requestAnimationFrame(() => {
      getFocusableElements(dialogRef.current)[0]?.focus();
    });

    return () => {
      cancelAnimationFrame(frame);
      previouslyFocusedElement.current?.focus();
    };
  }, [open]);

  // Escape-to-close and Tab/Shift+Tab focus trap.
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements(dialogRef.current);

      if (focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0]!;
      const last = focusableElements[focusableElements.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={shouldReduceMotion ? false : {opacity: 0}}
            animate={{opacity: 1}}
            exit={shouldReduceMotion ? undefined : {opacity: 0}}
            transition={
              shouldReduceMotion ? {duration: 0} : {duration: 0.2}
            }
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={
              shouldReduceMotion
                ? false
                : {opacity: 0, scale: 0.96, y: 8}
            }
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={
              shouldReduceMotion
                ? undefined
                : {opacity: 0, scale: 0.96, y: 8}
            }
            transition={
              shouldReduceMotion ? {duration: 0} : {duration: 0.2}
            }
            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              border
              border-[rgba(0,240,248,0.14)]
              bg-[#05080b]
              p-8
              shadow-[0_0_32px_rgba(0,240,248,0.12)]
            "
          >
            <h2
              id={titleId}
              className="text-2xl font-semibold text-white"
            >
              {title}
            </h2>

            <div className="mt-4 text-white/70">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
