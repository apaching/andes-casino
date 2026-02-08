import { Search } from "lucide-react";
import type { Category } from "../types/types";
import { categoryTabs } from "../constants/categories";
import CategoryFilterItem from "./CategoryFilterItem";

interface CategoryFilterProps {
  isSearchActive: boolean;
  onSearchClick: () => void;
  selectedCategory: Category;
  onCategorySelect: (category: Category) => void;
  amount: number;
}

export default function CategoryFilter({
  isSearchActive,
  onSearchClick,
  selectedCategory,
  onCategorySelect,
  amount,
}: CategoryFilterProps) {
  return (
    <div className="no-scrollbar mx -mx-4 flex flex-row overflow-x-auto">
      <div className="flex flex-row items-center gap-2.5 px-2">
        <div
          onClick={onSearchClick}
          className="flex h-16 w-16 flex-col items-center justify-center hover:cursor-pointer"
        >
          <Search
            size={40}
            className={`${isSearchActive ? "text-primary underline" : "text-[#C7C7C7]"}`}
          />
          <p
            className={`${isSearchActive ? "text-primary underline" : "text-txt-secondary"} text-xs whitespace-nowrap uppercase decoration-2 underline-offset-2`}
          >
            Buscar
          </p>
        </div>

        <div className="bg-txt-secondary/50 h-[55%] w-px" />

        {categoryTabs.map((category, index) => (
          <CategoryFilterItem
            key={index}
            isActive={category === selectedCategory}
            category={category}
            onCategorySelect={onCategorySelect}
            amount={amount}
          />
        ))}
      </div>
    </div>
  );
}
