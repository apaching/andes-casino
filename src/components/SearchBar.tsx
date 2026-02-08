import { LoaderCircle, Search } from "lucide-react";
import { gameApi } from "../api/games";
import type { Game } from "../types/types";
import { useEffect, useRef, useState } from "react";
import SearchResultItem from "./SearchResult";

interface SearchBarProps {
  isOpen: boolean;
}

export default function SearchBar({ isOpen }: SearchBarProps) {
  if (!isOpen) return null;

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length < 4) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    const debounce = setTimeout(async () => {
      try {
        const response = await gameApi.searchGame(searchQuery, 0, 10);
        setSearchResults(response.games);
        setIsDropdownOpen(true);
      } catch (error) {
        /**
         * Handle error
         */
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchContainerRef} className="relative w-full">
      <Search className="absolute top-2 left-3 text-[#9CA3AF]" size={16} />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
        placeholder="Encuentra tu juego"
        className="w-full rounded-sm border border-[#9CA3AF] px-1 py-1 pl-9 text-sm text-[#9CA3AF]"
      />

      {isDropdownOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 max-h-96 w-full overflow-y-auto rounded-xl bg-[#eaecf3e6]">
          {isLoading && (
            <div className="flex items-center justify-center p-4">
              <LoaderCircle className="animate-spin" />
            </div>
          )}

          {!isLoading &&
            searchResults.length === 0 &&
            searchQuery.trim().length > 4 && (
              <div className="flex items-center justify-center p-4">
                <p className="text-sm text-[#9CA3AF]">
                  No se ha encontrado ningún juego.
                </p>
              </div>
            )}

          {!isLoading && searchResults.length > 0 && (
            <div className="grid grid-cols-2 gap-2 px-2 py-2">
              {searchResults.map((game, index) => (
                <SearchResultItem
                  key={index}
                  query={searchQuery}
                  game={game}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setSearchQuery("");
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
