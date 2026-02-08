import type { Provider } from "../types/types";

interface ProviderCardProps {
  amount: number;
  provider: Provider;
  isSelected: boolean;
  onProviderClick: (provider: Provider) => void;
  className?: string;
}

export function ProviderCard({
  provider,
  amount,
  isSelected,
  onProviderClick,
  className = "",
}: ProviderCardProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onProviderClick(provider);
      }}
      className={` ${isSelected ? "border-primary border-2" : "border-2 border-transparent"} bg-secondary flex flex-row items-center justify-center gap-1 rounded p-1 hover:cursor-pointer ${className} `}
    >
      <img
        className="h-full object-cover"
        src={`provider_pictures/${provider.value}.webp`}
      />
      <p className="text-txt text-[10px] opacity-70">({amount})</p>
    </div>
  );
}
