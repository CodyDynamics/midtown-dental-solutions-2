"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

type VideoRecording = (typeof VIDEOS)[number];

function getVideoSrc(video: VideoRecording): string | undefined {
  return "src" in video ? video.src : undefined;
}

export function VideoLibrarySection() {
  const [playing, setPlaying] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeModal = useCallback(() => {
    const node = videoRef.current;
    if (node) {
      node.pause();
      node.currentTime = 0;
    }
    setPlaying(null);
  }, []);

  useEffect(() => {
    if (!playing) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);

    const id = window.requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(id);
      document.body.style.overflow = prevOverflow;
    };
  }, [playing, closeModal]);

  const openIfPlayable = (video: VideoRecording) => {
    const src = getVideoSrc(video);
    if (src) setPlaying({ src, title: video.title });
  };

  const isPlayable = (video: VideoRecording) => Boolean(getVideoSrc(video));

  return (
    <section id="recordings" className="section-padding bg-slate-100">
      <div className="section-container">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl text-left">
            <h2 className="heading-section mb-4">Project recordings</h2>
            <p className="text-lg text-[#8F96A3]">
              Let us know whether you want to publish these existing videos as-is
              or refine/edit them first before launch.
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
              Review recording plan
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {VIDEOS.map((video, i) => {
            const inlineSrc = getVideoSrc(video);
            const playable = isPlayable(video);
            return (
            <Reveal key={video.title + i} delay={i * 0.08}>
              <motion.article
                role={playable ? "button" : undefined}
                tabIndex={playable ? 0 : undefined}
                onClick={() => openIfPlayable(video)}
                onKeyDown={(e) => {
                  if (!playable) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openIfPlayable(video);
                  }
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={cn(
                  "group overflow-hidden rounded-2xl border border-[#f3f4f6] bg-white shadow-sm",
                  playable &&
                    "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2962FF]/40"
                )}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {inlineSrc ? (
                    <video
                      aria-hidden
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      src={inlineSrc}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      autoPlay
                    />
                  ) : (
                    <Image
                      src={thumbByKey[video.imageKey]}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg ring-4 ring-[#2962FF]/25 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src="/assets/IMG_22.svg"
                        alt=""
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
            );
          })}
        </div>
      </div>

      {playing ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={playing.title}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl font-semibold text-white backdrop-blur transition-colors hover:bg-white/25"
              aria-label="Close video"
            >
              ✕
            </button>
            <video
              ref={videoRef}
              key={playing.src}
              className="block aspect-video w-full object-contain"
              src={playing.src}
              controls
              playsInline
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : null}
    </section>
  );
}
