import { Section, SectionHeading } from "@/components/ui/section";
import {
  CommerceIcon,
  CommunicationIcon,
  InteriorIcon,
  PaletteIcon,
} from "@/components/ui/icons";
import { training, type TrainingEntry } from "@/data/portfolio";

const icons = {
  palette: PaletteIcon,
  commerce: CommerceIcon,
  interior: InteriorIcon,
  communication: CommunicationIcon,
} satisfies Record<TrainingEntry["icon"], typeof PaletteIcon>;

export function Training() {
  return (
    <Section id="training" className="bg-surface-sunk/45">
      <SectionHeading
        index="04"
        eyebrow="Training"
        title={training.title}
        description="Programmes completed across design, business, entrepreneurship and communication."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {training.entries.map((entry, index) => {
          const Icon = icons[entry.icon];
          return (
            <li
              key={entry.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` }}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-[transform,border-color,box-shadow] duration-500 ease-editorial hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_28px_56px_-44px_rgba(16,40,28,0.5)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-full border border-border text-primary transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="size-5" />
                </span>
                <span
                  aria-hidden="true"
                  className="font-serif text-[1.375rem] leading-none text-accent/40"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-[1.125rem] font-medium leading-[1.36] tracking-[-0.005em]">
                {entry.title}
              </h3>
              <p className="mt-3 text-[0.8125rem] leading-[1.72] text-muted">
                {entry.institution}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
