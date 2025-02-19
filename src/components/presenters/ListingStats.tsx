import { Listing } from "../../types/listing";

interface ListingStatsProps {
  listing: Listing;
}

export default function ListingStats({ listing }: ListingStatsProps) {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <StatItem label="BED" value={listing.Bedrooms} />
      <StatItem label="BATH" value={listing.Bathrooms} />
      <StatItem label="PARKING" value={listing.Parking} />
      <StatItem label="SQFT" value={listing.Sqft.toLocaleString().replace(/,/g, '')} />
      <StatItem label="YEAR BUILT" value={listing.YearBuilt} />
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: number | string;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
      <span className="text-xl font-semibold">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}