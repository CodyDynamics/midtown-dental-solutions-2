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
  metadataBase: new URL("https://midtowndentalsolutions.com"),
  title: {
    default: "Midtown Dental Solutions | Equipment Service & Support",
    template: "%s | Midtown Dental Solutions",
  },
  description:
    "Midtown Dental Solutions provides installation, preventive maintenance, and repair support for essential dental equipment.",
  keywords: [
    "dental equipment service",
    "dental equipment maintenance",
    "sterilization systems support",
    "dental chair repair",
    "Midtown Dental Solutions",
  ],
  authors: [{ name: "Midtown Dental Solutions" }],
  creator: "Midtown Dental Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://midtowndentalsolutions.com",
    siteName: "Midtown Dental Solutions",
    title: "Midtown Dental Solutions | Equipment Service & Support",
    description:
      "Reliable technical service and support for modern dental practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midtown Dental Solutions | Equipment Service & Support",
    description:
      "Reliable technical service and support for modern dental practices.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://midtowndentalsolutions.com",
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
