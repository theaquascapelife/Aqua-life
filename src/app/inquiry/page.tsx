"use client";

import { useState } from "react";
import { useCart } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function InquiryPage() {
  const { items, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        products: items,
      }),
    });

    if (res.ok) {
      clearCart();
      setSuccess(true);
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="container mx-auto py-24 max-w-md text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h2 className="mt-4 text-2xl font-semibold">
          Inquiry Sent Successfully
        </h2>
        <p className="mt-2 text-muted-foreground">
          Our team will contact you shortly to discuss your aquarium setup.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-lg">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl">
              Request an Aquarium Consultation
            </CardTitle>
            <CardDescription>
              Share your details and selected products. No payment required.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  name="name"
                  required
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-sm font-medium">
                  Additional Notes (Optional)
                </label>
                <Textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your space, size, or any specific requirements"
                />
              </div>

              {/* CTA */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </Button>

              {/* Trust text */}
              <p className="text-center text-xs text-muted-foreground">
                No payment required. Our experts will contact you shortly.
              </p>

            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
