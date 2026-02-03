// app/(public)/shop/page.tsx
import Filters from "@/components/shop/Filters";
import ProductsGrid from "@/components/shop/ProductGrid";
import SortSelect from "@/components/shop/SortSelect";

export default function ShopPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              All Products
            </h1>
            <p className="mt-1 text-muted-foreground">
              Browse our complete range of aquarium products
            </p>
          </div>

          <SortSelect />
        </div>

        {/* Content */}
        <div className="flex gap-8">
          <Filters />
          <div className="flex-1">
            <ProductsGrid />
          </div>
        </div>

      </div>
    </section>
  );
}
