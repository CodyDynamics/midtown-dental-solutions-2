import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { STEPS } from "@/lib/constants/content";

export function StepsSection() {
  return (
    <section className="section-padding border-y border-[#f3f4f6] bg-[#F9FAFB]">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="heading-section mb-16">
            Get started in three simple steps
          </h2>
        </Reveal>

        <div className="relative grid gap-12 md:grid-cols-3">
          <div className="absolute top-12 right-[15%] left-[15%] z-0 hidden h-0.5 bg-[#f3f4f6] md:block" />

          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="mb-6 flex flex-col items-center"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-white bg-white shadow-md">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2962FF]">
                    <Image
                      src={step.icon}
                      alt={step.alt}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                </div>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-[#181B20]">
                {step.title}
              </h3>
              <p className="text-[#8F96A3]">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
