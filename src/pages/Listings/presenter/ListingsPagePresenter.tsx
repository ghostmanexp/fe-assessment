import SavedPropertiesModal from "../../../components/ui/SavedPropertiesModal";
import ListingCard from "../../../components/presenters/ListingCard";
import FilterSection from "../../../components/presenters/FilterSection";
import { Listing } from "../../../types/listing";

interface FilterOptions {
  bedrooms: number[];
  bathrooms: number[];
  parking: number[];
}

interface ListingsPagePresenterProps {
  isLoading: boolean;
  listings: Listing[];
  savedProperties: number[];
  isModalOpen: boolean;
  searchTerm: {
    parking: string;
    bedrooms: string;
    bathrooms: string;
    priceRange: number[];
  };
  filterOptions: FilterOptions;
  onSearch: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onModalToggle: (isOpen: boolean) => void;
}

export default function ListingsPagePresenter({
  isLoading,
  listings,
  savedProperties,
  isModalOpen,
  searchTerm,
  filterOptions,
  onSearch,
  onModalToggle
}: ListingsPagePresenterProps) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Real Estate Listings</h1>
        {savedProperties.length > 0 && (
          <button
            onClick={() => onModalToggle(true)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>{savedProperties.length} Saved</span>
          </button>
        )}
      </header>

      <FilterSection
        searchTerm={searchTerm}
        filterOptions={filterOptions}
        onSearch={onSearch}
      />

      {isLoading ? (
        <p>Loading listings...</p>
      ) : (
        <>
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <ListingCard
                  key={listing.Id}
                  listing={listing}
                  isSaved={savedProperties.includes(listing.Id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </>
      )}

      <SavedPropertiesModal
        isOpen={isModalOpen}
        onClose={() => onModalToggle(false)}
      />
    </div>
  );
}