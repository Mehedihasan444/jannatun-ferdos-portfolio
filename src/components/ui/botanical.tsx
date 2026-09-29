import { cn } from "@/lib/utils";

/**
 * Decorative botanical line art. Every mark here is presentational, so it is
 * hidden from assistive technology and never conveys content on its own.
 */
export function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M60 196C60 150 60 96 58 44" />
      <path d="M60 158c-16-6-26-22-26-40 16 6 24 22 26 40Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M60 158c16-6 26-22 26-40-16 6-24 22-26 40Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M58 116c-16-6-26-22-26-40 16 6 24 22 26 40Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M58 116c16-6 26-22 26-40-16 6-24 22-26 40Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M56 74c-14-6-22-20-22-36 14 6 21 20 22 36Z" fill="currentColor" fillOpacity="0.07" />
      <path d="M58 48c-10-14-10-30 0-42 10 12 10 28 0 42Z" fill="currentColor" fillOpacity="0.07" />
    </svg>
  );
}

export function WingVein({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M14 96C46 92 86 74 120 50c26-18 48-30 66-32" />
      <path d="M52 87c-2-14 0-26 6-36" />
      <path d="M78 74c-4-16-2-30 4-42" />
      <path d="M104 58c-6-16-6-30-2-42" />
      <path d="M130 44c-8-14-10-26-8-36" />
      <path d="M52 87c14 4 26 4 38 0" />
      <path d="M78 74c16 6 30 6 44 0" />
      <path d="M104 58c16 6 30 6 44 2" />
      <path d="M130 44c14 6 26 6 38 4" />
      <path d="M40 92c-6-8-10-16-12-24" />
      <path d="M66 80c-6-10-8-20-8-30" />
      <path d="M92 64c-6-10-8-20-8-30" />
      <path d="M118 50c-6-8-8-18-8-28" />
    </svg>
  );
}

export function SpecimenRule({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M2 20h236" />
      <path d="M18 14v12M64 17v6M128 15v10M192 14v12" />
      <circle cx="18" cy="20" r="3" />
      <circle cx="192" cy="20" r="3" />
    </svg>
  );
}

export function SeedPodMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M16 29V13" />
      <path d="M16 17c-5 0-8-3-8-7 4 0 8 2 8 7Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 21c5 0 8-3 8-7-4 0-8 2-8 7Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 11c-2.8-2-3.6-5.4-1.6-8 2.6 1.6 3.4 5 1.6 8Z" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}
