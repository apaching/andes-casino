import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

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
  autoScrollInterval = 3000,
}: CarouselInterface) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 }, [
    Autoplay({ delay: autoScrollInterval, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex aspect-2/1 h-full w-full shrink-0 xl:aspect-5/1"
          >
            <img
              className="h-full w-full rounded-[15px] object-cover sm:rounded-[25px]"
              src={image}
              alt={`Carousel image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
