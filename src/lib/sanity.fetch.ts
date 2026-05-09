import { sanityClient } from "./sanity.client";

export async function fetchSanityData<T>(query: string) {
  return sanityClient.fetch<T>(
    query,
    {},
    {
      cache: "no-store",
    },
  );
}