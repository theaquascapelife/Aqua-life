// components/home/WhyChooseUs.tsx
import {
  ShieldCheck,
  Truck,
  Headphones,
  PackageCheck,
} from "lucide-react";

const features = [
  {
    title: "Premium Quality Products",
    description:
      "Carefully selected aquarium products from trusted brands to ensure long-lasting performance.",
    icon: ShieldCheck,
  },
  {
    title: "Safe & Secure Shipping",
    description:
      "Strong packaging and reliable courier partners to ensure damage-free delivery.",
    icon: Truck,
  },
  {
    title: "Expert Support",
    description:
      "Get guidance from aquarium specialists before and after your purchase.",
    icon: Headphones,
  },
  {
    title: "Hassle-Free Returns",
    description:
      "Easy replacement and return policies for peace of mind.",
    icon: PackageCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by aquarium enthusiasts across India for quality,
            reliability, and expert support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white p-6 text-center transition hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <feature.icon className="h-6 w-6 text-slate-900" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
