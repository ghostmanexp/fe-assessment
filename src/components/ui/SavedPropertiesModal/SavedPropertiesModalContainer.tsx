import { useSavedProperties } from "../../../store/useSavedProperties";
import { useListings } from "../../../hooks/useListings";
import SavedPropertiesModalPresenter from "./SavedPropertiesModalPresenter";
import { SavedPropertiesModalProps } from "./types";

export default function SavedPropertiesModalContainer({
  isOpen,
  onClose
}: SavedPropertiesModalProps) {
  const { listings } = useListings();
  const { savedProperties, toggleSaved, clearSavedProperties } = useSavedProperties();

  const savedListings = listings.filter((listing) => 
    savedProperties.includes(listing.Id)
  );

  const handleRemoveProperty = (id: number) => {
    toggleSaved(id);
  };

  const handleViewProperty = (_: number) => {
    onClose();
  };

  return (
    <SavedPropertiesModalPresenter
      isOpen={isOpen}
      onClose={onClose}
      savedListings={savedListings}
      onRemoveProperty={handleRemoveProperty}
      onViewProperty={handleViewProperty}
      onClearAll={clearSavedProperties}
    />
  );
}
