'use client'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string | StaticImageData;
  href: string;
}

export default function CategoryCard({
  title,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-56"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}
