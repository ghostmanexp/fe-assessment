import { Listing } from "../../../types/listing";

export interface SavedPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SavedPropertyItemProps {
  listing: Listing;
  onRemove: (id: number) => void;
  onView: (id: number) => void;
}
