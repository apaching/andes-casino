import { Search } from "lucide-react";

interface SearchBarProps {
  isOpen: boolean;
}

export default function SearchBar({ isOpen }: SearchBarProps) {
  if (isOpen) return null;

  return (
    <div className="relative w-full">
      <Search className="absolute top-2 left-3 text-[#9CA3AF]" size={16} />
      <input
        type="text"
        placeholder="Encuentra tu juego"
        className="w-full rounded-sm border border-[#9CA3AF] px-1 py-1 pl-9 text-sm text-[#9CA3AF]"
      />
    </div>
  );
}
