import { createContext } from "react";
import { type Game } from "../types/types";

export interface GameContextType {
  games: Game[];
  setGames: (games: Game[]) => void;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
  total: number;
  setTotal: (total: number) => void;
  counts: Record<string, number>;
  setCounts: (counts: Record<string, number>) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  offset: number;
  setOffset: (offset: number) => void;
  providerCounts: Record<string, number>;
  setProviderCounts: (providerCounts: Record<string, number>) => void;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined,
);
