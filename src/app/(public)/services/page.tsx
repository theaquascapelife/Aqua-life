// app/(public)/services/page.tsx
import { Fish, Wrench, Droplets, Package } from "lucide-react";

const services = [
  {
    icon: Fish,
    title: "Custom Aquarium Design",
    description:
      "Every space is unique — and so should your aquarium. Our designers work closely with you to create custom layouts that match your vision, décor, and space constraints.",
    items: [
      "Freshwater & Saltwater Aquariums",
      "Contemporary & Themed Designs",
      "Natural / Biotope Aquascapes",
      "Live Coral & Reef Tanks",
    ],
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "From structural planning to final setup, our trained technicians handle every detail with precision and care.",
    items: [
      "Tank Assembly & Setup",
      "Plumbing & Filtration Integration",
      "Lighting & Power Configuration",
      "Fish & Plant Introduction",
    ],
  },
  {
    icon: Droplets,
    title: "Maintenance & Aftercare",
    description:
      "A healthy aquarium requires regular attention. Our maintenance services help you enjoy a vibrant aquatic environment without the stress.",
    items: [
      "Weekly / Monthly Care Plans",
      "Water Quality Testing",
      "Algae Control & Glass Cleaning",
      "Filter Media Replacement",
    ],
  },
  {
    icon: Package,
    title: "Aquarium Supplies & Accessories",
    description:
      "We provide premium aquarium equipment and accessories sourced from trusted brands.",
    items: [
      "Advanced Filtration Systems",
      "Submersible & LED Lighting",
      "Heaters & Controllers",
      "Decorative Elements & Reef Decorations",
      "Nutrients & Fish Food",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end aquarium solutions designed for beauty,
            sustainability, and long-term care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 rounded-2xl bg-slate-900 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Let’s Build Your Perfect Aquarium
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Get expert guidance tailored to your space, lifestyle,
            and design vision.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            Book a Consultation
          </a>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service Card */
/* ------------------------------------------------------------------ */

function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: any;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border bg-white p-8 transition hover:shadow-lg">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
          <Icon className="h-6 w-6 text-slate-900" />
        </div>
        <h2 className="text-xl font-semibold md:text-2xl">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Features */}
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}
