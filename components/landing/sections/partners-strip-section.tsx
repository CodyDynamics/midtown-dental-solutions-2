import { Reveal } from "@/components/motion/reveal";
import { PARTNERS } from "@/lib/constants/content";

export function PartnersStripSection() {
  return (
    <section id="brands" className="border-b border-[#f3f4f6] bg-white py-16">
      <div className="section-container text-center">
        <Reveal>
          <p className="mb-10 text-xs font-bold tracking-[0.2em] text-[#8F96A3] uppercase">
            Authorized brands & partners
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-2xl font-bold text-[#181B20] transition-opacity hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
