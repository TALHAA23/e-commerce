import CreateMenuSection from "./CreateMenuSection";
import { useMenuState } from "../../Context/MenuStateContext";
import { useQuery } from "@tanstack/react-query";
import { getUtils } from "../../utils/getUtils";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
export default function Menu() {
  const [isMenuShown, setIsMenuShown] = useMenuState();
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["brand&Categories"],
    queryFn: getUtils,
    staleTime: 86400000,
  });
  return (
    <div
      className={`fixed left-0 overflow-y-auto p-3 bg-gray-200 w-full max-w-[400px] h-[100vh] z-[60]
    ${
      isMenuShown ? "scale-x-100" : "scale-x-0"
    } origin-left transition-all duration-150
    `}
    >
      <div className="pb-3 flex items-center border-b-4 border-[#3C1884]">
        <h1 className="w-[90%] text-3xl font-bold">Menu</h1>
        <button onClick={() => setIsMenuShown(false)}>
          <img
            src="/icons/cross-circle-svgrepo-com.svg"
            alt="shrink"
            className=" w-7 aspect-square"
          />
        </button>
      </div>
      <Link
        to="."
        className="flex justify-between items-center my-1 w-full px-1 capitalize rounded-md hover:bg-gray-400"
      >
        <p className=" text-lg font-semibold">Home</p>
        <img className="w-9" src="/icons/right-arrow-svgrepo-com.svg" alt=">" />
      </Link>
      {isPending ? (
        <Loader />
      ) : isError ? (
        <h1>{error.message}</h1>
      ) : (
        <>
          <CreateMenuSection
            sectionTitle="categories"
            forProperty={"category"}
            sectionOptions={data.categories}
          />
          <CreateMenuSection
            sectionTitle="Brands"
            forProperty={"brand"}
            sectionOptions={data.brands}
          />
        </>
      )}
    </div>
  );
}
