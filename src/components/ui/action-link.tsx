import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
  download?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground border border-primary hover:bg-primary-strong hover:border-primary-strong shadow-[0_14px_34px_-18px_var(--primary)]",
  outline:
    "border border-border-strong bg-surface/60 text-foreground hover:border-primary hover:text-primary",
};

const sizes = {
  md: "h-11 px-5 text-[0.8125rem]",
  lg: "h-12 px-6 text-sm sm:h-[3.25rem] sm:px-7",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  download,
  onClick,
  ...rest
}: ActionLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-[0.01em] transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-editorial hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
