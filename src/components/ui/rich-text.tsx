import type { RichSegment } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function RichText({ segments }: { segments: RichSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={cn(
            segment.italic && "font-serif italic",
            segment.sub && "font-serif text-[0.66em]",
          )}
        >
          {segment.text}
        </span>
      ))}
    </>
  );
}
