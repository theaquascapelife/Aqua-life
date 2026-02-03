// components/home/NewsletterCTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterCTA() {
  return (
    <section className="border-t bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">

          {/* Heading */}
          <h2 className="text-3xl font-bold md:text-4xl">
            Join Our Aquarium Community
          </h2>

          <p className="mt-3 text-muted-foreground">
            Get aquarium care tips, exclusive offers, and new product
            updates straight to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1"
            />

            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>

          {/* Trust Note */}
          <p className="mt-3 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
}
