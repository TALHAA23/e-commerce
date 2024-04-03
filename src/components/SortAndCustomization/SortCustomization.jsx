import { useMenuState } from "../../Context/MenuStateContext";
import { useFilterVisablityControlsAndValue } from "../../Context/filterContext";
import Sorter from "./Sort";

export default function SortCustomization() {
  return (
    <div className="shadow flex  items-center justify-between px-2">
      <MenuButton />
      <div className="flex gap-1">
        <FilterButton />
        <Sorter />
      </div>
    </div>
  );
}

const FilterButton = () => {
  const setIsFilterVisable = useFilterVisablityControlsAndValue()[1];
  return (
    <div
      onClick={() => setIsFilterVisable((prev) => !prev)}
      className="flex md:hidden items-center gap-3 border-2  border-[#3C1884] rounded px-2 text-[#3C1884] hover:scale-95 cursor-pointer"
    >
      <img
        src="/icons/filter-svgrepo-com.svg"
        alt="filter"
        className=" w-10 aspect-square"
      />
      <h1 className=" text-lg font-bold">Filter</h1>
    </div>
  );
};

const MenuButton = () => {
  const setMenuState = useMenuState()[1];
  return (
    <img
      onClick={() => setMenuState(true)}
      src="/icons/menu-alt-1-svgrepo-com.svg"
      alt="menu"
      className=" w-12 hover:bg-gray-300 rounded"
    />
  );
};
