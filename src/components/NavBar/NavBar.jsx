import Branding from "./Branding";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className=" sticky z-50 top-0 w-full bg-color-base text-white flex gap-2 items-center justify-between px-3">
      {/* <div className="sm:hidden flex gap-2 py-3">
        <Logo />
        <Branding />
      </div> */}
      {/* <div className=" hidden sm:block"> */}
      <Logo />
      {/* </div> */}
      <SearchBar />
      <div className=" hidden sm:block">
        <Branding />
      </div>
    </nav>
  );
}
