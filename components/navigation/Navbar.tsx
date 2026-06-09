"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUp } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_ITEMS } from "@/config/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[visible.length - 1].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    function handleScroll() {
      if (window.scrollY < 100) setActiveSection("");
      setShowBackToTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#FAF9F6]/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12 h-16">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Alexis Corporal"
              width={32}
              height={32}
              className="rounded-sm"
              loading="eager"
            />
            <span className="text-sm font-medium tracking-tight text-[#111111] hidden sm:inline">
              Alexis Corporal
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm transition-colors py-1 group",
                  activeSection === item.href.replace("#", "")
                    ? "text-[#111111] font-medium"
                    : "text-[#6B7280] hover:text-[#111111]",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-[#111111] transition-all duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
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
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden border-b border-[#E5E7EB] bg-[#FAF9F6] shadow-sm"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm transition-colors py-2",
                      activeSection === item.href.replace("#", "")
                        ? "text-[#111111] font-medium"
                        : "text-[#6B7280] hover:text-[#111111]",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white p-3 shadow-sm hover:bg-[#333333] transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
    </>
  );
}
