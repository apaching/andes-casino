import { createContext } from "react";
import { type Provider } from "../types/types";

export interface ProviderContextType {
  providers: Provider[];
  setProviders: (providers: Provider[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const ProviderContext = createContext<ProviderContextType | undefined>(
  undefined,
);
