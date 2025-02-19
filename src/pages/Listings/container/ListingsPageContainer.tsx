import { useState } from "react";
import { useSavedProperties } from "../../../store/useSavedProperties";
import { useFilteredListings } from "../../../hooks/useFilteredListings";
import ListingsPagePresenter from "../presenter/ListingsPagePresenter";

export default function ListingsPageContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { savedProperties } = useSavedProperties();
  const {
    isLoading,
    filteredListings,
    searchTerm,
    handleSearch,
    getUniqueValues
  } = useFilteredListings();

  const handleModalToggle = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  const filterOptions = {
    bedrooms: getUniqueValues(filteredListings, "Bedrooms"),
    bathrooms: getUniqueValues(filteredListings, "Bathrooms"),
    parking: getUniqueValues(filteredListings, "Parking")
  };

  return (
    <ListingsPagePresenter
      isLoading={isLoading}
      listings={filteredListings}
      savedProperties={savedProperties}
      isModalOpen={isModalOpen}
      searchTerm={searchTerm}
      filterOptions={filterOptions}
      onSearch={handleSearch}
      onModalToggle={handleModalToggle}
    />
  );
}