import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  fadeFromClassName?: string;
};

export function Marquee({
  children,
  className,
  duration = 45,
  fadeFromClassName = "from-slate-100",
}: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent sm:w-24",
          fadeFromClassName,
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent sm:w-24",
          fadeFromClassName,
        )}
        aria-hidden
      />

      <div
        className="partners-marquee-track flex w-max items-center hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-x-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-x-12 pr-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
