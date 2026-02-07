import GameCard from "./GameCard";
import type { Game } from "../types/types";

interface GameListProps {
  games: Game[];
}

export default function GameList({ games }: GameListProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
}
