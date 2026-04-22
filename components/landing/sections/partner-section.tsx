import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { IMAGES } from "@/lib/constants/images";

const bullets = [
  "Publish detailed job posts in just a few guided minutes.",
  "Browse verified talent profiles with credentials on file.",
  "Automated workflows keep every hiring stage organized.",
  "Reduce time-to-fill without sacrificing quality or compliance.",
];

export function PartnerSection() {
  return (
    <section id="services" className="section-padding bg-[#F0F4FF]/30">
      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={IMAGES.partner}
                alt="Healthcare operations leader planning staffing in a modern office"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="heading-section mb-6">
              A trusted partner in medical recruitment
            </h2>
            <p className="mb-8 text-lg text-[#8F96A3]">
              Quickly discover and engage qualified candidates who are vetted
              for the roles that keep patient care safe, consistent, and
              compassionate.
            </p>
            <ul className="mb-10 space-y-4">
              {bullets.map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#2962FF]" />
                  <span className="font-medium text-[#181B20]">{line}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-secondary">
              Post a job opening
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
