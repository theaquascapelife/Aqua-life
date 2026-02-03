"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity.image";
import { useCart } from "@/store/useStore";

interface ProductCardProps {
  _id: string;
  title: string;
  price: number;
  image?: any; // Sanity image object
  slug: string;
}
export default function ProductCard({
  _id,
  title,
  price,
  image,
  slug,
}: ProductCardProps & { _id: string }) {
  const addItem = useCart((state) => state.addItem);
  let imageUrl: string | StaticImageData = "/placeholder.png";

  // ✅ Sanity image object
  if (image && typeof image === "object" && image.asset?._ref) {
    imageUrl = urlFor(image).width(500).height(500).url();
  }
  // ✅ Static local image (next/image import)
  else if (typeof image === "object") {
    imageUrl = image as StaticImageData;
  }
  // ✅ Remote string URL
  else if (typeof image === "string") {
    imageUrl = image;
  }

  return (
    <div className="group rounded-xl border bg-white p-4 transition hover:shadow-md">
      {/* Image */}
      <Link href={`/product/${slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>

        <p className="text-lg font-semibold">₹{price.toLocaleString()}</p>

        <Button
          size="sm"
          className="w-full"
          onClick={() =>
            addItem({
              _id,
              slug,
              title,
              price,
              image: imageUrl,
            })
          }
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
