// app/(public)/wishlist/page.tsx
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

const wishlistItems = [
  {
    title: "Java Moss Aquatic Plant",
    price: 499,
    image: "/products/java-moss.jpg",
    slug: "java-moss",
  },
  {
    title: "Aquarium LED Light 60cm",
    price: 3499,
    image: "/products/led-light.jpg",
    slug: "aquarium-led-light",
  },
];

export default function WishlistPage() {
  const isEmpty = wishlistItems.length === 0;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            My Wishlist
          </h1>
          <p className="mt-2 text-muted-foreground">
            Save your favorite products to buy later
          </p>
        </div>

        {/* Empty State */}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center rounded-xl border py-20 text-center">
            <p className="text-lg font-medium">
              Your wishlist is empty
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse products and add them to your wishlist.
            </p>

            <Link
              href="/shop"
              className="mt-6 underline text-sm font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {/* Wishlist Grid */}
        {!isEmpty && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {wishlistItems.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
