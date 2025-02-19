import { Link } from "react-router-dom";
import { SavedPropertyItemProps } from "./types";

export default function SavedPropertyItem({ 
  listing, 
  onRemove, 
  onView 
}: SavedPropertyItemProps) {
  return (
    <li className="border p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{listing.Title}</h3>
        <p className="text-sm text-gray-500">{listing.Location}</p>
      </div>
      <div className="flex gap-2">
        <Link 
          to={`/listing/${listing.Id}`}
          onClick={() => onView(listing.Id)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          View
        </Link>
        <button
          onClick={() => onRemove(listing.Id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
