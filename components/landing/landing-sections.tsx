"use client";

import { CtaFooterSection } from "@/components/landing/sections/cta-footer-section";
import { EmpowerSection } from "@/components/landing/sections/empower-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { PartnerSection } from "@/components/landing/sections/partner-section";
import { PartnersStripSection } from "@/components/landing/sections/partners-strip-section";
import { StepsSection } from "@/components/landing/sections/steps-section";
import { TeamSection } from "@/components/landing/sections/team-section";
import { ValuesGridSection } from "@/components/landing/sections/values-grid-section";
import { VideoLibrarySection } from "@/components/landing/sections/video-library-section";
import { WhyChooseSection } from "@/components/landing/sections/why-choose-section";

export function LandingSections() {
  return (
    <main className="min-w-0">
      <HeroSection />
      <WhyChooseSection />
      <StepsSection />
      <EmpowerSection />
      <PartnerSection />
      <ValuesGridSection />
      <TeamSection />
      <PartnersStripSection />
      <VideoLibrarySection />
      <CtaFooterSection />
    </main>
  );
}
