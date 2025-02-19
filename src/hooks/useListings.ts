import { useEffect, useState } from "react";
import listingsData from "../data/listings.json";
import { Listing } from "../types/listing";
export function useListings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setListings(listingsData);
      setIsLoading(false);
    }, 500);
  }, []);

  return { listings, isLoading };
}