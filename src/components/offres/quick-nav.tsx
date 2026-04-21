"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { label: "L'offre", href: "#offre" },
  { label: "Process", href: "#process" },
  { label: "Comparatif", href: "#comparatif" },
  { label: "FAQ", href: "#faq" },
];

export function QuickNav() {
  const [active, setActive] = useState<string>("#offre");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // Affiche la nav dès qu'on scrolle en-dessous du hero
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Sections L'Offre"
      className={cn(
        "sticky top-20 z-30 pointer-events-auto transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="mx-auto max-w-fit px-3 py-2 rounded-full border border-line bg-paper/80 backdrop-blur-xl shadow-[0_12px_32px_-16px_rgba(10,31,58,0.3)]">
        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "block rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "bg-ocean-deep text-paper"
                      : "text-ink-soft hover:text-ocean-deep"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
