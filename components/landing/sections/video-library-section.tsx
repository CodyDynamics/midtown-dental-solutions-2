import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { VIDEOS } from "@/lib/constants/content";
import { IMAGES } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const thumbByKey = {
  video1: IMAGES.video1,
  video2: IMAGES.video2,
  video3: IMAGES.video3,
} as const;

export function VideoLibrarySection() {
  return (
    <section className="section-padding bg-[#F6F8F9]">
      <div className="section-container">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <Reveal className="max-w-2xl text-left">
            <h2 className="heading-section mb-4">Project video library</h2>
            <p className="text-lg text-[#8F96A3]">
              Explore professional workflows, maintenance walkthroughs, and
              highlight projects from our field teams.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#contact" />}
              className={cn(
                "h-auto rounded-xl border-[#dee1e6] px-6 py-2.5 text-sm font-semibold shadow-none transition-all hover:-translate-y-px hover:bg-slate-50 hover:shadow-md"
              )}
            >
              View all videos
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.title + i} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white shadow-sm"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={thumbByKey[video.imageKey]}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 group-hover:bg-black/35">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src="/assets/IMG_22.svg"
                        alt="Play video"
                        width={24}
                        height={24}
                        className="ml-1 h-6 w-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-base font-semibold text-[#181B20]">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#8F96A3]">{video.meta}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
