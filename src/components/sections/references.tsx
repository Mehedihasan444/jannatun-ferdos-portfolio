import { Section, SectionHeading } from "@/components/ui/section";
import { MailIcon } from "@/components/ui/icons";
import { references } from "@/data/portfolio";

export function References() {
  return (
    <Section id="references" className="bg-surface-sunk/45">
      <SectionHeading
        index="07"
        eyebrow="References"
        title={references.title}
        description="Academic referees listed in the CV and available for correspondence."
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {references.entries.map((reference, index) => (
          <li
            key={reference.email}
            data-reveal
            style={{ "--reveal-delay": `${index * 110}ms` }}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-8 transition-[transform,border-color,box-shadow] duration-500 ease-editorial hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_28px_56px_-44px_rgba(16,40,28,0.5)] sm:p-9"
          >
            <h3 className="font-serif text-[1.3125rem] font-medium tracking-[-0.01em] sm:text-[1.375rem]">
              {reference.name}
            </h3>

            <p className="mt-2.5 max-w-md text-[0.8125rem] leading-[1.7] text-muted">
              {reference.position} · {reference.institution}
            </p>

            <a
              href={`mailto:${reference.email}`}
              className="mt-auto inline-flex w-fit items-center gap-2.5 self-start pt-7 border-b border-transparent pb-1 text-[0.8125rem] text-foreground/80 transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              <MailIcon className="size-4 shrink-0 text-primary/70" />
              {reference.email}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
