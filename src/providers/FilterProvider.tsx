import { useState } from "react";
import type { Category } from "../types/types";
import { categoryTabs } from "../constants/categories";
import { FilterContext } from "../context/FilterContext";

export default function FilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // prettier-ignore
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryTabs[0]);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        selectedProvider: selectedProvider,
        setSelectedProvider: setSelectedProvider,
        isSearchActive: isSearchActive,
        setIsSearchActive: setIsSearchActive,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
