import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GameProvider from "../providers/GameProvider";
import CategoryProvider from "../providers/FilterProvider";
import ProviderProvider from "../providers/ProviderProvider";
import BottomNavBar from "../components/BottomNavBar";

export default function MainLayout() {
  return (
    <GameProvider>
      <ProviderProvider>
        <CategoryProvider>
          <Header />
          <main className="pb-16 pt-16.5 sm:pb-0">
            <Outlet />
          </main>
          <BottomNavBar />
        </CategoryProvider>
      </ProviderProvider>
    </GameProvider>
  );
}
