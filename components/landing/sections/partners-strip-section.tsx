import { Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/ui/marquee";
import { PARTNERS } from "@/lib/constants/content";

function PartnerNames() {
  return (
    <>
      {PARTNERS.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap text-2xl font-bold text-[#181B20] transition-opacity hover:opacity-100"
        >
          {name}
        </span>
      ))}
    </>
  );
}

export function PartnersStripSection() {
  return (
    <section id="brands" className="border-b border-slate-200/80 bg-slate-100 py-16">
      <div className="section-container text-center">
        <Reveal>
          <p className="mb-10 text-xs font-bold tracking-[0.2em] text-[#8F96A3] uppercase">
            Authorized brands & partners
          </p>
        </Reveal>
      </div>

      <Marquee className="opacity-60" duration={50}>
        <PartnerNames />
      </Marquee>
    </section>
  );
}
