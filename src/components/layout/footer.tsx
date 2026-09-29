import { navigation, site } from "@/data/portfolio";
import { MailIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[76rem] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl font-medium tracking-[-0.01em]">
              {site.name}
            </p>
            <p className="mt-2 text-[0.8125rem] uppercase tracking-[0.2em] text-muted">
              {site.roles}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-foreground/80 transition-colors duration-300 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-start gap-2 text-sm text-foreground/80 transition-colors duration-300 hover:text-primary"
            >
              <MailIcon className="mt-0.5 size-4 shrink-0 text-primary/70" />
              <span className="break-all">{site.email}</span>
            </a>
            <p className="mt-3 text-xs text-muted">{site.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.profession}</p>
        </div>
      </div>
    </footer>
  );
}
