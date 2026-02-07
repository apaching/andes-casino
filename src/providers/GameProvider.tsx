// GameProvider.tsx
import type { Game } from "../types/types";
import { useState, type ReactNode } from "react";
import { GameContext } from "../context/GameContext";

export default function GameProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<Game[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        hasMore,
        setHasMore,
        total,
        setTotal,
        counts,
        setCounts,
        loading,
        setLoading,
        offset,
        setOffset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
