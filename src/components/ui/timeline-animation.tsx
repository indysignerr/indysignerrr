"use client";

import { type HTMLMotionProps, motion, useInView } from "framer-motion";
import type React from "react";
import type { Variants } from "framer-motion";

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: React.RefObject<HTMLElement | null>;
  as?: T;
  customVariants?: Variants;
  once?: boolean;
} & HTMLMotionProps<T>;

export function TimelineContent<
  T extends keyof HTMLElementTagNameMap = "div",
>({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = true,
  ...props
}: TimelineContentProps<T>) {
  const defaultSequenceVariants: Variants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.12,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hidden: {
      filter: "blur(12px)",
      y: 24,
      opacity: 0,
    },
  };

  const sequenceVariants = customVariants || defaultSequenceVariants;

  const isInView = useInView(timelineRef, { once, margin: "-80px" });

  const MotionComponent = motion[as || "div"] as React.ElementType;

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: 30,
    opacity: 0,
  },
};

export const scaleVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hidden: {
    filter: "blur(12px)",
    opacity: 0,
    scale: 0.96,
  },
};
