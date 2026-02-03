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
