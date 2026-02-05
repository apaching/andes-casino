import { useEffect, useRef, useState } from "react";

interface CarouselInterface {
  images?: string[];
  autoScrollInterval?: number;
}

const defaultImages = [
  "/carousel/carousel_banner_1.webp",
  "/carousel/carousel_banner_2.webp",
  "/carousel/carousel_banner_3.webp",
];

export default function Carousel({
  images = defaultImages,
  autoScrollInterval = 1000,
}: CarouselInterface) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Self note:
   *
   * setTimeout vs. setInterval -> setTimeout will run once, setInterval will run repeatedly
   * setTimeout can be used, but currentIndex must be a dependency of the useEffect
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [setCurrentIndex, autoScrollInterval, images.length]);

  console.log(currentIndex);

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex aspect-2/1 h-full w-full shrink-0 xl:aspect-5/1"
          >
            <img
              className="h-full w-full rounded-[15px] object-cover sm:rounded-[25px]"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
