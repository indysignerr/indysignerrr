"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[52rem] md:h-[72rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-32 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <ShowcaseHeader translate={translate} titleComponent={titleComponent} />
        <ShowcaseCard rotate={rotate} scale={scale}>
          {children}
        </ShowcaseCard>
      </div>
    </div>
  );
}

function ShowcaseHeader({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center px-6"
    >
      {titleComponent}
    </motion.div>
  );
}

function ShowcaseCard({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 12px 24px rgba(10,31,58,0.3), 0 42px 48px rgba(10,31,58,0.28), 0 96px 60px rgba(10,31,58,0.15), 0 149px 60px rgba(10,31,58,0.06)",
      }}
      className="relative max-w-5xl -mt-8 mx-auto h-[28rem] md:h-[40rem] w-full p-2 md:p-5 rounded-[28px]"
    >
      {/* Space Gray frame */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[28px]"
        style={{
          background:
            "linear-gradient(145deg, #3a3a3d 0%, #2a2a2d 45%, #1f1f22 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.35)",
        }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0f0f10] ring-1 ring-white/5">
        {children}
      </div>
    </motion.div>
  );
}
