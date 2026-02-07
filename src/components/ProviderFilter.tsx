import Button from "./Button";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Provider } from "../types/types";

interface ProviderCardProps {
  amount: number;
  provider: Provider;
  isSelected: boolean;
  onProviderClick: (provider: Provider) => void;
}

function ProviderCard({
  provider,
  amount,
  isSelected,
  onProviderClick,
}: ProviderCardProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onProviderClick(provider);
      }}
      className={`${isSelected ? "border-primary border-2" : "border-2 border-transparent"} bg-secondary mr-4 flex h-8.75 w-[31%] shrink-0 grow-0 flex-row items-center justify-center gap-1 rounded p-1 hover:cursor-pointer`}
    >
      <img
        className="h-full object-cover"
        src={`provider_pictures/${provider.value}.webp`}
      />
      <p className="text-txt text-[10px] opacity-70">({amount})</p>
    </div>
  );
}

interface ProviderFilterProps {
  providers: Provider[];
  selectedProvider: Provider | null;
  onProviderClick: (provider: Provider) => void;
  providerCounts: Record<string, number>;
}

export default function ProviderFilter({
  providers,
  selectedProvider,
  onProviderClick,
  providerCounts,
}: ProviderFilterProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  console.log(providerCounts);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-row justify-between">
        <p className="text-sm">Proveedores de juego</p>
        <div className="flex flex-row items-center gap-2.5">
          <Button buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs">
            MÁS
          </Button>
          <Button
            onClick={scrollPrev}
            buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs"
          >
            <ChevronLeft height={16} width={16} />
          </Button>
          <Button
            onClick={scrollNext}
            buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs"
          >
            <ChevronRight height={16} width={16} />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="text-txt flex flex-row">
          {providers.map((provider, index) => (
            <ProviderCard
              key={index}
              amount={providerCounts[provider.value]}
              provider={provider}
              isSelected={provider === selectedProvider}
              onProviderClick={onProviderClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
