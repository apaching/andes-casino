import Header from "./components/Header";
import Carousel from "./components/Carousel";
import CategoryFilter from "./components/CategoryFilter";
import ProviderFilter from "./components/ProviderFilter";
import { useState } from "react";
import type { Category } from "./types/types";
import { categoryTabs } from "./constants/categories";

function App() {
  // prettier-ignore
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryTabs[0]);

  return (
    <main className="h-screen w-screen">
      <Header />

      <div className="flex flex-col gap-4 px-4">
        <Carousel />
        <ProviderFilter />
        <CategoryFilter selectedCategory={selectedCategory} />
      </div>
    </main>
  );
}

export default App;
