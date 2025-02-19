import { useState, useEffect } from "react";
import { useListings } from "./useListings";

export function useFilteredListings() {
  const [searchTerm, setSearchTerm] = useState({
    parking: "",
    bedrooms: "",
    bathrooms: "",
    priceRange: [100000, 900000],
  });
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const { listings, isLoading } = useListings();

  const getUniqueValues = (listings: any[], key: string) => {
    return Array.from(new Set(listings.map((listing) => listing[key]))).sort((a, b) => a - b);
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 250);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
  };

  const filteredListings = listings.filter((listing) => {
    return (
      (!debouncedSearchTerm.parking || listing.Parking === Number(debouncedSearchTerm.parking)) &&
      (!debouncedSearchTerm.priceRange[0] || listing["Sale Price"] >= debouncedSearchTerm.priceRange[0]) &&
      (!debouncedSearchTerm.priceRange[1] || listing["Sale Price"] <= debouncedSearchTerm.priceRange[1]) &&
      (!debouncedSearchTerm.bedrooms || listing.Bedrooms === Number(debouncedSearchTerm.bedrooms)) &&
      (!debouncedSearchTerm.bathrooms || listing.Bathrooms === Number(debouncedSearchTerm.bathrooms))
    );
  });

  return {
    isLoading,
    filteredListings,
    searchTerm,
    handleSearch,
    getUniqueValues,
  };
}