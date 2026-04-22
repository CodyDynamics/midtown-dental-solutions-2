import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { WHY_POINTS } from "@/lib/constants/content";
import { IMAGES } from "@/lib/constants/images";

export function WhyChooseSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-4 -rotate-3 rounded-2xl bg-[#F0F4FF] z-0" />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={IMAGES.whyChoose}
                alt="Clinical team discussing care in a modern hospital corridor"
                width={960}
                height={720}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="glass-card absolute -right-8 -bottom-8 z-20 flex items-center gap-4 rounded-2xl border border-[#f3f4f6] p-6 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2962FF]/10">
                <Image
                  src="/assets/IMG_5.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#8F96A3]">
                  Satisfaction rate
                </p>
                <p className="text-2xl font-bold text-[#181B20]">99.8%</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="heading-section mb-6">Company overview</h2>
            <p className="mb-10 text-lg text-[#8F96A3]">
              Midtown Dental Solutions delivers practical, field-proven service
              for dental equipment and systems. Our value proposition is simple:
              dependable technical support, fast response, and long-term
              reliability for your practice.
            </p>
            <div className="space-y-8">
              {WHY_POINTS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2962FF]/10">
                    <Image
                      src="/assets/IMG_5.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#181B20]">
                      {item.title}
                    </h3>
                    <p className="text-[#8F96A3]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
