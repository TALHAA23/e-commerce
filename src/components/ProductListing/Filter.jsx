import { useQuery } from "@tanstack/react-query";
import {
  useFilter,
  useFilterVisablityControlsAndValue,
} from "../../Context/filterContext";
import Checkbox from "../Checkbox/Checkbox";
import Loader from "../Loader/Loader";
import { getUtils } from "../../utils/getUtils";

const brands = ["Brand1", "Brand2", "Brand3"];

export default function Filter() {
  const filter = useFilter();
  const isFilterVisable = useFilterVisablityControlsAndValue()[0];
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["brand&Categories"],
    queryFn: getUtils,
    staleTime: 86400000,
  });
  return (
    <div
      className={`fixed overflow-y-auto bottom-0 z-40 bg-gray-100 w-full h-1/2 max-h-[300px] md:h-full md:max-h-max md:relative rounded-t-lg md:rounded-none shadow-md shadow-[#3C1884] p-3 ${
        isFilterVisable ? "scale-y-100" : "scale-y-0"
      } md:scale-y-100 origin-bottom transition-all duration-150`}
    >
      <div>
        <h1 className="font-bold text-2xl text-[#311d57] border-b-2 border-[#3C1884]">
          Brands
        </h1>
        {isPending ? (
          <Loader />
        ) : isError ? (
          <h1>{error.message}</h1>
        ) : (
          <div className=" my-2">
            {data.brands.map((brand) => (
              <Checkbox
                key={brand}
                name="brand"
                value={brand}
                defaultChecked={filter?.brand?.includes(brand)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
