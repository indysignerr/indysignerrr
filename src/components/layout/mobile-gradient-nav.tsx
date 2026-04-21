"use client";

import { usePathname } from "next/navigation";
import { GradientMenu } from "@/components/ui/gradient-menu";

export function MobileGradientNav() {
  const pathname = usePathname();
  // Masquer sur les pages légales pour ne pas gêner la lecture
  const hidden = /^\/(cgv|mentions-legales|politique-confidentialite)/.test(
    pathname ?? ""
  );

  if (hidden) return null;

  return (
    <div
      aria-label="Navigation secondaire"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 md:hidden"
    >
      <div className="rounded-full border border-line/60 bg-paper/80 backdrop-blur-xl shadow-[0_16px_40px_-12px_rgba(10,31,58,0.35)] px-4 py-3">
        <GradientMenu />
      </div>
    </div>
  );
}
