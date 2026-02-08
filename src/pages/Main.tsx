import { useEffect, useState } from "react";
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
import ProviderDialog from "../components/ProviderDialog";

export default function Main() {
  const [isProviderDialogVisible, setIsProviderDialogVisible] = useState(false);

  /**
   * Decided to use useContext for these states because I noticed
   * on the original site, when you navigate to another page, upon
   * navigating back, the state of the filter & fetched games remain
   * the same
   */

  /**
   * Debated if the children components should consume the context
   * instead of this parent page
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

  const handleDialogToggle = (status: boolean) => {
    setIsProviderDialogVisible(status);
  };

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

    // If selectedCategory is a provider, use providerCounts
    if (providerCounts[selectedCategory.value] !== undefined) {
      return providerCounts[selectedCategory.value];
    }

    return counts[selectedCategory.value] || 0;
  };

  /**
   *  selectedCategory === home -> all providers
   *  selectedCategory === anything else -> return
   *  provider if at least one game has that category & provider
   */
  const filteredProviders =
    selectedCategory.value === "home"
      ? providers
      : providers.filter((provider) =>
          games.some(
            (game) =>
              game.category === selectedCategory.value &&
              game.provider === provider.value,
          ),
        );

  /**
   * Calculate provider counts based on selected category
   */
  const filteredProviderCounts =
    selectedCategory.value === "home"
      ? providerCounts
      : providers.reduce(
          (acc, provider) => {
            acc[provider.value] = games.filter((game) => {
              const categoryMatch =
                selectedCategory.value === "popular"
                  ? game.isHot === true
                  : selectedCategory.value === "pragmatic"
                    ? game.provider === "pragmatic"
                    : selectedCategory.value === "fat_panda"
                      ? game.provider === "fat_panda"
                      : selectedCategory.value === game.category;

              return categoryMatch && game.provider === provider.value;
            }).length;
            return acc;
          },
          {} as Record<string, number>,
        );

  const filteredGames = games.filter((game) => {
    const categoryMatch =
      selectedCategory.value === "home"
        ? true
        : selectedCategory.value === "popular"
          ? game.isHot === true
          : selectedCategory.value === "pragmatic"
            ? game.provider === "pragmatic"
            : selectedCategory.value === "fat_panda"
              ? game.provider === "fat_panda"
              : selectedCategory.value === game.category;

    const providerMatch =
      !selectedProvider || game.provider === selectedProvider.value;

    return categoryMatch && providerMatch;
  });

  return (
    <div className="relative flex flex-col gap-4 px-3">
      <Carousel />
      <ProviderFilter
        providers={filteredProviders}
        selectedProvider={selectedProvider}
        onProviderClick={handleProviderClick}
        providerCounts={filteredProviderCounts}
        onMasClick={handleDialogToggle}
      />
      <CategoryFilter
        isSearchActive={isSearchActive}
        onSearchClick={handleSearchClick}
        selectedCategory={selectedCategory}
        onCategorySelect={handleSelectCategory}
        amount={getCategoryCount()}
      />
      <SearchBar isOpen={isSearchActive} />
      <GameList games={filteredGames} />
      <InfoSection isVisible={selectedCategory.value === "home"} />
      <ProviderDialog
        providers={filteredProviders}
        isOpen={isProviderDialogVisible}
        onClose={handleDialogToggle}
        selectedProvider={selectedProvider}
        onProviderClick={handleProviderClick}
        providerCounts={filteredProviderCounts}
      />
    </div>
  );
}
