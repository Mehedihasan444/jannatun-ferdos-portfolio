"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { LeafSprig, SpecimenRule } from "@/components/ui/botanical";
import { hero, site } from "@/data/portfolio";

export function HeroPortrait() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * 34;
      node.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-none">
      <div
        ref={frameRef}
        className="relative aspect-4/5 w-full overflow-hidden bg-surface-sunk [border-radius:57%_43%_46%_54%/46%_52%_48%_54%] [transform:translate3d(0,var(--parallax,0px),0)]"
      >
        <Image
          src={site.portrait.src}
          alt={site.portrait.alt}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) calc((100vw - 3rem) * 1.1), (max-width: 1023px) calc(26rem * 1.1), calc(28rem * 1.1)"
          className="scale-110 object-cover object-[center_16%]"
        />
        <div
          aria-hidden="true"
          className="grain absolute inset-0 opacity-[0.08] mix-blend-multiply dark:opacity-[0.14] dark:mix-blend-overlay"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[3.5rem] border border-accent/40 sm:-inset-5"
      />

      <LeafSprig className="pointer-events-none absolute -right-7 -top-6 h-44 w-28 animate-drift text-primary opacity-25 sm:-right-10 sm:h-56 sm:w-36" />

      <SpecimenRule className="pointer-events-none absolute -left-4 bottom-24 hidden h-8 w-32 text-primary opacity-25 lg:block" />

      <div className="absolute -bottom-4 left-0 z-10 rounded-2xl border border-border bg-surface/95 px-5 py-4 shadow-[0_20px_44px_-30px_rgba(18,42,30,0.55)] backdrop-blur-sm sm:-left-5 sm:bottom-8">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          <p className="font-serif text-[0.9375rem] font-medium leading-tight">
            {hero.meta.title}
          </p>
        </div>
        <p className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
          {hero.meta.detail}
        </p>
      </div>
    </div>
  );
}
