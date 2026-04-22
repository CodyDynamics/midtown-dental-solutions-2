import Image from "next/image";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Reveal } from "@/components/motion/reveal";
import { AVATARS } from "@/lib/constants/images";
import { TEAM } from "@/lib/constants/content";

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-[#F9FAFB]">
      <div className="section-container">
        <Reveal>
          <h2 className="heading-section mb-4">Meet the team</h2>
          <p className="mb-16 max-w-3xl text-lg text-[#8F96A3]">
            Executive leadership and field specialists with deep technical
            expertise in dental equipment service and support.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={(index % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Card className="h-full gap-0 rounded-2xl border border-[#f3f4f6] bg-white p-6 py-6 shadow-none ring-0">
                  <div className="mb-6 flex items-center gap-4">
                    <Avatar className="size-20 rounded-full ring-2 ring-[#2962FF]/15">
                      <AvatarImage
                        src={AVATARS[index % AVATARS.length]}
                        alt={member.name}
                      />
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-[#181B20]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[#2962FF]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 border-t border-[#f3f4f6] pt-6">
                    {member.highlights.map((line, hi) => (
                      <div key={line} className="flex gap-3">
                        <Image
                          src={hi === 0 ? "/assets/IMG_12.svg" : "/assets/IMG_15.svg"}
                          alt=""
                          width={16}
                          height={16}
                          className="mt-1 h-4 w-4 opacity-50"
                        />
                        <p className="text-sm text-[#8F96A3]">{line}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
