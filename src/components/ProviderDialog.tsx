import { TextSearch, X } from "lucide-react";
import { ProviderCard } from "./ProviderFilter";
import type { Provider } from "../types/types";

interface ProviderDialog {
  isOpen: boolean;
  onClose: (status: boolean) => void;
}

export default function ProviderDialog({ isOpen, onClose }: ProviderDialog) {
  const mockProviders: Provider[] = [
    { value: "skywind_group", label: "Skywind Group" },
    { value: "pragmatic", label: "Pragmatic" },
    { value: "hacksaw", label: "Hacksaw" },
    { value: "pg", label: "PG" },
    { value: "zitro", label: "Zitro" },
    { value: "in_out", label: "In Out" },
    { value: "imoon", label: "iMoon" },
    { value: "ortiz", label: "Ortiz" },
    { value: "playtech", label: "Playtech" },
  ];

  if (!isOpen) return null;

  return (
    <div
      onClick={() => {
        onClose(false);
      }}
      className="fixed inset-0 z-50 bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-0 h-[55%] w-full bg-white"
      >
        <div className="bg-primary flex h-12 flex-row items-center justify-between px-2">
          <div className="flex flex-row items-center gap-2">
            <TextSearch className="text-white" />
            <p className="text-sm text-white">Proveedor de Juegos</p>
            <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border-[1.35px] border-white">
              <p className="text-sm text-white">0</p>
            </div>
          </div>
          <X
            onClick={() => {
              onClose(false);
            }}
            className="text-white hover:cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          {mockProviders.map((provider, idx) => (
            <ProviderCard
              key={provider.value}
              provider={provider}
              amount={10 + idx}
              isSelected={false}
              onProviderClick={() => {}}
              className="h-12 w-full rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
