/*
================================================================================
| FILE: /components/landing/Contact.tsx
|
| A Client Component containing the contact form. It uses state for the
| inputs and an onSubmit handler for the booking logic.
================================================================================
*/
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Selam Cleaning,%0A%0AMy name is ${encodeURIComponent(
      name || "(your name)"
    )}.%0APhone: ${encodeURIComponent(
      phone || "(your phone)"
    )}%0A%0A${encodeURIComponent(
      message || "I would like to book a cleaning service. Please contact me."
    )}`;
    const url = `${WHATSAPP_LINK}?text=${text}`;
    toast.success("Opening WhatsApp to continue your booking…");
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="container mx-auto py-16">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Contact & Booking</h2>
        <p className="mt-2 text-muted-foreground">
          Call or WhatsApp for More Details and to Book Your Service
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4" />{" "}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="underline underline-offset-4"
              >
                {PHONE_NUMBER}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MessageCircle className="h-4 w-4" />{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4" /> Sharjah & Dubai
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4" /> 6:00 AM - 6:00 PM
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you need (home/office, hours, preferred time)"
                  rows={4}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="submit" variant="cta">
                  Send via WhatsApp
                </Button>
                <Button variant="hero" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone /> Call Us
                  </a>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
