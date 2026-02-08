import Button from "./Button";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Provider } from "../types/types";
import { ProviderCard } from "./ProviderCard";

interface ProviderFilterProps {
  providers: Provider[];
  selectedProvider: Provider | null;
  onProviderClick: (provider: Provider) => void;
  providerCounts: Record<string, number>;
  onMasClick: (status: boolean) => void;
}

export default function ProviderFilter({
  providers,
  selectedProvider,
  onProviderClick,
  providerCounts,
  onMasClick,
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

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-row justify-between">
        <p className="text-sm">Proveedores de juego</p>
        <div className="flex flex-row items-center gap-2.5">
          <Button
            onClick={() => {
              onMasClick(true);
            }}
            buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs"
          >
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
              className="mr-4 h-8.75 w-[31%] shrink-0 grow-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
