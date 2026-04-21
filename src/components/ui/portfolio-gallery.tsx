"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface PortfolioGalleryImage {
  src: string;
  alt: string;
  href?: string;
  title?: string;
}

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: { text: string; href: string };
  images: PortfolioGalleryImage[];
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  pauseOnHover?: boolean;
  marqueeRepeat?: number;
}

export function PortfolioGallery({
  title = "Les projets récents",
  archiveButton = { text: "Voir tous les projets", href: "#all" },
  images,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-72 md:-space-x-80",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4,
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      aria-label={title}
      className={`relative py-16 md:py-20 px-4 ${className}`}
      id="archives"
    >
      <div className="max-w-7xl mx-auto bg-paper/60 backdrop-blur-sm rounded-3xl border border-line overflow-hidden">
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-ink mb-8 text-balance">
            <em className="italic font-normal text-coral">{title.split(" ")[0]}</em>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>

          <Link
            href={archiveButton.href}
            className="inline-flex items-center gap-3 bg-ocean-deep text-paper px-6 py-3 rounded-full font-medium hover:bg-ocean-blue transition-colors group mb-20"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop 3D overlapping layout */}
        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
            {images.map((image, index) => {
              const totalImages = images.length;
              const middle = Math.floor(totalImages / 2);
              const distanceFromMiddle = Math.abs(index - middle);
              const staggerOffset = maxHeight - distanceFromMiddle * 20;

              const zIndex = totalImages - index;
              const isHovered = hoveredIndex === index;
              const isOtherHovered =
                hoveredIndex !== null && hoveredIndex !== index;

              const yOffset = isHovered
                ? -120
                : isOtherHovered
                  ? 0
                  : -staggerOffset;

              const inner = (
                <div
                      className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                      style={{
                        boxShadow: `
                          rgba(10,31,58,0.02) 0.796192px 0px 0.796192px 0px,
                          rgba(10,31,58,0.05) 2.41451px 0px 2.41451px 0px,
                          rgba(10,31,58,0.1) 6.38265px 0px 6.38265px 0px,
                          rgba(10,31,58,0.3) 20px 0px 20px 0px
                        `,
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-left-top"
                        loading="lazy"
                        decoding="async"
                      />
                      {image.title && (
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ocean-deep/90 to-transparent">
                          <p className="font-display italic text-paper text-lg truncate">
                            {image.title}
                          </p>
                        </div>
                      )}
                    </div>
              );

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ zIndex }}
                  initial={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                    opacity: 0,
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  {image.href ? (
                    <Link href={image.href} className="block">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile marquee */}
        <div className="block md:hidden relative pb-8">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "flex-row animate-[scroll_40s_linear_infinite]",
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    }
                  )}
                  style={{
                    animation: `scroll 40s linear infinite`,
                  }}
                >
                  {images.map((image, index) => {
                    const card = (
                      <div
                        className="relative aspect-video w-64 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(10,31,58,0.05) 0.8px 0px 0.8px 0px,
                            rgba(10,31,58,0.1) 2.4px 0px 2.4px 0px,
                            rgba(10,31,58,0.3) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-left-top"
                          loading="lazy"
                          decoding="async"
                        />
                        {image.title && (
                          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ocean-deep/90 to-transparent">
                            <p className="font-display italic text-paper text-sm truncate">
                              {image.title}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                    return image.href ? (
                      <Link
                        key={`${i}-${index}`}
                        href={image.href}
                        className="group cursor-pointer flex-shrink-0"
                        onClick={() => onImageClick?.(index)}
                      >
                        {card}
                      </Link>
                    ) : (
                      <div
                        key={`${i}-${index}`}
                        className="group cursor-pointer flex-shrink-0"
                        onClick={() => onImageClick?.(index)}
                      >
                        {card}
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>
          <style>{`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-100% - var(--gap))); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
