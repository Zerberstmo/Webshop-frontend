import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer1 } from "./components/footer/footer";
import { Banner1 } from "./components/banner/banner";

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Banner1
        title="Du bist Gewerbekunde"
        description=" dann Check unsere"
        linkText="Leasing Angebote"
        end="aus"
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer1 />
    </div>
  );
}

