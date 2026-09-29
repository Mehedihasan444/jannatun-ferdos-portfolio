"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SeedPodMark } from "@/components/ui/botanical";
import { ActionLink } from "@/components/ui/action-link";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/ui/icons";
import { navigation, site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      setScrolled(window.scrollY > 16);

      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = navigation[0].id;

      for (const item of navigation) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) current = item.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = navigation[navigation.length - 1].id;

      setActive(current);
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-editorial",
        scrolled
          ? "border-b border-border/70 bg-[var(--nav-surface)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[76rem] items-center justify-between gap-4 px-6 sm:h-[4.5rem] sm:px-8 lg:px-10">
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} — back to top`}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border-strong/80 text-primary transition-colors duration-300 group-hover:border-primary/60">
            <SeedPodMark className="size-[1.05rem]" />
          </span>
          <span className="font-serif text-[1.0625rem] font-medium tracking-[-0.01em] sm:text-lg">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-x-5 xl:gap-x-7">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-300 hover:text-foreground xl:text-sm",
                      isActive ? "text-foreground" : "text-muted",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-editorial",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <ActionLink
            href={site.cv.href}
            download={site.cv.fileName}
            className="hidden sm:inline-flex"
          >
            <DownloadIcon className="size-4" />
            {site.cv.label}
          </ActionLink>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-border-strong/80 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary sm:size-11 lg:hidden"
              >
                <MenuIcon className="size-5" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/25 backdrop-blur-[3px] data-[state=open]:animate-fade" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(21rem,86vw)] flex-col border-l border-border bg-background px-6 py-5 shadow-2xl data-[state=open]:animate-slide-in">
                <div className="flex items-center justify-between gap-4">
                  <Dialog.Title className="font-serif text-lg font-medium">
                    {site.name}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="grid size-10 place-items-center rounded-full border border-border-strong/80 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      <CloseIcon className="size-[1.15rem]" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav aria-label="Mobile" className="mt-8 flex-1 overflow-y-auto">
                  <ul className="space-y-1">
                    {navigation.map((item) => {
                      const isActive = active === item.id;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={() => setMenuOpen(false)}
                            aria-current={isActive ? "true" : undefined}
                            className={cn(
                              "flex min-h-11 items-center justify-between rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium transition-colors duration-300",
                              isActive
                                ? "bg-surface-sunk text-foreground"
                                : "text-muted hover:bg-surface-sunk/60 hover:text-foreground",
                            )}
                          >
                            {item.label}
                            {isActive ? (
                              <span
                                aria-hidden="true"
                                className="size-1.5 rounded-full bg-accent"
                              />
                            ) : null}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <ActionLink
                  href={site.cv.href}
                  download={site.cv.fileName}
                  size="lg"
                  className="mt-6 w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <DownloadIcon className="size-4" />
                  {site.cv.label}
                </ActionLink>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
