// components/home/FeaturedProducts.tsx
import ProductCard from "@/components/product/ProductCard";
import Aqua_Plant from "@/assets/Aquatic_Plant.webp";
import Canister_Filter from "@/assets/Canister_Filter.jpg";
import LED from "@/assets/LED.jpg";
import Soil from "@/assets/Soil.jpeg";

const featuredProducts = [
  {
    title: "Java Moss Aquatic Plant",
    price: 499,
    image: Aqua_Plant,
    slug: "java-moss",
  },
  {
    title: "Aquarium LED Light 60cm",
    price: 3499,
    image: LED,
    slug: "aquarium-led-light",
  },
  {
    title: "External Canister Filter",
    price: 6899,
    image: Canister_Filter,
    slug: "external-canister-filter",
  },
  {
    title: "Aquarium Soil Substrate",
    price: 1999,
    image: Soil,
    slug: "aquarium-soil",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked products our customers love
            </p>
          </div>

          <a
            href="/shop"
            className="hidden text-sm font-medium underline md:block"
          >
            View All
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              {...product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
