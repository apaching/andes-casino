import type { Category } from "../types/types";

interface CategoryFilterItemProps {
  isActive?: boolean;
  category: Category;
  onCategorySelect: (category: Category) => void;
  amount?: number;
}

export default function CategoryFilterItem({
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
