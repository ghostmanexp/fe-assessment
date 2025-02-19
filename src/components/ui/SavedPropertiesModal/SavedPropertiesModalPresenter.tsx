import { Listing } from "../../../types/listing";
import SavedPropertyItem from "./SavedPropertyItem";
import ModalOverlay from "./ModalOverlay";

interface SavedPropertiesModalPresenterProps {
  isOpen: boolean;
  onClose: () => void;
  savedListings: Listing[];
  onRemoveProperty: (id: number) => void;
  onViewProperty: (id: number) => void;
  onClearAll: () => void;
}

export default function SavedPropertiesModalPresenter({
  isOpen,
  onClose,
  savedListings,
  onRemoveProperty,
  onViewProperty,
  onClearAll,
}: SavedPropertiesModalPresenterProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClose={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full border">
        <h2 className="text-2xl font-semibold mb-4">Saved Properties</h2>

        {savedListings.length === 0 ? (
          <p className="text-gray-500">You haven't saved any properties yet.</p>
        ) : (
          <ul className="space-y-4 max-h-96 overflow-y-auto">
            {savedListings.map((listing) => (
              <SavedPropertyItem
                key={listing.Id}
                listing={listing}
                onRemove={onRemoveProperty}
                onView={onViewProperty}
              />
            ))}
          </ul>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition"
        >
          Close
        </button>

        {savedListings.length > 0 && (
          <button
            onClick={onClearAll}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Clear All
          </button>
        )}
      </div>
    </ModalOverlay>
  );
}
