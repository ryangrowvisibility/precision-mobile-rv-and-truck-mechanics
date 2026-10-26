import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const head = Zilla_Slab({ variable: "--font-head", subsets: ["latin"], weight: ["600", "700"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://precision-mobile-rv-and-truck-mechanics.growlocalvisibility.com"),
  title: "Precision Mobile RV & Truck Mechanics | Mobile RV Repair Near Yosemite & Coarsegold",
  description:
    "Eddie brings the shop to you: mobile RV and truck repair at campgrounds, RV parks and Yosemite. Brakes, RV electrical, slide-outs, airbags and inspections. 4.9 stars from 37 Google reviews. Call (209) 947-0839.",
  openGraph: {
    title: "Precision Mobile RV & Truck Mechanics | We Come to Your Campsite",
    description: "Mobile RV and truck repair around Yosemite, Coarsegold and Central California. Call Eddie at (209) 947-0839.",
    type: "website",
    locale: "en_US",
    images: ["/images/p3.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
