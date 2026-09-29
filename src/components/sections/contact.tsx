import { Section, SectionHeading } from "@/components/ui/section";
import { LeafSprig } from "@/components/ui/botanical";
import { ArrowIcon, DownloadIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { contact, site } from "@/data/portfolio";

const actions = [
  {
    key: "email",
    label: "Email Me",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: MailIcon,
  },
  {
    key: "phone",
    label: "Call",
    value: site.phone,
    href: site.phoneHref,
    icon: PhoneIcon,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-8 sm:p-12 lg:rounded-[2.25rem] lg:p-16">
        <div aria-hidden="true" className="hairline-grid pointer-events-none absolute inset-0 opacity-25" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_90%_at_92%_4%,var(--hero-wash)_0%,transparent_62%)]"
        />
        <LeafSprig className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-40 animate-drift text-primary opacity-[0.1]" />

        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              index="07"
              eyebrow="Contact"
              title={contact.title}
              description={contact.intro}
            />
          </div>

          <div className="lg:col-span-6">
            <address className="not-italic">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
                Based in
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.75] text-foreground/80">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>

            <ul className="mt-8 space-y-3">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <li key={action.key}>
                    <a
                      href={action.href}
                      className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-border px-5 py-4 transition-colors duration-300 hover:border-primary hover:bg-primary/5"
                    >
                      <span className="flex min-w-0 items-center gap-3.5">
                        <Icon className="size-5 shrink-0 text-primary" />
                        <span className="min-w-0">
                          <span className="block text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                            {action.label}
                          </span>
                          <span className="mt-1 block truncate text-[0.9375rem] text-foreground">
                            {action.value}
                          </span>
                        </span>
                      </span>
                      <ArrowIcon className="size-4 shrink-0 text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-primary" />
                    </a>
                  </li>
                );
              })}

              <li>
                <a
                  href={site.cv.href}
                  download={site.cv.fileName}
                  className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-border px-5 py-4 transition-colors duration-300 hover:border-primary hover:bg-primary/5"
                >
                  <span className="flex min-w-0 items-center gap-3.5">
                    <DownloadIcon className="size-5 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                        Curriculum Vitae
                      </span>
                      <span className="mt-1 block text-[0.9375rem] text-foreground">
                        {site.cv.label}
                      </span>
                    </span>
                  </span>
                  <ArrowIcon className="size-4 shrink-0 text-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
