"use client";

import { Reveal } from "@/components/motion/reveal";
import { TestimonialCarouselArk } from "@/components/ui/testimonial-carousel-ark";
import { TESTIMONIALS } from "@/lib/constants/content";

export function TestimonialsSection2() {
  const testimonialCards = TESTIMONIALS.map((item, index) => ({
    id: index + 1,
    name: item.author,
    role: item.role,
    avatar: "",
    description: item.quote,
  }));

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 dark:bg-slate-950">
      <div className="section-container">
        <Reveal className="mb-10">
          <h2 className="heading-section mb-4">Customer testimonials & reviews</h2>
          <p className="max-w-3xl text-lg text-[#64748b]">
            Real feedback from doctors and practice owners who rely on Midtown Dental Solutions for
            dependable equipment service and emergency support.
          </p>
        </Reveal>

        <Reveal>
          <TestimonialCarouselArk testimonials={testimonialCards} className="mx-auto" />
        </Reveal>
      </div>
    </section>
  );
}
