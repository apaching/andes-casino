import { useEffect } from "react";
import Carousel from "../components/Carousel";
import GameList from "../components/GameList";
import { useFilter } from "../hooks/useFilter";
import SearchBar from "../components/SearchBar";
import type { Category } from "../types/types";
import CategoryFilter from "../components/CategoryFilter";
import ProviderFilter from "../components/ProviderFilter";
import { gameApi } from "../api/games";
import { useGame } from "../hooks/useGame";
import InfoSection from "../components/InfoSection";

export default function Main() {
  /**
   * Decided to use useContext for these states because I noticed
   * on the original site, when you navigate to another page, upon
   * navigating back, the state of the filter & fetched games remain
   * the same
   */

  const {
    selectedCategory,
    setSelectedCategory,
    isSearchActive,
    setIsSearchActive,
  } = useFilter();

  // prettier-ignore
  const { 
    games,
    setGames, 
    counts, 
    setCounts,
    total,
    setTotal
  } = useGame();

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const loadGames = async () => {
      // setIsLoading -> true

      try {
        const response = await gameApi.getGames();

        if (!response.success) alert(response.error);

        setGames(response.games);
        setCounts(response.counts);
        setTotal(response.total);
      } finally {
        // setIsLoading -> false
      }
    };

    loadGames();
  }, []);

  const filteredGames = games.filter((game) =>
    selectedCategory.value === "home"
      ? game
      : selectedCategory.value === "poular"
        ? game.isHot === true
        : selectedCategory.value === game.category
          ? game
          : null,
  );

  const getCategoryCount = () => {
    if (selectedCategory.value === "home") {
      return total;
    }

    return counts[selectedCategory.value] || 0;
  };

  return (
    <main className="flex h-screen w-screen flex-col">
      <div className="flex flex-col gap-4 px-3">
        <Carousel />
        <ProviderFilter />
        <CategoryFilter
          isSearchActive={isSearchActive}
          onSearchClick={handleSearchClick}
          selectedCategory={selectedCategory}
          onCategorySelect={handleSelectCategory}
          amount={getCategoryCount()}
        />
        {isSearchActive && <SearchBar />}
        <GameList games={filteredGames} />
        {selectedCategory.value === "home" && <InfoSection />}
      </div>
    </main>
  );
}
