import { useContext } from "react";
import {
  ProviderContext,
  type ProviderContextType,
} from "../context/ProviderContext";

export function useProvider(): ProviderContextType {
  const context = useContext(ProviderContext);

  if (!context) {
    throw new Error("useProvider must be used within a ProviderProvider");
  }

  return context;
}
