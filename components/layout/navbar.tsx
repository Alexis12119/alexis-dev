"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Terminal, Palette } from "lucide-react";
import { useAchievements } from "@/hooks/use-achievements";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    // { href: "/blog", label: "Blog" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const themes = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
    { name: "catppuccin", label: "Catppuccin", icon: "🐱" },
    { name: "dracula", label: "Dracula", icon: "🧛" },
    { name: "monochrome", label: "Monochrome", icon: "⚫" },
  ];

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    unlockAchievement(
      "theme-switcher",
      "Theme Switcher",
      `Switched to ${newTheme} theme`,
      "🎨",
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold text-lg">alexis.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            {mounted && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Palette className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {themes.map((themeOption) => (
                    <DropdownMenuItem
                      key={themeOption.name}
                      onClick={() => handleThemeChange(themeOption.name)}
                      className={theme === themeOption.name ? "bg-accent" : ""}
                    >
                      <span className="mr-2">{themeOption.icon}</span>
                      {themeOption.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Palette className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {themes.map((themeOption) => (
                    <DropdownMenuItem
                      key={themeOption.name}
                      onClick={() => handleThemeChange(themeOption.name)}
                      className={theme === themeOption.name ? "bg-accent" : ""}
                    >
                      <span className="mr-2">{themeOption.icon}</span>
                      {themeOption.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
