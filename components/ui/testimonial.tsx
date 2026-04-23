import * as React from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: number | string;
  name: string;
  role?: string;
  avatar?: string;
  description: string;
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  showArrows?: boolean;
  showDots?: boolean;
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [exitX, setExitX] = React.useState<number>(0);

    const goNext = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setExitX(0);
    }, [testimonials.length]);

    const goPrev = React.useCallback(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setExitX(0);
    }, [testimonials.length]);

    const handleDragEnd = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x);
        setTimeout(() => {
          if (info.offset.x < 0) {
            goNext();
          } else {
            goPrev();
          }
        }, 200);
      }
    };

    if (!testimonials.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-[31rem] w-full items-center justify-center sm:h-[30rem]",
          className
        )}
        {...props}
      >
        <div className="relative h-[29rem] w-full max-w-3xl sm:h-[27rem]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex;
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length;
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length;

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null;

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute h-full w-full cursor-grab rounded-2xl border border-[#dbe5f4] bg-white p-6 shadow-xl active:cursor-grabbing sm:rounded-3xl sm:p-8",
                  "dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)]"
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-3 flex justify-between px-4 sm:top-4">
                    <button
                      type="button"
                      aria-label="Previous testimonial"
                      onClick={goPrev}
                      className="text-2xl text-gray-300 transition-colors hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary"
                    >
                      &larr;
                    </button>
                    <button
                      type="button"
                      aria-label="Next testimonial"
                      onClick={goNext}
                      className="text-2xl text-gray-300 transition-colors hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary"
                    >
                      &rarr;
                    </button>
                  </div>
                )}

                <div className="flex h-full flex-col items-center gap-4 pt-8 text-center sm:pt-10">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dbeafe] text-lg font-bold text-[#1d4ed8] sm:h-20 sm:w-20 sm:text-xl">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-foreground">
                    {testimonial.name}
                  </h3>
                  {testimonial.role ? (
                    <p className="text-sm font-medium text-[#2563eb]">
                      {testimonial.role}
                    </p>
                  ) : null}
                  <p className="text-sm leading-7 text-gray-600 dark:text-muted-foreground sm:text-base">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
          {showDots && (
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id ?? index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-blue-500 dark:bg-primary"
                      : "bg-gray-300 dark:bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
TestimonialCarousel.displayName = "TestimonialCarousel";

export { TestimonialCarousel };

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
