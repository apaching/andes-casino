import {
  FilterContext,
  type FilterContextType,
} from "../context/FilterContext";
import { useContext } from "react";

export function useFilter(): FilterContextType {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}
