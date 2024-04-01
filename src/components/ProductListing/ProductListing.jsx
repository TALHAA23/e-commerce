import ProductCard from "./ProductCard";

export default function ProductListing({
  pageUpdater,
  products,
  disablePagination = false,
  page,
}) {
  function changePage(diraction) {
    diraction = diraction.toLocaleLowerCase();
    pageUpdater((prevPage) => {
      const nextPage =
        diraction == "next" ? prevPage + 1 : prevPage <= 0 ? 0 : prevPage - 1;
      return nextPage;
    });
  }
  return (
    <section className=" relative">
      <div className="p-2 sm:p-6 flex flex-col gap-2 sm:gap-6 sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard title={product.title} />
        ))}
      </div>
      <div className=" sticky bottom-0 w-full bg-[#3c1884ea] flex justify-center gap-3 px-2 py-3 my-1">
        {["Prev", "Next"].map((btnText) => (
          <button
            onClick={() => changePage(btnText)}
            disabled={btnText == "Prev" && page == 0 ? true : disablePagination}
            className=" border-2 border-white text-white w-1/2 max-w-[250px] py-1 rounded-full text-lg disabled:opacity-60 hover:bg-white hover:text-black h transition-all duration-100"
          >
            {btnText}
          </button>
        ))}
      </div>
    </section>
  );
}
