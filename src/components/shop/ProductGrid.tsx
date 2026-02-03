// components/shop/ProductsGrid.tsx
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS_QUERY } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.client";

// const products = [
//   {
//     title: "Java Moss Aquatic Plant",
//     price: 499,
//     image: "/products/java-moss.jpg",
//     slug: "java-moss",
//   },
//   {
//     title: "Aquarium LED Light",
//     price: 3499,
//     image: "/products/led-light.jpg",
//     slug: "aquarium-led-light",
//   },
//   {
//     title: "External Canister Filter",
//     price: 6899,
//     image: "/products/filter.jpg",
//     slug: "external-canister-filter",
//   },
// ];

export default async function ProductsGrid() {
  const products = await sanityClient.fetch(PRODUCTS_QUERY);
  // const products = await sanityClient.fetch(`*[_type == "product"]`);
  console.log("SANITY PRODUCTS:", products);

  // console.log(products);
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
