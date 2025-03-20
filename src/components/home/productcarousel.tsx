import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { ProductCard } from "../product/productcard";

interface Product {
  id: string;
  title: string;
  description: string;
  logo: {
    src: string;
    alt: string;
  };
  price: string;
}

const products: Product[] = [
  {
    id: "ethereum",
    title: "Ethereum",
    description: "Dezentrale Kryptowährung",
    logo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
      alt: "Ethereum Logo",
    },
    price: "1.654,34€",
  },
  {
    id: "bitcoin",
    title: "Bitcoin",
    description: "Die erste Kryptowährung",
    logo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
      alt: "Bitcoin Logo",
    },
    price: "45.312,67€",
  },
  {
    id: "dogecoin",
    title: "Dogecoin",
    description: "Die Meme-Währung",
    logo: {
      src: "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      alt: "Dogecoin Logo",
    },
    price: "0.08€",
  },
];

const AutoScrollingCarousel = ({ title }: { title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  let timeoutId: NodeJS.Timeout;

  const carouselContainerRef = useRef<HTMLDivElement>(null);

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
            <CarouselContent ref={carouselContainerRef} className="flex">
              {products.concat(products).map((product, index) => (
                <CarouselItem
                  className="mx-12 flex basis-1/4 items-center justify-center lg:basis-1/6"
                  key={product.id + index}
                >
                  <ProductCard {...product} />
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
      <AutoScrollingCarousel title="Sale" />
    </div>
  );
};
