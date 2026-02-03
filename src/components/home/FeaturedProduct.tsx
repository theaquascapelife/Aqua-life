// Server Component (NO "use client")
import ProductCard from "@/components/product/ProductCard";
import { fetchSanityData } from "@/lib/sanity.fetch";
import { featuredProductsQuery } from "@/lib/queries";

interface FeaturedProduct {
  _id: string;
  title: string;
  price: number;
  slug: string;
  image?: any;
}

export default async function FeaturedProducts() {
  const products = await fetchSanityData<FeaturedProduct[]>(
    featuredProductsQuery,
  );

  if (!products?.length) return null;

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
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
