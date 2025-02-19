import { Listing } from "../../types/listing";

interface ListingHeaderProps {
  listing: Listing;
}

export default function ListingHeader({ listing }: ListingHeaderProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{listing.Title}</h1>
        <p className="text-lg text-gray-500 mt-1">{listing.Location}</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-gray-600">
          ${listing["Sale Price"].toLocaleString().replace(/,/g, ' ')}
        </p>
        <p className="text-gray-500">
          Date Listed: {new Date(listing.DateListed).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
      </div>
    </div>
  );
}
