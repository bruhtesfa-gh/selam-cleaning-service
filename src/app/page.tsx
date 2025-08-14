import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Gallery } from "@/components/landing/Gallery";
import { Pricing } from "@/components/landing/Pricing";
import { WhyUs } from "@/components/landing/WhyUs";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#contact" className="sr-only">
        Skip to booking
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
