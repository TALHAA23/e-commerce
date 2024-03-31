import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import FilterAndCustomizer from "./FilterAndCustomizer/FiterAndCustomizer";

export default function Layout() {
  return (
    <div className="grid grid-rows-[minmax(60px,auto)_60px_minmax(calc(100vh-60px),auto)_50vh] overflow-visible">
      <NavBar />
      <FilterAndCustomizer />
      <Outlet />
      <Footer />
    </div>
  );
}
