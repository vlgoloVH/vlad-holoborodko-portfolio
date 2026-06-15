import { Image as ImageIcon } from "lucide-react";
import clsx from "clsx";

export function CoverPlaceholder({
  label,
  index,
  ratio = "aspect-[4/3]",
  className,
}: {
  label: string;
  index?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-sm border border-dashed border-line bg-surface",
        ratio,
        className
      )}
    >
      {/* corner ticks — spec/drafting signature */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-line" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-line" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-line" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-line" />

      {index && (
        <span className="absolute left-4 top-4 font-mono text-xs uppercase tracking-widest text-muted">
          {index}
        </span>
      )}

      <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
        <ImageIcon size={20} strokeWidth={1.25} className="text-muted" />
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {label} — cover
          <br />
          replace with final artwork
        </p>
      </div>
    </div>
  );
}
