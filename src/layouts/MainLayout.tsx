import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryProvider from "../providers/FilterProvider";

const MainLayout = () => {
  return (
    <CategoryProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CategoryProvider>
  );
};

export default MainLayout;
