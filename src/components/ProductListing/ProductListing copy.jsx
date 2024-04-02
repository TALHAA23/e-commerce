import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import urlQueryToFirebaseQuery from "../../assets/urlQueryToFirebaseQuery";
import Loader from "../Loader/Loader";

export default function ProductListingCopy({ queryFn, queryKey }) {
  const searchParam = useSearchParams()[0].get("f");
  const [page, setPage] = useState(0);
  const [lastDoc, setLastDoc] = useState(null);
  const [lastDocs, setLastDocs] = useState({});
  const { isPending, isError, error, data, isFetching } = useQuery({
    queryKey: [
      `${queryKey}--products-for-page-${page}-query-${searchParam || "A-Z"}`,
    ],
    queryFn: () =>
      queryFn(
        lastDocs[searchParam || "A-Z"],
        setLastDoc,
        urlQueryToFirebaseQuery(searchParam),
        10,
        queryKey
      ),
    placeholderData: keepPreviousData,
    staleTime: 86400000, //24hrs
  });

  useEffect(() => {
    if (!searchParam) return;
    setPage(0);
  }, [searchParam]);

  useEffect(() => {
    setLastDocs((oldLastDocs) => ({
      ...oldLastDocs,
      [searchParam || "A-Z"]: lastDoc,
    }));
  }, [lastDoc]);

  function changePage(diraction) {
    diraction = diraction.toLocaleLowerCase();
    setPage((prevPage) => {
      const nextPage =
        diraction == "next" ? prevPage + 1 : prevPage <= 0 ? 0 : prevPage - 1;
      return nextPage;
    });
  }

  if (isPending) return <Loader />;
  else if (isError) console.log(error);

  return (
    <section className=" relative">
      <div
        className={`absolute z-10 w-full text-center bg-[#3c1884ea] px-5 py-2 text-white text-lg font-semibold ${
          isFetching ? "scale-y-100" : "scale-y-0"
        } origin-top  transition-all duration-200`}
      >
        Fetching...
      </div>
      <div className="p-2 sm:p-6 flex flex-col gap-2 sm:gap-6 sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.map((product) => (
          <ProductCard title={product.title} price={product.price} />
        ))}
      </div>
      <div className=" sticky bottom-0 w-full bg-[#3c1884ea] flex justify-center gap-3 px-2 py-3 my-1">
        {["Prev", "Next"].map((btnText) => (
          <button
            onClick={() => changePage(btnText)}
            disabled={btnText == "Prev" && page == 0 ? true : isFetching}
            className=" border-2 border-white text-white w-1/2 max-w-[250px] py-1 rounded-full text-lg disabled:opacity-60 hover:bg-white hover:text-black h transition-all duration-100"
          >
            {btnText}
          </button>
        ))}
      </div>
    </section>
  );
}
