"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { Spinner } from "@/components/ui/Spinner";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
    setZoomed(false);
    setLoaded(false);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomed(false);
    setLoaded(false);
  }, [images.length]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

        <div
          className="relative w-full h-full max-w-5xl max-h-[85vh] m-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Spinner size="lg" label="Loading image" />
            </div>
          )}
          <div
            className="relative w-full h-full cursor-zoom-in flex items-center justify-center"
            onClick={() => setZoomed(!zoomed)}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className={`
                object-contain transition-transform duration-300
                ${loaded ? "opacity-100" : "opacity-0"}
                ${zoomed ? "scale-125 cursor-zoom-out" : "scale-100"}
              `}
              sizes="(max-width: 1024px) 100vw, 1024px"
              quality={90}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 text-white/70 text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
