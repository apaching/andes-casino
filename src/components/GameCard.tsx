import { Star } from "lucide-react";

export default function GameCard() {
  return (
    <div className="group relative h-auto w-[32%] overflow-hidden rounded-2xl">
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
        className="absolute top-0 right-0 z-50 flex rounded-tr-2xl bg-black/40 p-2"
      >
        <Star
          className="relative -top-1.25 -right-1.25 text-white hover:cursor-pointer"
          size={14}
          strokeWidth={1}
        />
      </div>
      <img
        src="/company_assets/hot_badge.webp"
        className="absolute top-1 left-1 z-50 w-10"
      />
      <img
        className="h-full w-full rounded-2xl object-cover transition-all duration-300 group-hover:scale-115"
        src="/game_pictures/fist_of_destruction.webp"
      />
    </div>
  );
}
