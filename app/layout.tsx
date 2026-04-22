import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tempelite.com"),
  title: {
    default: "Tempelite Medical | Healthcare Staffing & Recruitment",
    template: "%s | Tempelite Medical",
  },
  description:
    "Connect with vetted physicians, nurses, and allied health professionals—or find your next role at leading facilities. Secure, streamlined medical staffing.",
  keywords: [
    "medical staffing",
    "healthcare recruitment",
    "nurse staffing",
    "clinical hiring",
    "Tempelite Medical",
  ],
  authors: [{ name: "Tempelite Medical" }],
  creator: "Tempelite Medical",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tempelite.com",
    siteName: "Tempelite Medical",
    title: "Tempelite Medical | Healthcare Staffing & Recruitment",
    description:
      "Connect top medical professionals with reputable facilities through a secure, modern staffing platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempelite Medical | Healthcare Staffing & Recruitment",
    description:
      "Connect top medical professionals with reputable facilities through a secure, modern staffing platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tempelite.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#2962FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#F9FAFB] text-[#181B20]">
        {children}
      </body>
    </html>
  );
}
