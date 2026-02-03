"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/useStore";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem } = useCart();

  const isEmpty = items.length === 0;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">Inquiry Cart</h1>
          <p className="mt-2 text-muted-foreground">
            Review products you’re interested in. No payment required.
          </p>
        </div>

        {/* Empty State */}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse our products and add items to send an inquiry.
            </p>

            <Link href="/shop">
              <Button variant="outline" className="mt-6">
                Browse Products
              </Button>
            </Link>
          </div>
        )}

        {/* Cart Content */}
        {!isEmpty && (
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4"
                >
                  {/* Image */}
                  {item.image && (
                    <div className="relative h-24 w-24 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex flex-1 justify-between gap-4">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item._id)}
                      className="text-destructive"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquiry Summary */}
            <div className="h-fit rounded-xl border border-border bg-card p-6">
              <h2 className="mb-2 text-lg font-semibold">Inquiry Summary</h2>

              <p className="mb-6 text-sm text-muted-foreground">
                We’ll review your selected products and contact you with
                pricing, availability, and customization options.
              </p>

              <ul className="mb-6 space-y-2 text-sm">
                {items.map((item) => (
                  <li key={item.slug} className="flex justify-between">
                    <span className="line-clamp-1">{item.title}</span>
                    <span>₹{item.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>

              <Link href="/inquiry">
                <Button className="w-full" size="lg">
                  Send Inquiry
                </Button>
              </Link>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                No payment required. Our team will reach out to you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
