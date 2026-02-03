// components/cart/CartItem.tsx
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
}

export default function CartItem({
  title,
  price,
  quantity,
  image,
  slug,
}: CartItemProps) {
  return (
    <div className="flex gap-4 border-b py-4">
      {/* Image */}
      <Link href={`/product/${slug}`} className="relative h-20 w-20 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="rounded-md object-cover"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link href={`/product/${slug}`} className="text-sm font-medium">
            {title}
          </Link>

          <p className="mt-1 text-sm text-muted-foreground">
            ₹{price.toLocaleString()}
          </p>
        </div>

        {/* Quantity + Remove */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline">
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-6 text-center text-sm">{quantity}</span>

            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button size="icon" variant="ghost" className="text-red-500">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
