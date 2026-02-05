import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

function ProviderCard() {
  return (
    <div className="bg-secondary flex h-8.75 w-[30%] flex-row items-center justify-center gap-1 rounded p-1">
      <img className="h-full object-cover" src="OAKS.webp" />
      <p className="text-txt text-[10px] opacity-70">(3)</p>
    </div>
  );
}

export default function ProviderFilter() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-row justify-between">
        <p className="text-sm">Proveedores de juego</p>
        <div className="flex flex-row items-center gap-2.5">
          <Button buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs">
            MÁS
          </Button>
          <Button buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs">
            <ChevronLeft height={16} width={16} />
          </Button>
          <Button buttonStyle="flex bg-secondary p-2 items-center justify-center rounded hover:opacity-70 text-xs">
            <ChevronRight height={16} width={16} />
          </Button>
        </div>
      </div>

      <div className="text-txt flex flex-row gap-3">
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </div>
    </div>
  );
}
