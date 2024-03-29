import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="grid grid-rows-[60px_minmax(calc(100vh-60px),auto)_50vh] overflow-visible">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
