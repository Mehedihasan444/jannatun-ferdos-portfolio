import { Section, SectionHeading } from "@/components/ui/section";
import { MedalIcon } from "@/components/ui/icons";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading index="05" eyebrow="Achievements" title={achievements.title} />

      <ul className="mt-12">
        {achievements.entries.map((entry, index) => (
          <li
            key={entry.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-9 sm:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_88%_10%,var(--accent-soft)_0%,transparent_60%)] opacity-70"
            />

            <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/50 bg-accent/10 px-3.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-accent">
                    {entry.year}
                  </span>
                  <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
                    Poster Presentation
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-[clamp(1.5rem,3vw,2.125rem)] font-medium leading-[1.18] tracking-[-0.015em]">
                  {entry.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.75] text-muted">
                  Organized by {entry.organizer}
                </p>
              </div>

              <div className="flex items-center gap-5 border-t border-border pt-7 lg:flex-col lg:items-end lg:gap-3 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0 lg:text-right">
                <MedalIcon className="size-10 shrink-0 text-accent" />
                <div>
                  <p className="font-serif text-[1.5rem] font-medium leading-tight text-primary">
                    {entry.position}
                  </p>
                  <p className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                    Award &amp; Achievement
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
