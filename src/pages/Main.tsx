import Carousel from "../components/Carousel";
import GameList from "../components/GameList";
import { useFilter } from "../hooks/useFilter";
import type { Category } from "../types/types";
import ProviderFilter from "../components/ProviderFilter";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";

export default function Main() {
  /**
   * Decided to use useContext for these states because I noticed
   * on the original site, when you navigate to another page, upon
   * navigating back, the state of the filter remains the same
   */
  const {
    selectedCategory,
    setSelectedCategory,
    isSearchActive,
    setIsSearchActive,
  } = useFilter();

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <main className="flex h-screen w-screen flex-col">
      <div className="flex flex-col gap-4 px-4">
        <Carousel />
        <ProviderFilter />
        <CategoryFilter
          isSearchActive={isSearchActive}
          onSearchClick={handleSearchClick}
          selectedCategory={selectedCategory}
          onCategorySelect={handleSelectCategory}
        />
        {isSearchActive && <SearchBar />}
        <GameList />
      </div>
    </main>
  );
}
