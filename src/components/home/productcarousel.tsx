import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const AutoScrollingCarousel = ({ title }: { title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoScrolling, setIsAutoScrolling] = useState(true); 
  const totalItems = 15; 
  let timeoutId: NodeJS.Timeout; 

  useEffect(() => {
    if (!api || !isAutoScrolling) return;

    const interval = setInterval(() => {
      api.scrollNext(); 
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isAutoScrolling]);

 
  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsAutoScrolling(true), 3000); 
  };

  return (
    <div className="w-full py-6">
      <div className="container mx-auto">
        <h3 className="font-regular mb-4 text-left text-xl tracking-tighter">
          {title}
        </h3>
        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            className="w-full"
            onPointerDown={handleUserInteraction}
          >
            <CarouselContent>
              {Array.from({ length: totalItems }).map((_, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div
                    className="bg-muted flex aspect-square cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200"
                    onClick={() => alert(`Produkt ${index + 1} angeklickt!`)}
                  >
                    <span className="text-sm">Produkt {index + 1}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export const Case2 = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <AutoScrollingCarousel title="Am meisten bestellt" />
      <AutoScrollingCarousel title="Sale " />
    </div>
  );
};
