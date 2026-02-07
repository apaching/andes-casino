import { useContext } from "react";
import { GameContext, type GameContextType } from "../context/GameContext";

export function useGame(): GameContextType {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useFilter must be used within a GameProvider");
  }

  return context;
}
