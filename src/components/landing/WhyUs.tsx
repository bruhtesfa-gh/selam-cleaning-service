/*
================================================================================
| FILE: /components/landing/WhyUs.tsx
|
| A Server Component explaining the key benefits of the service.
================================================================================
*/
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WHY_US_POINTS } from "@/lib/constants";

export const WhyUs = () => {
  return (
    <section id="whyus" className="bg-secondary/40 py-16">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <p className="mt-2 text-muted-foreground">
            Professional & Reliable • Attention to Detail • Flexible Scheduling
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_US_POINTS.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-accent" /> {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
