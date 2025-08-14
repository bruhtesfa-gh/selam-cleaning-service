/*
================================================================================
| FILE: /components/landing/Services.tsx
|
| A Server Component that lists the cleaning services offered.
================================================================================
*/
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES_LIST } from "@/lib/constants";

export const Services = () => {
  return (
    <section id="services" className="container mx-auto py-16">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Our Cleaning Services</h2>
        <p className="mt-2 text-muted-foreground">For both homes and offices</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_LIST.map(({ icon: Icon, name }) => (
          <Card key={name} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">{name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
