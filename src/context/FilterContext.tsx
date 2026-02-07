import { createContext } from "react";
import { type Category } from "../types/types";

export interface FilterContextType {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  selectedProvider: string;
  setSelectedProvider: (provider: string) => void;
  isSearchActive: boolean;
  setIsSearchActive: (isActive: boolean) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);
