import { Reveal } from "@/components/motion/reveal";
import { KEY_REASONS } from "@/lib/constants/content";

export function KeyReasonsSection() {
  return (
    <section id="key-reasons" className="section-padding bg-white pt-0">
      <div className="section-container">
        <Reveal delay={0.08}>
          <h3 className="mb-4 text-2xl font-bold text-[#0f172a]">
            Key reasons vendors should choose Midtown Dental Solutions
          </h3>
          <p className="mb-8 text-[#64748b]">
            Core values and mission that guide how we partner with clinics and
            manufacturers:
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {KEY_REASONS.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-[#dbe5f4] bg-[#f8fbff] p-6"
              >
                <h4 className="mb-3 text-xl font-semibold text-[#1e3a8a]">
                  {reason.title}
                </h4>
                <p className="text-sm leading-7 text-[#334155]">{reason.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
