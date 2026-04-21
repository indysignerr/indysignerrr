import * as React from "react";
import { cn } from "@/lib/utils";

type As = "div" | "section" | "article" | "main" | "header" | "footer";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: As;
  size?: "prose" | "narrow" | "default" | "wide" | "full";
}

const sizeClasses = {
  prose: "max-w-[720px]",
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[1440px]",
  full: "max-w-none",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-6 md:px-10", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  tone?: "paper" | "sand" | "sky" | "deep";
}

const toneClasses = {
  paper: "bg-paper text-ink",
  sand: "bg-sand-light text-ink",
  sky: "bg-sky-mist text-ink",
  deep: "bg-ocean-deep text-paper",
} as const;

export function Section({
  tone = "paper",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 md:py-32 lg:py-40",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}
