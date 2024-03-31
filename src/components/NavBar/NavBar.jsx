import Branding from "./Branding";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className="sticky z-50 top-0 w-full h-[120px] md:h-auto bg-color-base text-white flex flex-col">
      <UpToMediumScreen />
      <AfterMediumScreen />
    </nav>
  );
}

const UpToMediumScreen = () => (
  <div className="grow flex md:hidden items-center justify-between px-3">
    <Logo />
    <Branding />
  </div>
);

const AfterMediumScreen = () => (
  <div className="grow md:grow-0 md:h-[60px] flex items-center justify-center md:justify-between px-3 bg-color-light md:bg-inherit">
    <div className=" hidden md:block">
      <Logo />
    </div>
    <SearchBar />
    <div className=" hidden md:block">
      <Branding />
    </div>
  </div>
);
