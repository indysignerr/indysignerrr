"use client";

import { useRef, type ReactNode } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
  className?: string;
}

/**
 * Top section — shrinks + rotates out as you scroll into the second.
 */
function ScrollSectionTop({ scrollYProgress, children, className }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className={cn(
        "sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {children}
    </motion.section>
  );
}

/**
 * Bottom section — scales up + rotates in.
 */
function ScrollSectionBottom({ scrollYProgress, children, className }: SectionProps) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className={cn(
        "relative h-screen flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {children}
    </motion.section>
  );
}

interface StickyZoomTransitionProps {
  top: ReactNode;
  bottom: ReactNode;
  topClassName?: string;
  bottomClassName?: string;
}

/**
 * Two-section sticky zoom transition.
 * Wraps a 200vh container with scroll-linked scale/rotate.
 */
export function StickyZoomTransition({
  top,
  bottom,
  topClassName,
  bottomClassName,
}: StickyZoomTransitionProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh]">
      <ScrollSectionTop scrollYProgress={scrollYProgress} className={topClassName}>
        {top}
      </ScrollSectionTop>
      <ScrollSectionBottom
        scrollYProgress={scrollYProgress}
        className={bottomClassName}
      >
        {bottom}
      </ScrollSectionBottom>
    </div>
  );
}

/**
 * Text Parallax Content — sticky image with overlay copy that parallaxes.
 * Heading fades in at 25-50% of viewport progress, fades out at 75%.
 */
interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
}

const IMG_PADDING = 12;

export function TextParallaxContent({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) {
  return (
    <div
      style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-ocean-deep/75"
        style={{ opacity }}
      />
    </motion.div>
  );
}

function OverlayCopy({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-paper px-6"
    >
      <p className="mb-3 text-center font-mono text-[11px] md:text-sm uppercase tracking-[0.22em] text-sand-warm">
        {subheading}
      </p>
      <p className="text-center font-display italic text-4xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
        {heading}
      </p>
    </motion.div>
  );
}
