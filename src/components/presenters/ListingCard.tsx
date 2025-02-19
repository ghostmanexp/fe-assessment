import { Link } from "react-router-dom";
import { Listing } from "../../types/listing";

interface ListingCardProps {
  listing: Listing;
  isSaved: boolean;
}

export default function ListingCard({ listing, isSaved }: ListingCardProps) {
  return (
    <div className={`listing-card flex flex-col h-full ${isSaved ? "saved" : ""}`}>
      <div className="flex-grow">
        <img 
          src={listing.ThumbnailURL} 
          alt={listing.Title} 
          className="w-full h-40 object-cover rounded-md" 
        />
        <h2 className="text-lg font-semibold mt-2">{listing.Title}</h2>
        <p className="text-gray-500">{listing.Location}</p>
        <p className="text-sm text-gray-600">
          {listing.Bedrooms} Beds | {listing.Bathrooms} Baths
        </p>
        <p className="price-text">
          ${listing["Sale Price"].toLocaleString().replace(/,/g, ' ')}
        </p>
      </div>
      <Link to={`/listing/${listing.Id}`} className="mt-auto">
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
}