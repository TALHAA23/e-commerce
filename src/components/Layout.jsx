import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import SortCustomization from "./SortAndCustomization/SortCustomization";
import Whatsapp from "./Whatsapp";

export default function Layout() {
  return (
    <div className="grid grid-rows-[minmax(60px,auto)_60px_minmax(calc(100vh-60px),auto)_auto] overflow-visible">
      <NavBar />
      <SortCustomization />
      <Outlet />
      <Footer />
      {/* <Whatsapp /> */}
    </div>
  );
}
