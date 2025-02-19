import { Link } from "react-router-dom";
import { Listing } from "../../../types/listing";
import ContactAgentForm from "../../../components/ui/ContactAgentForm";
import SavedPropertiesModal from "../../../components/ui/SavedPropertiesModal";
import ListingStats from "../../../components/presenters/ListingStats";
import ListingHeader from "../../../components/presenters/ListingHeader";

interface ListingDetailsPagePresenterProps {
  listing: Listing;
  isSaved: boolean;
  isModalOpen: boolean;
  onSaveProperty: () => void;
  onModalClose: () => void;
}

export default function ListingDetailsPagePresenter({
  listing,
  isSaved,
  isModalOpen,
  onSaveProperty,
  onModalClose,
}: ListingDetailsPagePresenterProps) {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
      {/* Left Section - Listing Details */}
      <div>
        <Link to="/" className="text-blue-600 hover:underline flex items-center mb-4">
          <span className="mr-2 text-lg">&larr;</span> Back to Listings
        </Link>

        <ListingHeader listing={listing} />

        <div className="w-full rounded-lg overflow-hidden mt-4 shadow-lg">
          <img
            src={listing.PictureURL}
            alt={listing.Title}
            className="w-full h-96 object-cover"
          />
        </div>

        <ListingStats listing={listing} />

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Property Description</h2>
          <p className="text-gray-700 leading-relaxed">{listing.Description}</p>
        </div>
      </div>

      {/* Right Section - Save Button & Contact Form */}
      <div className="space-y-4">
        <button
          onClick={onSaveProperty}
          className={`w-full px-4 py-2 border rounded-lg flex items-center justify-center gap-2 transition ${
            isSaved ? "bg-red-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {isSaved ? "❤️ Saved" : "🤍 Save Property"}
        </button>

        <div className="bg-gray-300 p-6 shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Agent</h2>
          <ContactAgentForm />
        </div>
      </div>
      
      <SavedPropertiesModal isOpen={isModalOpen} onClose={onModalClose} />
    </div>
  );
}