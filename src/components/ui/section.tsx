import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div data-reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3.5">
        <span className="font-serif text-[0.9375rem] tabular-nums text-accent">
          {index}
        </span>
        <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
        <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.06] tracking-[-0.015em] text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-section={id}
      className={cn(
        "relative scroll-mt-24 border-t border-border/70 py-20 sm:py-24 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[76rem] px-6 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}
