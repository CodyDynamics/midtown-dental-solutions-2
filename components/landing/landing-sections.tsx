"use client";

import { CtaFooterSection } from "@/components/landing/sections/cta-footer-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { KeyReasonsSection } from "@/components/landing/sections/key-reasons-section";
import { PartnersStripSection } from "@/components/landing/sections/partners-strip-section";
import { TeamSection } from "@/components/landing/sections/team-section";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { VideoLibrarySection } from "@/components/landing/sections/video-library-section";
import { WhyChooseSection } from "@/components/landing/sections/why-choose-section";

export function LandingSections() {
  return (
    <main className="min-w-0">
      <HeroSection />
      <WhyChooseSection />
      <KeyReasonsSection />
      <TeamSection />
      <PartnersStripSection />
      <VideoLibrarySection />
      <TestimonialsSection />
      <CtaFooterSection />
    </main>
  );
}
