import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Menu from "../component/Menu";

const MainLayout = () => {
  const location = useLocation(); // Get the current route location
  const isHomePage = location.pathname === "/"; // Check if the current route is the homepage

  return (
    <>
      <Navbar />
      {/* Conditionally render the Menu component if not on the homepage */}
      {!isHomePage && <Menu />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
