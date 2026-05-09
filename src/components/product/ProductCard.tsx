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
  image?: any;
  slug: string;
}

export default function ProductCard({
  _id,
  title,
  price,
  image,
  slug,
}: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  let imageForUI: string | StaticImageData = "/placeholder.png";
  let imageForCart: string = "/placeholder.png";

  // ✅ Sanity image
  if (image && typeof image === "object" && image.asset?._ref) {
    imageForCart = urlFor(image).width(500).height(500).url();
    imageForUI = imageForCart;
  }
  // ✅ Local static image
  else if (typeof image === "object") {
    imageForUI = image as StaticImageData;
    imageForCart = "/placeholder.png"; // or a public fallback
  }
  // ✅ Remote URL
  else if (typeof image === "string") {
    imageForUI = image;
    imageForCart = image;
  }

  return (
    <div className="group rounded-xl border bg-white p-4 transition hover:shadow-md">
      <Link href={`/product/${slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={imageForUI}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>
        <p className="text-lg font-semibold">₹{price?.toLocaleString()}</p>

        <Button
          size="sm"
          className="w-full"
          onClick={() =>
            addItem({
              _id,
              slug,
              title,
              price,
              image: imageForCart, // ✅ always string
            })
          }
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
