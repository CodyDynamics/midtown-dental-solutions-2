"use client";

import { CtaFooterSection } from "@/components/landing/sections/cta-footer-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { PartnersStripSection } from "@/components/landing/sections/partners-strip-section";
import { TeamSection } from "@/components/landing/sections/team-section";
import { VideoLibrarySection } from "@/components/landing/sections/video-library-section";
import { WhyChooseSection } from "@/components/landing/sections/why-choose-section";

export function LandingSections() {
  return (
    <main className="min-w-0">
      <HeroSection />
      <WhyChooseSection />
      <TeamSection />
      <PartnersStripSection />
      <VideoLibrarySection />
      <CtaFooterSection />
    </main>
  );
}
