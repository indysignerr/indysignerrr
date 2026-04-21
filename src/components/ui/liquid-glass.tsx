"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * LiquidGlass — iOS 26-style glass surface with SVG turbulence distortion.
 * Tinted Ocean Editorial (paper-warm) instead of pure white.
 */

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  as?: "div" | "button" | "a";
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export function GlassEffect({
  children,
  className = "",
  style = {},
  href,
  as = "div",
  onClick,
}: GlassEffectProps) {
  const glassStyle: React.CSSProperties = {
    boxShadow:
      "0 6px 16px -4px rgba(10,31,58,0.22), 0 0 32px -8px rgba(10,31,58,0.14)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={cn(
        "relative flex font-medium overflow-hidden text-ocean-deep transition-all duration-700",
        className
      )}
      style={glassStyle}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-[inherit]"
        style={{ background: "rgba(250, 248, 243, 0.35)" }}
      />
      <div
        className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255,255,255,0.55), inset -1px -1px 1px 1px rgba(197,213,224,0.35)",
        }}
      />
      <div className="relative z-30 flex w-full items-center">{children}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="block">
        {content}
      </a>
    );
  }

  if (as === "button") {
    return (
      <button type="button" onClick={onClick} className="block">
        {content}
      </button>
    );
  }

  return content;
}

export function GlassPill({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <GlassEffect
      className={cn(
        "rounded-full px-5 py-2.5 text-sm tracking-wide",
        className
      )}
      {...props}
    >
      {children}
    </GlassEffect>
  );
}

export function GlassCard({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <GlassEffect
      className={cn("rounded-2xl p-6 md:p-8", className)}
      {...props}
    >
      {children}
    </GlassEffect>
  );
}

export function GlassButton({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) {
  return (
    <GlassEffect
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-full px-8 py-4 hover:px-9 hover:py-[18px] hover:rounded-[28px]",
        className
      )}
    >
      <span
        className="block transition-all duration-700 hover:scale-95"
        style={{
          transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        }}
      >
        {children}
      </span>
    </GlassEffect>
  );
}

/**
 * GlassFilter — SVG turbulence + displacement filter.
 * Mount once at the root (layout) — consumed by all .backdrop-filter: url(#glass-distortion).
 */
export function GlassFilter() {
  return (
    <svg style={{ display: "none" }} aria-hidden>
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.005"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="80"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
