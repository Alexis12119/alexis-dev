"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface CardImageProps {
  images: string[];
  alt: string;
  initials: string;
}

export function CardImage({ images, alt, initials }: CardImageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const lightboxImages = images.map((src) => ({ src, alt }));

  return (
    <>
      <div className="md:w-2/5 shrink-0 flex flex-col">
        <div
          className="relative w-full flex-1 min-h-40 overflow-hidden bg-subtle cursor-pointer"
          onClick={() => setLightboxIndex(selectedImage)}
        >
          {imgError ? (
            <div className="flex items-center justify-center text-sm text-muted h-full">
              <div className="text-center">
                <span className="text-2xl font-semibold tracking-tight block mb-1">
                  {initials}
                </span>
                <span>Screenshot unavailable</span>
              </div>
            </div>
          ) : (
            <Image
              src={images[selectedImage]}
              alt={`${alt} screenshot ${selectedImage + 1}`}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 420px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {!imgError && images.length > 1 && (
          <div className="flex gap-2 px-3 pt-2 pb-1 overflow-x-auto shrink-0">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "shrink-0 overflow-hidden border transition-colors",
                  i === selectedImage
                    ? "border-foreground"
                    : "border-border hover:border-accent",
                )}
                aria-label={`View screenshot ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${alt} thumbnail ${i + 1}`}
                  width={72}
                  height={54}
                  className="object-cover w-[72px] md:w-16 h-auto"
                  sizes="(max-width: 768px) 72px, 64px"
                  style={{ width: "auto", height: "auto" }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex >= 0 && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </>
  );
}
