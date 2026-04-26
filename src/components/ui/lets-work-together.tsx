"use client";

import { useState, type MouseEvent } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

interface LetsWorkTogetherProps {
  badgeText?: string;
  mainLine1?: string;
  mainLine2?: string;
  description?: string;
  email?: string;
  bookingHref?: string;
  successLabel?: string;
  successCopy?: string;
  successMicro?: string;
}

export function LetsWorkTogether({
  badgeText = "Disponible pour de nouveaux projets",
  mainLine1 = "Parlons de",
  mainLine2 = "votre projet",
  description =
    "Une idée de site ? Un projet qui traîne ? Dites-m'en plus — je réponds sous 24h avec une vraie proposition, pas une brochure.",
  email = "contact@indysigner.fr",
  bookingHref = "tel:0769762076",
  successLabel = "Parfait",
  successCopy = "Discutons",
  successMicro = "15 min · sans engagement",
}: LetsWorkTogetherProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setShowSuccess(true), 500);
  };

  const handleBookCall = () => {
    window.open(bookingHref, "_blank");
  };

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-6 py-24 overflow-hidden">
      <div aria-hidden className="mesh-ocean absolute inset-0 -z-10" />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="relative flex flex-col items-center gap-12">
        {/* SUCCESS STATE */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-ocean-blue transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              {successLabel}
            </span>
            <h3
              className="font-display italic text-4xl sm:text-5xl text-ink transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              {successCopy}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            <div
              className="h-px w-8 bg-ocean-deep/30 transition-all duration-500 sm:w-12"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.6,
              }}
            />

            <div
              className="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4"
              style={{
                borderColor: isButtonHovered
                  ? "var(--color-ocean-deep)"
                  : "color-mix(in srgb, var(--color-ocean-deep) 20%, transparent)",
                backgroundColor: isButtonHovered
                  ? "var(--color-ocean-deep)"
                  : "transparent",
                boxShadow: isButtonHovered
                  ? "0 10px 40px -10px rgba(10,31,58,0.35)"
                  : "none",
              }}
            >
              <Calendar
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered
                    ? "var(--color-paper)"
                    : "var(--color-ocean-deep)",
                }}
              />
              <span
                className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base"
                style={{
                  color: isButtonHovered
                    ? "var(--color-paper)"
                    : "var(--color-ocean-deep)",
                }}
              >
                Appeler maintenant
              </span>
              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered
                    ? "var(--color-paper)"
                    : "var(--color-ocean-deep)",
                  transform: isButtonHovered
                    ? "translate(3px, -3px) scale(1.1)"
                    : "translate(0, 0) scale(1)",
                }}
              />
            </div>

            <div
              className="h-px w-8 bg-ocean-deep/30 transition-all duration-500 sm:w-12"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.6,
              }}
            />
          </button>

          <span
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            {successMicro}
          </span>
        </div>

        {/* IDLE STATE — availability pill */}
        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-ocean-deep">
            {badgeText}
          </span>
        </div>

        {/* Main headline + arrow */}
        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{ pointerEvents: isClicked ? "none" : "auto" }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsClicked(true);
              setTimeout(() => setShowSuccess(true), 500);
            }
          }}
          aria-label="Révéler le CTA"
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center font-display tracking-tight text-ink text-5xl sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked
                  ? "translateY(-40px) scale(0.95)"
                  : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform:
                      isHovered && !isClicked
                        ? "translateY(-8%)"
                        : "translateY(0)",
                  }}
                >
                  {mainLine1}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 italic text-ocean-blue"
                  style={{
                    transform:
                      isHovered && !isClicked
                        ? "translateY(-8%)"
                        : "translateY(0)",
                  }}
                >
                  {mainLine2}
                </span>
              </span>
            </h2>

            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked
                    ? "var(--color-ocean-deep)"
                    : isHovered
                      ? "var(--color-ocean-deep)"
                      : "color-mix(in srgb, var(--color-ocean-deep) 25%, transparent)",
                  backgroundColor: isClicked
                    ? "transparent"
                    : isHovered
                      ? "var(--color-ocean-deep)"
                      : "transparent",
                  transform: isClicked
                    ? "scale(3)"
                    : isHovered
                      ? "scale(1.1)"
                      : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color:
                    isHovered && !isClicked
                      ? "var(--color-paper)"
                      : "var(--color-ocean-deep)",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 bg-ocean-deep/30 transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked
                  ? "scaleX(0) translateX(-20px)"
                  : isHovered
                    ? "scaleX(1.5)"
                    : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 bg-ocean-deep/30 transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked
                  ? "scaleX(0) translateX(20px)"
                  : isHovered
                    ? "scaleX(1.5)"
                    : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
          <a
            href={`mailto:${email}`}
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-ocean-blue transition-colors hover:text-ocean-deep"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
