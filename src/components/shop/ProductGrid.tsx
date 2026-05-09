// components/shop/ProductsGrid.tsx

import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS_QUERY } from "@/lib/queries";
import { fetchSanityData } from "@/lib/sanity.fetch";

export const revalidate = 60;

export interface Product {
  _id: string;
  title: string;
  description: string | null;
  price: number;
  slug: {
    current: string;
  } | null;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

export default async function ProductsGrid() {
  const products = await fetchSanityData<Product[]>(PRODUCTS_QUERY);

  console.log("SANITY PRODUCTS:", products);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          title={product.title}
          price={product.price}
          image={product.image}
          slug={product.slug?.current ?? ""}
        />
      ))}
    </div>
  );
}