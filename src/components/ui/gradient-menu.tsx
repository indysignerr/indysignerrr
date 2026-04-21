"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Home, LayoutGrid, Briefcase, Tag, Mail } from "lucide-react";

export interface GradientMenuItem {
  title: string;
  href: string;
  icon: ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const defaultItems: GradientMenuItem[] = [
  {
    title: "Accueil",
    href: "/",
    icon: <Home className="h-5 w-5" />,
    gradientFrom: "#1e4d72",
    gradientTo: "#3a6f95",
  },
  {
    title: "Services",
    href: "/services",
    icon: <LayoutGrid className="h-5 w-5" />,
    gradientFrom: "#3a6f95",
    gradientTo: "#c5d5e0",
  },
  {
    title: "Projets",
    href: "/portfolio",
    icon: <Briefcase className="h-5 w-5" />,
    gradientFrom: "#0a1f3a",
    gradientTo: "#1e4d72",
  },
  {
    title: "Tarifs",
    href: "/tarifs",
    icon: <Tag className="h-5 w-5" />,
    gradientFrom: "#e8d9c0",
    gradientTo: "#f2ead8",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <Mail className="h-5 w-5" />,
    gradientFrom: "#0a1f3a",
    gradientTo: "#e8d9c0",
  },
];

export function GradientMenu({
  items = defaultItems,
}: {
  items?: GradientMenuItem[];
}) {
  return (
    <ul className="flex gap-3 md:gap-5">
      {items.map(({ title, href, icon, gradientFrom, gradientTo }) => (
        <li
          key={title}
          style={
            {
              "--gradient-from": gradientFrom,
              "--gradient-to": gradientTo,
            } as React.CSSProperties
          }
          className="relative h-[52px] w-[52px] bg-paper shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[150px] hover:shadow-none group cursor-pointer border border-line/60"
        >
          <Link
            href={href}
            aria-label={title}
            className="absolute inset-0 rounded-full z-20"
          />

          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="absolute top-[8px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[14px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"
          />

          <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0 text-ocean-deep">
            {icon}
          </span>

          <span className="absolute text-paper uppercase tracking-wide text-xs transition-all duration-500 scale-0 group-hover:scale-100 delay-150 z-10">
            {title}
          </span>
        </li>
      ))}
    </ul>
  );
}
