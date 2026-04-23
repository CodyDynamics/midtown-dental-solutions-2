import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { COMPANY_OVERVIEW_TEXT } from "@/lib/constants/content";
import { IMAGES } from "@/lib/constants/images";

export function WhyChooseSection() {
  return (
    <section id="overview" className="section-padding overflow-x-hidden bg-white">
      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-2 -rotate-3 rounded-2xl bg-[#F0F4FF] z-0 sm:-inset-4" />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={IMAGES.whyChoose}
                alt="Clinical team discussing care in a modern hospital corridor"
                width={960}
                height={720}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="heading-section mb-6">Company overview</h2>
            <p className="mb-10 text-lg text-[#8F96A3]">
              {COMPANY_OVERVIEW_TEXT}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
