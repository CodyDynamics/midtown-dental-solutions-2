export const SITE = {
  name: "Tempelite Medical",
  tagline: "Leading medical staffing platform",
  contactEmail: "contact@tempelite.com",
  phone: "(817) 602-0712",
  address: "Midtown Dental Solutions, Texas",
} as const;

export const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const STEPS = [
  {
    title: "1. Create your account",
    description:
      "Complete secure online registration to build your profile as a clinician or healthcare facility.",
    icon: "/assets/IMG_6.svg",
    alt: "Register",
  },
  {
    title: "2. Verification",
    description:
      "Our specialists review credentials to protect the integrity of the network for everyone.",
    icon: "/assets/IMG_7.svg",
    alt: "Verification",
  },
  {
    title: "3. Access opportunities",
    description:
      "Once approved, unlock full access to post roles or apply to positions that fit your goals.",
    icon: "/assets/IMG_8.svg",
    alt: "Opportunities",
  },
] as const;

export const WHY_POINTS = [
  {
    title: "Vetted experts",
    body: "Access a high-quality talent pool that has been carefully screened and is ready to meet your needs.",
  },
  {
    title: "Quality opportunities",
    body: "Partner with leading facilities to access exclusive roles with compensation that reflects your expertise.",
  },
  {
    title: "Streamlined workflows",
    body: "From posting to placement, our platform simplifies hiring so teams save time without cutting corners.",
  },
] as const;

export const VALUE_CARDS = [
  {
    title: "Data security",
    body: "We prioritize the safety and privacy of your information with enterprise-grade safeguards.",
    icon: "/assets/IMG_11.svg",
  },
  {
    title: "Vetted professionals",
    body: "Every clinician completes thorough verification so only qualified candidates reach your shortlist.",
    icon: "/assets/IMG_6.svg",
  },
  {
    title: "Quality assurance",
    body: "We uphold elevated standards for both facilities and talent to deliver dependable matches.",
    icon: "/assets/IMG_12.svg",
  },
  {
    title: "Secure processes",
    body: "Personal data and applications are handled with strict confidentiality at every step.",
    icon: "/assets/IMG_13.svg",
  },
] as const;

export const TEAM = [
  {
    name: "Steven Tran",
    role: "Chief Executive Officer / Owner",
    highlights: [
      "10+ years in medical equipment and dental technology",
      "Associate of Science (2010), Associate of Applied Science (2008)",
    ],
  },
  {
    name: "Wayne Wood",
    role: "Chief Technology Officer / Technical Advisor",
    highlights: [
      "40+ years of hands-on field experience",
      "Expert trainer for clinical engineering technicians",
    ],
  },
  {
    name: "Matthew Thai",
    role: "Sterile Processing Systems Specialist",
    highlights: [
      "7 years as a field service technician",
      "Associate of Science (2007)",
    ],
  },
  {
    name: "Chau Do",
    role: "Senior Field Technician",
    highlights: [
      "4 years of specialized clinical support",
      "Bachelor of Applied Science (2015)",
    ],
  },
  {
    name: "Jadon Thai",
    role: "Field Technician",
    highlights: [
      "2 years of practical field experience",
      "Master of Science in Molecular Diagnostics (2020)",
    ],
  },
  {
    name: "Jared Thai",
    role: "Field Technician",
    highlights: [
      "2 years of practical field experience",
      "Bachelor of Biomedical Engineering (2022)",
    ],
  },
] as const;

export const VIDEOS = [
  {
    title: "A-dec dental chair system — essential maintenance walkthrough",
    meta: "Technician: Steven Tran • 15 min",
    imageKey: "video1" as const,
  },
  {
    title: "Sterilization workflow best practices for busy practices",
    meta: "Technician: Steven Tran • 12 min",
    imageKey: "video2" as const,
  },
  {
    title: "Digital imaging integration — setup and calibration tips",
    meta: "Technician: Steven Tran • 18 min",
    imageKey: "video3" as const,
  },
] as const;

export const PARTNERS = [
  "A-dec",
  "Chicago Xray",
  "Tuttnauer USA",
  "SDS",
  "DCI",
  "Techwest",
  "RPI",
  "Engle Dental",
] as const;
