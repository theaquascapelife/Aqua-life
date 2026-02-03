// components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/aquascaping-styles-iwagumi-aquarium-2.jpg"
        alt="Luxury custom aquarium with plants and fish"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            {/* Tagline */}
            {/* <p className="mb-3 text-sm uppercase tracking-widest text-primary">
              Premium Aquarium Design & Services
            </p> */}

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Transforming Spaces into{" "}
              <span className="text-[#65D8EC]">Underwater Wonders</span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Premium Aquarium Design | Professional Installation | Trusted
              Maintenance Solutions
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-white/80">
              Elevate your home or business with stunning aquatic environments
              that inspire calm, beauty, and life.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                <Link href="/shop">Explore Products</Link>{" "}
              </Button>
              <Button size="lg" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-none text-black bg-[#65D8EC] hover:text-black"
                asChild
              >
                <a href="tel:+918895771074">Call Now: +91-8895771074</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
