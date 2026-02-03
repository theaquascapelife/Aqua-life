"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Aqua Lifescape has transformed our living room — their design, care and support are unmatched!",
    author: "Mr. Verma",
    location: "Vasai",
  },
  {
    quote:
      "Professional team, top-quality equipment and responsive maintenance. Highly recommended!",
    author: "Mrs. Rao",
    location: "Mumbai",
  },
  {
    quote:
      "We installed a reef tank in our café — customers love it!",
    author: "Mr. Sharma",
    location: "Business Owner",
  },
  {
    quote:
      "Excellent maintenance service and stunning aquascape design.",
    author: "Mr. Patel",
    location: "Thane",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-linear-to-r from-green-400 to-sky-300">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">
            Client Testimonials
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by aquarium lovers across Mumbai
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto max-w-6xl"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full md:basis-1/2"
              >
                <TestimonialCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  );
}

/* --------------------------------------------------
   Testimonial Card
-------------------------------------------------- */

function TestimonialCard({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <div className="h-full rounded-2xl border border-border bg-white p-8 transition hover:border-primary ">
      {/* Stars */}
      <div className="mb-4 flex gap-1 text-blue-200">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        “{quote}”
      </p>

      {/* Author */}
      <div className="mt-6 text-sm font-medium text-foreground">
        {author}
        <span className="ml-2 text-muted-foreground">— {location}</span>
      </div>

      {/* Accent line */}
      <div className="mt-6 h-1 w-12 rounded-full bg-linear-to-r from-primary to-emerald-400" />
    </div>
  );
}
