import { useFilter, useFilterUpdater } from "../../Context/filterContext";
import Checkbox from "../Checkbox/Checkbox";

const brands = ["brand1", "brand2", "brand3"];

export default function SideFilter() {
  return (
    <div className="hidden md:block shadow-md shadow-[#3C1884] p-3">
      <div>
        <h1 className=" font-bold text-2xl text-[#311d57] border-b-2 border-[#3C1884]">
          Brands
        </h1>
        <div className=" my-2">
          {brands.map((brand) => (
            <Checkbox name="brand" value={brand} />
          ))}
        </div>
      </div>
    </div>
  );
}
