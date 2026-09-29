import { HeroPortrait } from "@/components/sections/hero-portrait";
import { ActionLink } from "@/components/ui/action-link";
import { ArrowIcon, DownloadIcon } from "@/components/ui/icons";
import { LeafSprig, WingVein } from "@/components/ui/botanical";
import { hero, site } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      data-section="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_78%_8%,var(--hero-wash)_0%,transparent_58%)]" />
        <div className="hairline-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_75%_60%_at_60%_0%,#000_20%,transparent_75%)]" />
        <div className="grain absolute inset-0 opacity-[0.05] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-overlay" />
        <LeafSprig className="absolute -right-10 top-28 h-80 w-52 animate-drift text-primary opacity-[0.12] sm:-right-6 sm:h-[26rem]" />
        <WingVein className="absolute -left-16 bottom-4 h-44 w-80 text-primary opacity-[0.1] sm:left-4 lg:bottom-10" />
      </div>

      <div className="mx-auto grid max-w-[76rem] items-center gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-7 xl:col-span-7">
          <div data-reveal className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-muted">
              {hero.eyebrow}
            </p>
          </div>

          <h1
            data-reveal
            style={{ "--reveal-delay": "70ms" }}
            className="mt-7 font-serif text-[clamp(2.875rem,7.4vw,5.5rem)] font-medium leading-[0.97] tracking-[-0.028em]"
          >
            <span className="block">{hero.firstName}</span>
            <span className="block italic text-primary">{hero.lastName}</span>
          </h1>

          <div
            data-reveal
            style={{ "--reveal-delay": "140ms" }}
            className="mt-8 flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-14 bg-border-strong" />
            <span
              aria-hidden="true"
              className="size-1.5 rotate-45 bg-accent/80"
            />
          </div>

          <p
            data-reveal
            style={{ "--reveal-delay": "200ms" }}
            className="mt-8 max-w-xl text-[1.0625rem] leading-[1.72] text-foreground/85 sm:text-[1.1875rem]"
          >
            {hero.statement}
          </p>

          <p
            data-reveal
            style={{ "--reveal-delay": "260ms" }}
            className="mt-5 max-w-lg text-[0.9375rem] leading-[1.8] text-muted"
          >
            {hero.support}
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "320ms" }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ActionLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowIcon className="size-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
            </ActionLink>
            <ActionLink
              href={site.cv.href}
              download={site.cv.fileName}
              variant="outline"
              size="lg"
            >
              <DownloadIcon className="size-4" />
              {site.cv.label}
            </ActionLink>
          </div>

          <p
            data-reveal
            style={{ "--reveal-delay": "380ms" }}
            className="mt-9 flex items-center gap-2.5 text-[0.8125rem] text-muted"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Based in {site.location}
          </p>
        </div>

        <div className="lg:col-span-5" data-reveal style={{ "--reveal-delay": "160ms" }}>
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
