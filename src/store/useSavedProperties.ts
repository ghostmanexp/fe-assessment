import { create } from "zustand";

interface SavedPropertiesStore {
  savedProperties: number[];
  toggleSaved: (id: number) => void;
  clearSavedProperties: () => void;
}

export const useSavedProperties = create<SavedPropertiesStore>((set, _) => ({
  savedProperties: JSON.parse(localStorage.getItem("savedProperties") || "[]"),

  toggleSaved: (id: number) => {
    set((state) => {
      const isSaved = state.savedProperties.includes(id);
      const newSavedProperties = isSaved ? state.savedProperties.filter((propId) => propId !== id) : [...state.savedProperties, id];
      localStorage.setItem("savedProperties", JSON.stringify(newSavedProperties));

      return { savedProperties: newSavedProperties };
    });
  },

  clearSavedProperties: () => {
    localStorage.removeItem("savedProperties");
    set({ savedProperties: [] });
  },
}));