import Carousel from "./components/Carousel";
import CategoryFilter from "./components/CategoryFilter";
import Header from "./components/Header";
import ProviderFilter from "./components/ProviderFilter";

function App() {
  return (
    <main className="h-screen w-screen">
      <Header />

      <div className="flex flex-col gap-4 px-4">
        <Carousel />
        <ProviderFilter />
        <CategoryFilter />
      </div>
    </main>
  );
}

export default App;
