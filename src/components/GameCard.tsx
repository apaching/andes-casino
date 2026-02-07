import { Star } from "lucide-react";
import type { Game } from "../types/types";
import { useFilter } from "../hooks/useFilter";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { selectedCategory } = useFilter();

  return (
    <div className="group relative h-auto w-full overflow-hidden rounded-2xl">
      {game.isHot && selectedCategory.value != "popular" && (
        <img
          src="/company_assets/hot_badge.webp"
          className="absolute top-1 left-1 z-40 w-10"
        />
      )}

      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
        className="absolute top-0 right-0 z-40 flex rounded-tr-2xl bg-black/40 p-2"
      >
        <Star
          className="relative -top-1.25 -right-1.25 text-white hover:cursor-pointer"
          size={14}
          strokeWidth={1}
        />
      </div>

      <img
        className="h-full w-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-115"
        src={game.image}
      />
    </div>
  );
}
