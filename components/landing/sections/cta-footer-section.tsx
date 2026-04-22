import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SITE } from "@/lib/constants/content";

const exploreLinks = [
  { href: "#overview", label: "Company overview" },
  { href: "#team", label: "Meet the team" },
  { href: "#brands", label: "Authorized brands" },
  { href: "#recordings", label: "Project recordings" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [
  { href: "#", label: "Privacy policy" },
  { href: "#", label: "Terms of service" },
  { href: "#", label: "Posting guidelines" },
];

export function CtaFooterSection() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-[#dbe5f4] bg-gradient-to-b from-[#f8fbff] to-white text-[#0f172a]"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <h2 className="mb-6 text-3xl font-bold text-[#0f172a]">Contact us</h2>
            <p className="mb-10 leading-relaxed text-[#334155]">
              Primary contact for service requests, partnership inquiries, and
              publishing decisions for project recordings.
            </p>
            <a href={`mailto:${SITE.contactEmail}?subject=Midtown%20Dental%20Solutions%20Inquiry`} className="btn-primary">
              Send inquiry
            </a>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <Reveal
              delay={0.06}
              className="rounded-2xl border border-[#dbe5f4] bg-white p-8 shadow-[0_20px_40px_rgba(37,99,235,0.08)]"
            >
              <Image
                src="/assets/IMG_25.svg"
                alt=""
                width={32}
                height={32}
                className="mb-6 h-8 w-8 opacity-90"
              />
              <h3 className="mb-2 text-xl font-semibold text-[#0f172a]">Email us</h3>
              <p className="mb-6 text-sm text-[#475569]">
                Preferred email address for official communication.
              </p>
              <a
                className="text-lg font-semibold text-[#1d4ed8] transition-colors hover:text-[#1e40af] break-words"
                href={`mailto:${SITE.contactEmail}`}
              >
                {SITE.contactEmail}
              </a>
            </Reveal>

            <Reveal
              delay={0.1}
              className="rounded-2xl border border-[#dbe5f4] bg-white p-8 shadow-[0_20px_40px_rgba(37,99,235,0.08)]"
            >
              <Image
                src="/assets/IMG_26.svg"
                alt=""
                width={32}
                height={32}
                className="mb-6 h-8 w-8 opacity-90"
              />
              <h3 className="mb-2 text-xl font-semibold text-[#0f172a]">Primary phone</h3>
              <p className="mb-6 text-sm text-[#475569]">
                Preferred phone number for urgent technical support.
              </p>
              <a
                className="text-lg font-semibold text-[#1d4ed8] transition-colors hover:text-[#1e40af]"
                href={`tel:+1${SITE.phone.replace(/\D/g, "")}`}
              >
                {SITE.phone}
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-[#dbe5f4] pt-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/assets/logo-midtown.png"
                alt={`${SITE.name} logo`}
                width={32}
                height={32}
                className="h-8 w-8 rounded-md object-cover"
              />
              <span className="text-xl font-bold">
                Midtown <span className="text-[#2962FF]">Dental Solutions</span>
              </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-[#475569]">
              Dental equipment service, maintenance, and support partner for
              modern practices and care teams.
            </p>
            <div className="flex items-start gap-2 text-sm text-[#334155]">
              <Image
                src="/assets/IMG_28.svg"
                alt=""
                width={16}
                height={16}
                className="mt-1 h-4 w-4 shrink-0"
              />
              <span>{SITE.address}</span>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-semibold text-[#0f172a]">Explore</h4>
            <ul className="space-y-4 text-sm text-[#475569]">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-[#1d4ed8]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-semibold text-[#0f172a]">Legal</h4>
            <ul className="space-y-4 text-sm text-[#475569]">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-[#1d4ed8]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-xl border border-[#dbe5f4] bg-[#f8fbff] p-6 text-center text-[#0f172a]">
              <Image
                src="/assets/IMG_27.svg"
                alt=""
                width={40}
                height={40}
                className="mx-auto mb-4 h-10 w-10"
              />
              <p className="mb-2 text-sm font-bold">Recognized organization</p>
              <div className="mb-2 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold">A+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  Rating
                </span>
              </div>
              <p className="text-[10px] text-[#8F96A3]">
                Certified for service quality excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#dbe5f4] pt-8 md:flex-row">
          <p className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} Midtown Dental Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#64748b]">
            <a href="#" className="transition-colors hover:text-[#1d4ed8]">
              Facebook
            </a>
            <a href="#" className="transition-colors hover:text-[#1d4ed8]">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-[#1d4ed8]">
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
