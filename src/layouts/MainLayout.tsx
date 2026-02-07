import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GameProvder from "../providers/GameProvider";
import CategoryProvider from "../providers/FilterProvider";

const MainLayout = () => {
  return (
    <GameProvder>
      <CategoryProvider>
        <Header />
        <main className="pt-16.5">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </CategoryProvider>
    </GameProvder>
  );
};

export default MainLayout;
