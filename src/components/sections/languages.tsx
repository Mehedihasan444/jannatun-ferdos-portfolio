import { Section } from "@/components/ui/section";
import { languages } from "@/data/portfolio";

export function Languages() {
  return (
    <Section id="languages" className="py-14 sm:py-16 lg:py-20">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <h2
          data-reveal
          className="font-serif text-[1.375rem] font-medium tracking-[-0.01em] sm:text-[1.5rem]"
        >
          {languages.title}
        </h2>

        <ul
          data-reveal
          style={{ "--reveal-delay": "90ms" }}
          className="flex flex-wrap gap-3"
        >
          {languages.entries.map((entry) => (
            <li
              key={entry.name}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2.5"
            >
              <span className="font-serif text-[1.0625rem] leading-none text-foreground">
                {entry.name}
              </span>
              {entry.note ? (
                <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-accent">
                  {entry.note}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
