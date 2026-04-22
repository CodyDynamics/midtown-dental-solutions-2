import Image from "next/image";
import { motion } from "motion/react";
import { IMAGES } from "@/lib/constants/images";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[742px] items-center overflow-hidden bg-[#F6F8F9] pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Healthcare professionals collaborating in a clinical setting"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="hero-bg-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2962FF]/20 bg-[#2962FF]/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#2962FF]" />
            <span className="text-sm font-medium text-[#2962FF]">
              World-class medical staffing network
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-[#181B20] md:text-6xl"
          >
            Connecting top medical professionals with reputable facilities
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 text-lg leading-relaxed text-[#8F96A3] md:text-xl"
          >
            Tempelite is an exclusive network that pairs outstanding physicians,
            nurses (RNs), and allied health professionals with meaningful career
            opportunities—streamlining hiring and saving everyone time.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="btn-primary">
              Start now
              <Image
                src="/assets/IMG_3.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </a>
            <a href="#about" className="btn-secondary">
              Learn more about us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
