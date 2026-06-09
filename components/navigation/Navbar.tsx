"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#FAF9F6]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-8 lg:px-12 h-16">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-[#111111]"
        >
          {SITE_CONFIG.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-[#111111]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-[#FAF9F6]">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#6B7280] hover:text-[#111111] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
