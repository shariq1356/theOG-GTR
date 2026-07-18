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
  title: "GT-R Liberty Walk | Widebody Build Showcase",
  description:
    "An independent, cinematic showcase of a Nissan GT-R fitted with a Liberty Walk widebody kit — platform engineering, the LB widebody, and this build's own modifications.",
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
