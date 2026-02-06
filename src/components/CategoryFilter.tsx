import type { Category } from "../types/types";
import { categoryTabs } from "../constants/categories";

interface CategoryFilterItemProps {
  isActive?: boolean;
  category: Category;
  onSelect: (category: Category) => void;
}

function CategoryFilterItem({
  isActive,
  category,
  onSelect,
}: CategoryFilterItemProps) {
  return (
    <div
      onClick={() => {
        onSelect(category);
      }}
      className="relative flex h-16 w-15 flex-col items-center justify-center hover:cursor-pointer"
    >
      {isActive && (
        <div className="bg-active-bg absolute top-0 -right-2 rounded px-1 py-0.5">
          <p className="text-[10px] font-bold text-white">8926</p>
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
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="no-scrollbar flex flex-row overflow-x-auto">
      <div className="flex flex-row gap-2.5">
        {categoryTabs.map((category) => (
          <CategoryFilterItem
            isActive={category === selectedCategory}
            category={category}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
