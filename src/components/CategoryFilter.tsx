// import type { Category } from "../types/types";

interface CategoryFilterProps {}

// const categories: Category[] = [
//   { label: "Inicio", value: "home" },
//   { label: "Popular", value: "popular" },
//   { label: "Jackpot", value: "jackpot" },
//   { label: "Nuevo", value: "new" },
//   { label: "Casual", value: "casual" },
//   { label: "Pragmatic", value: "pragmatic" },
//   { label: "Fat Panda", value: "fat_panda" },
//   { label: "Playtech", value: "playtech" },
//   { label: "Slots", value: "slots" },
//   { label: "Bingo", value: "bingo" },
//   { label: "En Vivo", value: "live" },
//   { label: "Cartas", value: "cards" },
//   { label: "Otros", value: "others" },
// ];

function CategoryFilterItem({ isActive = true }: { isActive?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <img className="h-10" src="/category_icons/active/home_active.webp" />
      <p
        className={`${isActive ? "text-primary underline" : "text-txt-secondary"} text-xs decoration-2 underline-offset-2`}
      >
        INICIO
      </p>
    </div>
  );
}

export default function CategoryFilter({}: CategoryFilterProps) {
  return (
    <div className="no-scrollbar flex flex-row overflow-x-auto">
      <div className="flex flex-row">
        <CategoryFilterItem />
      </div>
    </div>
  );
}
