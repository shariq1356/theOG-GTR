import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "GT-R NISMO | 2024 Technical Dossier",
  description:
    "An independent, cinematic technical exploration of the 2024 Nissan GT-R R35 NISMO — engine, drivetrain, chassis, braking and complete specifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg text-ink`}
      >
        <a className="skip-link" href="#main">
          Skip cinematic introduction
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
