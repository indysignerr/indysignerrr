import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 group [&_svg]:transition-transform [&_svg]:duration-400 hover:[&_svg]:translate-x-1 overflow-hidden active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-ocean-deep text-paper hover:bg-ocean-blue shadow-[0_8px_24px_-8px_rgba(10,31,58,0.4)] hover:shadow-[0_24px_56px_-12px_rgba(10,31,58,0.6)] hover:-translate-y-1",
        secondary:
          "bg-sand-warm text-ocean-deep hover:bg-sand-light border border-line hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(10,31,58,0.3)]",
        ghost:
          "bg-transparent text-ocean-deep hover:bg-sky-mist hover:-translate-y-0.5",
        outline:
          "border border-ocean-deep/25 bg-transparent text-ocean-deep hover:border-ocean-deep hover:bg-ocean-deep hover:text-paper hover:-translate-y-1 hover:shadow-[0_20px_48px_-14px_rgba(10,31,58,0.45)]",
        link: "text-ocean-deep underline-offset-4 hover:underline px-0 h-auto rounded-none",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
