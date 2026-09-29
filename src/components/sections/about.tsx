import { Section, SectionHeading } from "@/components/ui/section";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading index="01" eyebrow="About Me" title={about.title} />

          <blockquote
            data-reveal
            style={{ "--reveal-delay": "80ms" }}
            className="mt-8 border-l-2 border-accent/60 pl-6"
          >
            <p className="font-serif text-[1.0625rem] italic leading-[1.68] text-foreground/85">
              {about.objective}
            </p>
          </blockquote>

          <div data-reveal style={{ "--reveal-delay": "140ms" }} className="mt-10">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
              {about.focusTitle}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {about.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-[0.8125rem] text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="space-y-4 lg:col-span-7">
          {about.themes.map((theme, index) => (
            <li
              key={theme.number}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors duration-500 hover:border-border-strong sm:p-8"
            >
              <span
                aria-hidden="true"
                className="font-serif text-[2.5rem] leading-none text-accent/40 transition-colors duration-500 group-hover:text-accent/70"
              >
                {theme.number}
              </span>
              <h3 className="mt-4 font-serif text-[1.3125rem] font-medium tracking-[-0.01em] sm:text-[1.4375rem]">
                {theme.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-[1.78] text-muted">
                {theme.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
