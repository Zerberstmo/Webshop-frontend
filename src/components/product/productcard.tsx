import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

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

export const ProductCard = ({
  id = "id",
  title = "title",
  description = "description",
  logo,
  price = "price",
}: Product) => {
  return (
    <Link to={`/product/${id}`} className="no-underline  ">
      <Card className="w-80 h-70 cursor-pointer rounded-2xl bg-white p-4 shadow-lg transition hover:scale-115 dark:bg-gray-900">
        <CardContent className="flex flex-col items-center">
          <img
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </p>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </span>
          <p className="mt-2 text-xl font-bold text-blue-500 dark:text-blue-400">
            {price}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

/*
import { ProductCard } from "./ProductCard";

const products = [
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
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
 
*/
