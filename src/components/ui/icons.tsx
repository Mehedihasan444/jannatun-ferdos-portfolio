import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5v11M7.5 10.5L12 15l4.5-4.5M4.5 19.5h15" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.2 3.5h3l1.4 3.6-2 1.3a11 11 0 006.2 6.2l1.3-2 3.6 1.4v3a2 2 0 01-2.2 2A16.5 16.5 0 014.2 5.7a2 2 0 012-2.2z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5a8.5 8.5 0 100 17c1.2 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8h1.4a4.5 4.5 0 004.5-4.5c0-3.6-3.6-6.5-8.5-6.5z" />
      <path d="M7.8 10.4h.01M10.4 7.6h.01M14.4 8h.01" />
    </svg>
  );
}

export function CommerceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7.5h17l-1.3 11a2 2 0 01-2 1.8H6.8a2 2 0 01-2-1.8z" />
      <path d="M8.5 10.5V6.8a3.5 3.5 0 017 0v3.7" />
    </svg>
  );
}

export function InteriorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 11.5L12 4l8.5 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M3.5 14.5h17" />
    </svg>
  );
}

export function CommunicationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6.5A2 2 0 015.5 4.5h9a2 2 0 012 2v6a2 2 0 01-2 2H8l-4.5 3.5z" />
      <path d="M20.5 10.5a2 2 0 00-2-2H13" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="14.5" r="5.5" />
      <path d="M8.5 9.5L6 3.5h12l-2.5 6" />
      <path d="M12 12.4l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z" />
    </svg>
  );
}
