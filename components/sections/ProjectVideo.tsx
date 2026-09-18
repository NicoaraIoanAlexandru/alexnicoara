"use client";

import Image from "next/image";
import {useReducedMotion} from "framer-motion";

export function ProjectVideo({
  badgeLabel,
}: {
  badgeLabel: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="
        relative
        flex
        h-[520px]
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-black
        sm:h-[600px]
      "
    >
      {shouldReduceMotion ? (
        <Image
          src="/swim4dreams_poster.jpg"
          alt=""
          fill
          className="object-contain"
        />
      ) : (
        <video
          src="/swim4dreams_video.mp4"
          poster="/swim4dreams_poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
            h-full
            w-auto
            object-contain
          "
        />
      )}

      <div
        className="
          absolute
          bottom-4
          left-4
          rounded-full
          border
          border-white/10
          bg-black/60
          px-4
          py-2
          text-xs
          uppercase
          tracking-[0.15em]
          text-white/70
          backdrop-blur
        "
      >
        {badgeLabel}
      </div>
    </div>
  );
}
