import { SiteHeader } from "@/components/landing/site-header";
import { LandingSections } from "@/components/landing/landing-sections";
import { SITE } from "@/lib/constants/content";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  description:
    "Dental equipment installation, preventive maintenance, and technical support services.",
  email: SITE.contactEmail,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Worth",
    streetAddress: SITE.address,
  },
  url: "https://midtowndentalsolutions.com",
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
