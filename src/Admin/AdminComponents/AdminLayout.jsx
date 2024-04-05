import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/NavBar/Logo";

export default function AdminLayout() {
  return (
    <div className="grid grid-rows-[60px_minmax(calc(100vh-60px),auto)]">
      <nav className=" border sticky top-0 bg-[#3c1884] z-50 text-white flex items-center justify-between">
        <Link to="/admin" className=" flex items-center">
          <img
            src="/icons/back-svgrepo-com.svg"
            alt="home"
            className="w-10 aspect-square"
          />
          <h1 className=" font-semibold text-lg">Admin Panel</h1>
        </Link>
        <Logo />
      </nav>
      <Outlet />
    </div>
  );
}
