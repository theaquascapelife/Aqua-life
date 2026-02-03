// components/blog/BlogCard.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string | StaticImageData;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  slug,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group overflow-hidden rounded-xl border bg-white transition hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-16/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {excerpt}
        </p>

        <span className="mt-4 inline-block text-sm font-medium underline">
          Read More
        </span>
      </div>
    </Link>
  );
}
