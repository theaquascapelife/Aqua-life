// components/home/ServicesPreview.tsx
import Link from "next/link";
import {
  Fish,
  Wrench,
  Droplets,
  Package,
} from "lucide-react";

const services = [
  {
    title: "Custom Aquarium Design",
    description:
      "Bespoke aquariums crafted to match your space and lifestyle.",
    icon: Fish,
  },
  {
    title: "Expert Installation",
    description:
      "Professional setup with precision, safety, and care.",
    icon: Wrench,
  },
  {
    title: "Maintenance & Aftercare",
    description:
      "Stress-free maintenance to keep your aquarium thriving.",
    icon: Droplets,
  },
  {
    title: "Supplies & Accessories",
    description:
      "Premium equipment from trusted aquarium brands.",
    icon: Package,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            End-to-end aquarium solutions designed for beauty and longevity
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border bg-white p-6 text-center hover:shadow-md transition"
            >
              <service.icon className="mx-auto h-8 w-8 text-slate-900" />
              <h3 className="mt-4 text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>

              <Link
                href="/services"
                className="mt-4 inline-block text-sm font-medium underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
