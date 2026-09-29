import { Section, SectionHeading } from "@/components/ui/section";
import { LeafSprig, WingVein } from "@/components/ui/botanical";
import { RichText } from "@/components/ui/rich-text";
import { ArrowIcon } from "@/components/ui/icons";
import { research } from "@/data/portfolio";

export function Research() {
  return (
    <Section id="research">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <LeafSprig className="absolute -right-14 top-6 h-[26rem] w-64 text-primary opacity-[0.08]" />
      </div>

      <SectionHeading
        index="03"
        eyebrow="Research"
        title={research.title}
        description={research.subtitle}
      />

      <ol className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {research.publications.map((publication, index) => (
          <li
            key={publication.number}
            data-reveal
            style={{ "--reveal-delay": `${index * 110}ms` }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-[border-color,box-shadow,transform] duration-500 ease-editorial hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_30px_64px_-46px_rgba(16,40,28,0.55)] sm:p-10"
          >
            <WingVein className="pointer-events-none absolute -right-8 -top-6 h-36 w-60 text-primary opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14]" />

            <div className="relative flex items-baseline justify-between gap-4">
              <span className="font-serif text-[2.25rem] leading-none text-accent/50">
                {publication.number}
              </span>
              <span className="text-right text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted">
                {publication.category}
              </span>
            </div>

            <h3 className="relative mt-6 font-serif text-[clamp(1.25rem,2.2vw,1.5rem)] font-medium leading-[1.32] tracking-[-0.01em]">
              <RichText segments={publication.title} />
            </h3>

            <p className="relative mt-4 flex-1 text-[0.9375rem] leading-[1.78] text-muted">
              {publication.summary}
            </p>

            <div className="relative mt-8 border-t border-border pt-6">
              {publication.url ? (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary transition-colors duration-300 hover:text-primary-strong"
                >
                  View Publication
                  <ArrowIcon className="size-4 transition-transform duration-300 ease-editorial group-hover/link:translate-x-1" />
                </a>
              ) : (
                <p className="flex items-center gap-2.5 text-[0.8125rem] text-muted">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent/80" />
                  Publication reference available in CV
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
