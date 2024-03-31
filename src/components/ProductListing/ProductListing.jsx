import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
  const [searchParam, setSearchParam] = useSearchParams(0);

  function changePage(diraction) {
    const currentPage = +searchParam.get("p");
    if (currentPage <= 2 && diraction.toLocaleLowerCase() == "prev") {
      setSearchParam(new URLSearchParams());
      return;
    }
    const updatedPage =
      diraction.toLocaleLowerCase() == "next"
        ? currentPage
          ? currentPage + 1
          : 2
        : currentPage - 1;
    setSearchParam(new URLSearchParams(`p=${updatedPage}`));
  }
  return (
    <section>
      <div className="p-2 sm:p-6 flex flex-col gap-2 sm:gap-6 sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard title={product.title} />
        ))}
      </div>
      <div className="flex justify-center gap-3 py-3">
        {["Prev", "Next"].map((btnText) => (
          <button
            onClick={() => changePage(btnText)}
            className=" border-2 border-[#3C1884] px-5 py-1 rounded-full text-lg hover:bg-[#3C1884] hover:text-white transition-all duration-100"
          >
            {btnText}
          </button>
        ))}
      </div>
    </section>
  );
}
