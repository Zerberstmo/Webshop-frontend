import { useState } from "react";
import { Hero47 } from "../hero/hero";
import { Case2 } from "./productcarousel";

export function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {isHeroVisible && <Hero47 onHide={() => setIsHeroVisible(false)} />}
      </main>
      <Case2 />
    </div>
  );
}
