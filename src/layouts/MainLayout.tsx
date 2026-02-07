import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/BottomNavBar";
import CategoryProvider from "../providers/FilterProvider";
import GameProvder from "../providers/GameProvider";

const MainLayout = () => {
  return (
    <GameProvder>
      <CategoryProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </CategoryProvider>
    </GameProvder>
  );
};

export default MainLayout;
