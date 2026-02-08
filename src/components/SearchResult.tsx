import { type Game } from "../types/types";
import { highlightQuery } from "../utils/highlightText";

interface SearchResultItemProps {
  query: string;
  game: Game;
  onClick: () => void;
}

export default function SearchResultItem({
  query,
  game,
  onClick,
}: SearchResultItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex w-full cursor-pointer items-center gap-2 rounded-xl transition-colors hover:bg-white"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-txt text-xs font-normal">
          {highlightQuery(game.name, query)}
        </p>
      </div>
    </div>
  );
}
