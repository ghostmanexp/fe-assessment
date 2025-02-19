import { useState } from "react";
import { useParams } from "react-router-dom";
import { useListings } from "../../../hooks/useListings";
import { useSavedProperties } from "../../../store/useSavedProperties";
import ListingDetailsPagePresenter from "../presenter/ListingDetailsPagePresenter";

export default function ListingDetailsPageContainer() {
  const { listings } = useListings();
  const { id } = useParams();
  const { savedProperties, toggleSaved } = useSavedProperties();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const listing = listings.find((l) => l.Id === Number(id));
  const isSaved = savedProperties.includes(Number(id));

  const handleSaveProperty = () => {
    toggleSaved(Number(id));
    if (!isSaved) setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Listing not found.</p>
      </div>
    );
  }

  return (
    <ListingDetailsPagePresenter
      listing={listing}
      isSaved={isSaved}
      isModalOpen={isModalOpen}
      onSaveProperty={handleSaveProperty}
      onModalClose={handleModalClose}
    />
  );
}