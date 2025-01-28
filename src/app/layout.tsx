import type { Metadata } from "next";
import { Literata } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

import { ReactLenis } from "@/utils/lenis";

import Navigation from "@/components/navigation";

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamb",
  description: "Your favorite home furnishing brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${literata.className} antialiased`}>
          <Navigation />
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </body>
      </ReactLenis>
    </html>
  );
}
