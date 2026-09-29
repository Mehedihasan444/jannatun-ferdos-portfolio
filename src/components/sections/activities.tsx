import { Section, SectionHeading } from "@/components/ui/section";
import { activities } from "@/data/portfolio";

export function Activities() {
  return (
    <Section id="activities" className="bg-surface-sunk/45">
      <SectionHeading
        index="06"
        eyebrow="Community"
        title={activities.title}
        description="Involvement with organisations outside the academic programme."
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {activities.entries.map((entry, index) => (
          <li
            key={entry.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` }}
            className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-colors duration-500 hover:border-border-strong sm:p-9"
          >
            <span className="w-fit rounded-full bg-primary/10 px-3.5 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-primary">
              {entry.role}
            </span>

            <h3 className="mt-5 font-serif text-[1.3125rem] font-medium leading-[1.3] tracking-[-0.01em] sm:text-[1.4375rem]">
              {entry.title}
            </h3>

            {entry.institution ? (
              <p className="mt-2.5 text-[0.8125rem] leading-[1.7] text-muted">
                {entry.institution}
              </p>
            ) : null}

            <p className="mt-4 text-[0.9375rem] leading-[1.78] text-muted">
              {entry.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
