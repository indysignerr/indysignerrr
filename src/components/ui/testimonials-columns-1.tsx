"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ColumnTestimonial {
  text: string;
  image?: string;
  initials?: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: ColumnTestimonial[];
  duration?: number;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 15,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, copyIndex) => (
          <React.Fragment key={copyIndex}>
            {testimonials.map((item, i) => (
              <div
                className="p-8 rounded-3xl border border-line bg-paper shadow-[0_12px_40px_-20px] shadow-ocean-deep/30 max-w-xs w-full"
                key={`${copyIndex}-${i}`}
              >
                <p className="font-display italic text-[17px] leading-snug text-ink">
                  « {item.text} »
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-line">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-deep text-paper font-display text-sm">
                      {item.initials ?? item.name.slice(0, 2)}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <span className="font-medium text-sm tracking-tight text-ink">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
