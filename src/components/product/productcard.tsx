import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

interface Product {
  title?: string;
  description?: string;
  logo?: {
    url?: string;
    src: string;
    alt: string;
  };
  price?: string;
}

export const ProductCard = ({
  title = "Title",
  description = "Beschreibung",
  logo = {
    url: "/",
    src: "/",
    alt: "/",
  },
  price = "Preis",
}: Product) => {
  return (
    <Link
      to="https://www.ethereum.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="w-80 cursor-pointer rounded-2xl bg-white p-4 shadow-lg transition hover:scale-105 dark:bg-gray-900">
        <CardContent className="flex flex-col items-center">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="mb-5 h-12 w-auto" />
          </a>
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
