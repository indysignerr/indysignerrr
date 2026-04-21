"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ocean-deep focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Aller au contenu
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-paper/75 backdrop-blur-xl border-b border-line/60"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Accueil Indysigner"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean-deep text-paper">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M3 17c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
                <path d="M3 12c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
              </svg>
            </span>
            <span className="font-display text-lg tracking-tight text-ink">
              Indysigner
            </span>
          </Link>

          <nav aria-label="Principale" className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-sky-mist hover:text-ocean-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm" variant="primary">
              <Link href="/contact">Démarrer un projet</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/70 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-300",
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-line">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-6 py-5 text-lg font-medium text-ink hover:bg-sky-mist"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="m-6 rounded-full bg-ocean-deep px-6 py-4 text-center text-sm font-medium text-paper"
            >
              Démarrer un projet
            </Link>
          </nav>
        </div>
      </header>
      <div aria-hidden className="h-20" />
    </>
  );
}
