import { useEffect } from "react";
import Carousel from "../components/Carousel";
import GameList from "../components/GameList";
import { useFilter } from "../hooks/useFilter";
import SearchBar from "../components/SearchBar";
import type { Category, Provider } from "../types/types";
import CategoryFilter from "../components/CategoryFilter";
import ProviderFilter from "../components/ProviderFilter";
import { gameApi } from "../api/games";
import { useGame } from "../hooks/useGame";
import InfoSection from "../components/InfoSection";
import { providerApi } from "../api/providers";
import { useProvider } from "../hooks/useProvider";

/**
 * Provider gets filtered depending on what category
 * -> Inicio -> ALL providers
 * -> Click a category provide all
 */

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
    selectedProvider,
    setSelectedProvider,
  } = useFilter();

  // prettier-ignore
  const { 
    games,
    setGames, 
    counts, 
    setCounts,
    total,
    setTotal,
    providerCounts,
    setProviderCounts
  } = useGame();

  // prettier-ignore
  const {
    providers,
    setProviders,
  } = useProvider();

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleProviderClick = (provider: Provider) => {
    if (selectedProvider === provider) {
      setSelectedProvider(null);
    } else {
      setSelectedProvider(provider);
    }
  };

  useEffect(() => {
    console.log(selectedProvider);
  }, [selectedProvider]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [gamesResponse, providersResponse] = await Promise.all([
          gameApi.getGames(),
          providerApi.getProviders(),
        ]);

        setGames(gamesResponse.games);
        setCounts(gamesResponse.counts);
        setTotal(gamesResponse.total);
        setProviderCounts(gamesResponse.providerCounts);

        setProviders(providersResponse.providers);
      } catch (error) {
        if (error instanceof Error) {
          /**
           *  Handle by showing toast, etc.
           */
          console.log(error.message);
        } else {
          console.log("Something went wrong");
        }
      } finally {
        /** */
      }
    };

    loadData();
  }, []);

  const getCategoryCount = () => {
    if (selectedCategory.value === "home") {
      return total;
    }

    return counts[selectedCategory.value] || 0;
  };

  const filteredGames = games.filter((game) =>
    selectedCategory.value === "home"
      ? game
      : selectedCategory.value === "poular"
        ? game.isHot === true
        : selectedCategory.value === game.category
          ? game
          : null,
  );

  return (
    <main className="flex h-screen w-screen flex-col">
      <div className="flex flex-col gap-4 px-3">
        <Carousel />
        <ProviderFilter
          providers={providers}
          selectedProvider={selectedProvider}
          onProviderClick={handleProviderClick}
          providerCounts={providerCounts}
        />
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
