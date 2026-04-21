import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  icon: ReactNode;
  price: number | string;
  priceSuffix?: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: "sand" | "ocean" | "sky";
  ctaLabel?: string;
  ctaHref?: string;
}

interface CreativePricingProps {
  tag?: string;
  title?: string;
  description?: string;
  tiers: PricingTier[];
}

const iconTint: Record<PricingTier["color"], string> = {
  sand: "text-sand-warm",
  ocean: "text-ocean-blue",
  sky: "text-ocean-mid",
};

export function CreativePricing({
  tag = "Tarifs transparents",
  title = "Deux formules. Zéro surprise.",
  description = "Propriété totale sur ton site. Choisis ce qui te va.",
  tiers,
}: CreativePricingProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="text-center space-y-6 mb-16">
        <div className="font-display italic text-xl text-ocean-blue rotate-[-1deg]">
          {tag}
        </div>
        <div className="relative">
          <h2 className="font-display italic text-4xl md:text-6xl font-normal text-ink rotate-[-1deg] leading-[1.02]">
            {title}
            <span className="absolute -right-10 top-0 text-sand-warm rotate-12" aria-hidden>
              ✨
            </span>
            <span className="absolute -left-6 -bottom-2 text-ocean-blue -rotate-12" aria-hidden>
              ⭐️
            </span>
          </h2>
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-3 bg-ocean-blue/20 rotate-[-1deg] rounded-full blur-sm"
            aria-hidden
          />
        </div>
        <p className="font-display italic text-xl text-ink-soft rotate-[-1deg]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={cn(
              "relative group transition-all duration-300",
              index === 0 && "md:rotate-[-1.25deg]",
              index === 1 && "md:rotate-[1.25deg]"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-paper",
                "border-2 border-ocean-deep",
                "rounded-2xl shadow-[6px_6px_0px_0px] shadow-ocean-deep",
                "transition-all duration-300",
                "group-hover:shadow-[10px_10px_0px_0px]",
                "group-hover:-translate-x-1 group-hover:-translate-y-1"
              )}
            />

            <div className="relative p-8 md:p-10">
              {tier.popular && (
                <div
                  className="absolute -top-3 -right-3 bg-sand-warm text-ocean-deep font-display italic px-4 py-1.5 rounded-full rotate-12 text-sm border-2 border-ocean-deep"
                >
                  Le plus vendu
                </div>
              )}

              <div className="mb-6">
                <div
                  className={cn(
                    "w-14 h-14 rounded-full mb-5 flex items-center justify-center",
                    "border-2 border-ocean-deep bg-paper",
                    iconTint[tier.color]
                  )}
                >
                  {tier.icon}
                </div>
                <h3 className="font-display italic text-3xl text-ink">
                  {tier.name}
                </h3>
                <p className="font-display italic text-ink-soft mt-1">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6 font-display">
                <span className="text-5xl font-semibold text-ink tracking-tight">
                  {typeof tier.price === "number" ? `${tier.price}€` : tier.price}
                </span>
                {tier.priceSuffix && (
                  <span className="ml-2 text-ink-soft italic">
                    {tier.priceSuffix}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-ocean-deep bg-paper">
                      <Check className="h-3 w-3 text-ocean-deep" aria-hidden />
                    </span>
                    <span className="font-display italic text-lg text-ink">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={cn(
                  "w-full h-12 font-display italic text-lg rounded-full border-2",
                  "transition-all duration-300",
                  "shadow-[4px_4px_0px_0px] shadow-ocean-deep",
                  "hover:shadow-[6px_6px_0px_0px]",
                  "hover:-translate-x-0.5 hover:-translate-y-0.5",
                  tier.popular
                    ? "bg-sand-warm text-ocean-deep border-ocean-deep hover:bg-sand-light"
                    : "bg-paper text-ocean-deep border-ocean-deep hover:bg-sky-mist"
                )}
              >
                <a href={tier.ctaHref ?? "/contact"}>
                  {tier.ctaLabel ?? "Démarrer mon projet"}
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-40 left-20 text-5xl rotate-12 text-sand-warm/40">✎</div>
        <div className="absolute bottom-40 right-20 text-5xl -rotate-12 text-ocean-blue/30">✏️</div>
      </div>
    </div>
  );
}
