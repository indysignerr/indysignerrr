import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        primary:
          "bg-ocean-deep text-paper hover:bg-ocean-blue shadow-[0_8px_24px_-8px_rgba(10,31,58,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(10,31,58,0.55)]",
        secondary:
          "bg-sand-warm text-ocean-deep hover:bg-sand-light border border-line",
        ghost:
          "bg-transparent text-ocean-deep hover:bg-sky-mist",
        outline:
          "border border-ocean-deep/20 bg-transparent text-ocean-deep hover:border-ocean-deep hover:bg-ocean-deep hover:text-paper",
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
