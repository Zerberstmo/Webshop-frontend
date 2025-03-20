import { useState } from "react";
import { PaginationDemo } from "../../pages/pagination";
import { ProductCard } from "./productcard";

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
    id: "1",
    title: "Produkt 1",
    description: "Das erste Produkt in unserem Shop.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 1 Logo",
    },
    price: "€19,99",
  },
  {
    id: "2",
    title: "Produkt 2",
    description: "Ein weiteres fantastisches Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 2 Logo",
    },
    price: "€29,99",
  },
  {
    id: "3",
    title: "Produkt 3",
    description: "Das dritte Produkt in der Reihe.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 3 Logo",
    },
    price: "€39,99",
  },
  {
    id: "4",
    title: "Produkt 4",
    description: "Das vierte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 4 Logo",
    },
    price: "€49,99",
  },
  {
    id: "5",
    title: "Produkt 5",
    description: "Das fünfte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 5 Logo",
    },
    price: "€59,99",
  },
  {
    id: "6",
    title: "Produkt 6",
    description: "Das sechste Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 6 Logo",
    },
    price: "€69,99",
  },
  {
    id: "7",
    title: "Produkt 7",
    description: "Das siebte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 7 Logo",
    },
    price: "€79,99",
  },
  {
    id: "8",
    title: "Produkt 8",
    description: "Das achte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 8 Logo",
    },
    price: "€89,99",
  },
  {
    id: "9",
    title: "Produkt 9",
    description: "Das neunte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 9 Logo",
    },
    price: "€99,99",
  },
  {
    id: "10",
    title: "Produkt 10",
    description: "Das zehnte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 10 Logo",
    },
    price: "€109,99",
  },
  {
    id: "11",
    title: "Produkt 11",
    description: "Das elfte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 11 Logo",
    },
    price: "€119,99",
  },
  {
    id: "12",
    title: "Produkt 12",
    description: "Das zwölfte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 12 Logo",
    },
    price: "€129,99",
  },
  {
    id: "13",
    title: "Produkt 13",
    description: "Das dreizehnte Produkt.",
    logo: {
      src: "https://via.placeholder.com/300",
      alt: "Produkt 13 Logo",
    },
    price: "€139,99",
  },
];

export const Feature5 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                Entdecke unsere Produkte!
              </h2>
              <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                Stöbere durch eine sorgfältige Auswahl unserer besten Produkte.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((product) => (
              <div className="flex flex-col gap-2" key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  logo={product.logo}
                />
              </div>
            ))}
          </div>

          <PaginationDemo
            totalItems={products.length}
            itemsPerPage={productsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
