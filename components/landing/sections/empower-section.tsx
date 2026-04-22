import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { IMAGES } from "@/lib/constants/images";

const bullets = [
  "Access to exclusive job openings across the network.",
  "Apply in minutes with streamlined, mobile-friendly flows.",
  "Flexible work options that match your lifestyle.",
  "Ongoing resources to support your long-term career growth.",
];

export function EmpowerSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <h2 className="heading-section mb-6">
              Empowering healthcare professionals
            </h2>
            <p className="mb-8 text-lg text-[#8F96A3]">
              Discover opportunities that align with your skills and ambitions.
              We provide the tools and human support you need to thrive in
              fast-paced clinical environments.
            </p>
            <ul className="mb-10 space-y-4">
              {bullets.map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#2962FF]" />
                  <span className="font-medium text-[#181B20]">{line}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">
              View open roles
            </a>
          </Reveal>

          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={IMAGES.empower}
                alt="Confident physician in a white coat representing our clinical community"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
