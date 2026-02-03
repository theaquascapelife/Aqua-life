import { groq } from 'next-sanity';

export const PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    image
  }
`;

export const featuredProductsQuery = `
  *[_type == "product" && isFeatured == true][0...4] {
    _id,
    title,
    price,
    slug,
    image
  }
`;
