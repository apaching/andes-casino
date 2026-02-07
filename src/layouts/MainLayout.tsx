import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GameProvider from "../providers/GameProvider";
import CategoryProvider from "../providers/FilterProvider";

const MainLayout = () => {
  return (
    <GameProvider>
      <CategoryProvider>
        <Header />
        <main className="pt-16.5">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </CategoryProvider>
    </GameProvider>
  );
};

export default MainLayout;
