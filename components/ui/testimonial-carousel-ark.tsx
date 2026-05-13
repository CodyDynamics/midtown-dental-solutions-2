"use client";

import { Carousel } from "@ark-ui/react/carousel";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { getInitials, type Testimonial } from "@/components/ui/testimonial";
import { cn } from "@/lib/utils";

interface TestimonialCarouselArkProps {
  testimonials: Testimonial[];
  className?: string;
}

const navBtn =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-40 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700";

export function TestimonialCarouselArk({
  testimonials,
  className,
}: TestimonialCarouselArkProps) {
  const count = testimonials.length;
  if (!count) return null;

  return (
    <Carousel.Root
      slideCount={count}
      defaultPage={0}
      loop
      autoplay={{ delay: 5500 }}
      className={cn("mx-auto w-full max-w-2xl", className)}
    >
      <Carousel.ItemGroup className="items-start overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:shadow-none">
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={testimonial.id ?? index} index={index}>
            <div className="flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-12">
              <Quote
                className="mb-5 size-10 text-blue-600 dark:text-blue-500"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="mb-8 max-w-xl text-pretty text-lg italic leading-relaxed text-gray-800 dark:text-gray-100">
                &ldquo;{testimonial.description}&rdquo;
              </blockquote>
              <div className="mb-10 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
                    aria-hidden
                  >
                    {getInitials(testimonial.name)}
                  </div>
                )}
                <div className="text-left">
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  {testimonial.role ? (
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="mt-8 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-6">
        <Carousel.PrevTrigger
          type="button"
          className={navBtn}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="size-5" strokeWidth={2} />
        </Carousel.PrevTrigger>
        <Carousel.IndicatorGroup className="flex justify-center gap-2">
          {testimonials.map((item, i) => (
            <Carousel.Indicator
              key={item.id ?? i}
              index={i}
              className="h-2.5 w-2.5 cursor-pointer rounded-full bg-gray-300 transition-colors data-current:bg-blue-600 dark:bg-gray-600 dark:data-current:bg-blue-500"
            />
          ))}
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger
          type="button"
          className={navBtn}
          aria-label="Next testimonial"
        >
          <ArrowRight className="size-5" strokeWidth={2} />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
