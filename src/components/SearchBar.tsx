import { Search } from "lucide-react";

export default function SearchBar() {
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
