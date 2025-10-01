import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AchievementsProvider } from "@/hooks/use-achievements";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { EasterEggHandler } from "@/components/easter-egg-handler";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Alexis Corporal - Full-Stack Developer & Open Source Contributor",
  description:
    "Full-Stack Developer & Neovim Enthusiast building fast, maintainable solutions across the stack. Available for freelance projects.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Neovim",
    "Open Source",
  ],
  authors: [{ name: "Alexis Corporal" }],
  creator: "Alexis Corporal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexis.dev",
    title: "Alexis Corporal - Full-Stack Developer",
    description:
      "Full-Stack Developer & Neovim Enthusiast building fast, maintainable solutions across the stack.",
    siteName: "Alexis Corporal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Corporal - Full-Stack Developer",
    description:
      "Full-Stack Developer & Neovim Enthusiast building fast, maintainable solutions across the stack.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          themes={["light", "dark", "catppuccin", "dracula", "monochrome"]}
        >
          <AchievementsProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <EasterEggHandler />
          </AchievementsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
