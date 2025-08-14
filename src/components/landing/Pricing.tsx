/*
================================================================================
| FILE: /components/landing/Pricing.tsx
|
| A Server Component to display the pricing plans.
================================================================================
*/
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto py-16">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Simple Pricing</h2>
        <p className="mt-2 text-muted-foreground">Transparent hourly rates</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.title}
            className={cn(
              "relative overflow-hidden",
              plan.isPopular && "border-primary/30"
            )}
          >
            {plan.isPopular && (
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent"
                aria-hidden
              />
            )}
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <p className="text-muted-foreground">{plan.subtitle}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Minimum booking is 2 hours.
      </p>
    </section>
  );
};
