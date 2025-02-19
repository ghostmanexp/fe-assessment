import { Range } from "react-range";

interface FilterSectionProps {
  searchTerm: {
    parking: string;
    bedrooms: string;
    bathrooms: string;
    priceRange: number[];
  };
  filterOptions: {
    bedrooms: number[];
    bathrooms: number[];
    parking: number[];
  };
  onSearch: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FilterSection({
  searchTerm,
  filterOptions,
  onSearch
}: FilterSectionProps) {
  return (
    <div className="filters-container">
      <select
        name="bedrooms"
        aria-label="Filter by bedrooms"
        value={searchTerm.bedrooms}
        onChange={onSearch}
        className="border p-2 rounded w-full"
      >
        <option value="">Any Bedrooms</option>
        {filterOptions.bedrooms.map((value) => (
          <option key={value} value={value}>{value} Bedrooms</option>
        ))}
      </select>

      <select
        name="bathrooms"
        aria-label="Filter by bathrooms"
        value={searchTerm.bathrooms}
        onChange={onSearch}
        className="border p-2 rounded w-full"
      >
        <option value="">Any Bathrooms</option>
        {filterOptions.bathrooms.map((value) => (
          <option key={value} value={value}>{value} Bathrooms</option>
        ))}
      </select>

      <select
        name="parking"
        aria-label="Filter by parking"
        value={searchTerm.parking}
        onChange={onSearch}
        className="border p-2 rounded w-full"
      >
        <option value="">Any Parking</option>
        {filterOptions.parking.map((value) => (
          <option key={value} value={value}>{value} Parking</option>
        ))}
      </select>

      <div className="col-span-2 flex flex-col items-center">
        <label className="font-medium">
          Price Range: ${searchTerm.priceRange[0].toLocaleString()} - ${searchTerm.priceRange[1].toLocaleString()}
        </label>

        <Range
          step={10000}
          min={0}
          max={1000000}
          values={searchTerm.priceRange}
          onChange={(values) => {
            onSearch({ target: { name: "priceRange", value: values } } as unknown as React.ChangeEvent<HTMLSelectElement>);
          }}
          renderTrack={({ props, children }) => (
            <div {...props} className="w-full h-2 bg-gray-300 rounded-full relative">
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;
            return <div key={key} {...restProps} className="h-4 w-4 bg-blue-600 rounded-full shadow-md cursor-pointer" />;
          }}
        />
      </div>
    </div>
  );
}