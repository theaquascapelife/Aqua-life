import { sanityClient } from "./sanity.client";

export async function fetchSanityData<T>(query: string) {
  return sanityClient.fetch<T>(
    query,
    {},
    {
      next: {
        revalidate: 60,
      },
    },
  );
}