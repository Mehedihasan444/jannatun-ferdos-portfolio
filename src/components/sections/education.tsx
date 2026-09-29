import { Section, SectionHeading } from "@/components/ui/section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" className="bg-surface-sunk/45">
      <SectionHeading
        index="02"
        eyebrow="Education"
        title="Academic Journey"
        description="A continuous academic progression through agriculture and entomology."
      />

      <ol className="mt-14 max-w-4xl">
        {education.map((entry, index) => (
          <li
            key={entry.degree}
            data-reveal
            style={{ "--reveal-delay": `${index * 80}ms` }}
            className="grid grid-cols-[2.25rem_1fr] gap-x-4 sm:grid-cols-[3.5rem_1fr] sm:gap-x-7"
          >
            <div className="flex flex-col items-center">
              <span
                aria-hidden="true"
                className="mt-2 size-2.5 shrink-0 rounded-full border border-accent bg-background"
              />
              {index < education.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="mt-1.5 w-px flex-1 bg-border-strong/70"
                />
              ) : null}
            </div>

            <div className="pb-10 sm:pb-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="font-serif text-[1.3125rem] font-medium tracking-[-0.01em] sm:text-[1.5rem]">
                  {entry.degree}
                </h3>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-[0.75rem] font-medium tabular-nums text-muted">
                  {entry.year}
                </span>
              </div>

              <p className="mt-2.5 max-w-2xl text-[0.9375rem] leading-[1.72] text-foreground/75">
                {entry.institution}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-[0.8125rem] font-medium text-primary">
                  {entry.result}
                </span>
                <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                  {entry.stage}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
