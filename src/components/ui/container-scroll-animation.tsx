"use client";

import React from "react";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

/**
 * Showcase simplifié — version statique (plus d'animations scroll-couplées).
 *
 * Avant : useScroll + 3 useTransform (rotateX, scale, translateY) + perspective 3D
 * + box-shadow 5 niveaux. À chaque tick scroll → 3 transforms recalculés +
 * shadow recomputed → contribution majeure aux micro-latences.
 *
 * Maintenant : statique. Le visuel reste premium (frame Space Gray, drop
 * shadow doux, ratio iPhone) mais zéro travail GPU lié au scroll.
 */
export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  return (
    <div className="flex flex-col items-center justify-center relative px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto text-center">{titleComponent}</div>

      <div className="relative max-w-5xl -mt-2 mx-auto h-[28rem] md:h-[40rem] w-full p-2 md:p-5 rounded-[28px] mt-12 md:mt-16 shadow-[0_30px_60px_-20px_rgba(10,31,58,0.35)]">
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
      </div>
    </div>
  );
}
