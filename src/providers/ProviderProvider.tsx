import type { Provider } from "../types/types";
import { useState, type ReactNode } from "react";
import { ProviderContext } from "../context/ProviderContext";

export default function ProviderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <ProviderContext.Provider
      value={{
        providers,
        setProviders,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
}
