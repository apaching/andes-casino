import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GameProvider from "../providers/GameProvider";
import CategoryProvider from "../providers/FilterProvider";
import ProviderProvider from "../providers/ProviderProvider";

export default function MainLayout() {
  return (
    <GameProvider>
      <ProviderProvider>
        <CategoryProvider>
          <Header />
          <main className="pt-16.5">
            <Outlet />
          </main>
          {/* <Footer /> */}
        </CategoryProvider>
      </ProviderProvider>
    </GameProvider>
  );
}
