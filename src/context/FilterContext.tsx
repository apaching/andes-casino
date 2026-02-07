import { createContext } from "react";
import type { Category, Provider } from "../types/types";

export interface FilterContextType {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  selectedProvider: Provider | null;
  setSelectedProvider: (provider: Provider | null) => void;
  isSearchActive: boolean;
  setIsSearchActive: (isActive: boolean) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);
