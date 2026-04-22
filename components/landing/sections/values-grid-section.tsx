import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion/reveal";
import { VALUE_CARDS } from "@/lib/constants/content";

export function ValuesGridSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="heading-section mb-4">Why choose Tempelite?</h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-[#8F96A3]">
            We are committed to delivering a professional, secure, and dependable
            staffing experience for the entire healthcare ecosystem.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="card-hover-lift h-full rounded-2xl border border-[#f3f4f6] bg-white p-8 text-left shadow-sm"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F4FF] sm:mx-0">
                  <Image
                    src={card.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-[#181B20]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8F96A3]">
                  {card.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
