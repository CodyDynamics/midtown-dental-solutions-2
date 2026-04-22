"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2400&q=95",
    alt: "Dentist and patient consultation in a bright treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=2400&q=95",
    alt: "Dental specialist preparing tools before a procedure",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=2400&q=95",
    alt: "Modern dental chair and equipment in a clean clinic",
  },
] as const;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[742px] items-center overflow-hidden bg-[#0f172a] pt-20"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlides[activeIndex].src}
            src={heroSlides[activeIndex].src}
            alt={heroSlides[activeIndex].alt}
            initial={{ opacity: 0.2, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 1.02 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/82 via-[#0f172a]/58 to-[#0f172a]/22" />
        <div className="absolute inset-x-0 bottom-8 z-20 hidden justify-center sm:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 backdrop-blur">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to hero slide ${index + 1}`}
            />
          ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-sm font-medium text-white">
              Trusted dental equipment service team
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-white md:text-6xl"
          >
            Reliable technical support for modern dental practices
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 text-lg leading-relaxed text-white/85 md:text-xl"
          >
            Midtown Dental Solutions supports clinics with installation,
            maintenance, and repair services for essential dental systems so
            your team can operate with confidence every day.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="btn-primary">
              Request service
              <Image
                src="/assets/IMG_3.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </a>
            <a href="#about" className="btn-secondary">
              View company overview
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
