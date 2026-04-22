import { SiteHeader } from "@/components/landing/site-header";
import { LandingSections } from "@/components/landing/landing-sections";
import { SITE } from "@/lib/constants/content";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE.name,
  description:
    "Medical staffing platform connecting verified clinicians with reputable healthcare facilities.",
  email: SITE.contactEmail,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Texas",
    streetAddress: SITE.address,
  },
  url: "https://tempelite.com",
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <SiteHeader />
      <LandingSections />
    </>
  );
}
