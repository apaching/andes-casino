import { Search } from "lucide-react";
import type { Category } from "../types/types";
import { categoryTabs } from "../constants/categories";

/**
 * Decided to keep CategoryFilterItem in the same file
 * because it's not gonna be used anywhere else. Same
 * with ProviderFilter
 */
interface CategoryFilterItemProps {
  isActive?: boolean;
  category: Category;
  onCategorySelect: (category: Category) => void;
  amount?: number;
}

function CategoryFilterItem({
  isActive,
  category,
  onCategorySelect,
  amount = 0,
}: CategoryFilterItemProps) {
  return (
    <div
      onClick={() => {
        onCategorySelect(category);
      }}
      className="relative flex h-16 w-15 flex-col items-center justify-center hover:cursor-pointer"
    >
      {isActive && (
        <div className="bg-active-bg absolute top-0 -right-2 rounded px-1 py-0.5">
          <p className="text-[10px] font-bold text-white">{amount}</p>
        </div>
      )}
      <img
        className="h-10"
        src={
          isActive
            ? `/category_icons/active/${category.value}_active.webp`
            : `/category_icons/inactive/${category.value}_off.webp`
        }
      />
      <p
        className={`${isActive ? "text-primary underline" : "text-txt-secondary"} text-xs whitespace-nowrap uppercase decoration-2 underline-offset-2`}
      >
        {category.label}
      </p>
    </div>
  );
}

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
