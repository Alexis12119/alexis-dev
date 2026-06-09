"use client";

import { NAV_ITEMS } from "@/config/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="fixed inset-0 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed top-16 right-0 w-72 bg-[#FAF9F6] border-l border-[#E5E7EB] h-full p-6">
        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-[#6B7280] hover:text-[#111111] transition-colors py-2"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
