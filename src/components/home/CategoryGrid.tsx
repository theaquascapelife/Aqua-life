'use client'

import CategoryCard from "./CategoryCard";
import tool from "../../assets/tools.webp";
import Aqua_Plant from "../../assets/Aqua_Plant.jpg";
import Aquarium from "../../assets/Aquarium.jpg";
import Fish from "../../assets/Fish.jpg";
import Food from "../../assets/Food.jpg";
import { StaticImageData } from "next/image";

type Category = {
  title: string;
  image: StaticImageData;
  href: string;
};

const categories: Category[] = [
  {
    title: "Aquatic Plants",
    image: Aqua_Plant,
    href: "/shop/plants",
  },
  {
    title: "Aquarium Fish",
    image: Fish,
    href: "/shop/fish",
  },
  {
    title: "Accessories",
    image: tool,
    href: "/shop/accessories",
  },
  {
    title: "Aquariums",
    image: Aquarium,
    href: "/shop/aquariums",
  },
  {
    title: "Food & Care",
    image: Food,
    href: "/shop/food",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our wide range of aquarium products
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
