import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="w-full border-b p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Epic Webshop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-600 hover:text-black">
                Unser Team
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-600 hover:text-black">
                Login
              </Link>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-black">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
