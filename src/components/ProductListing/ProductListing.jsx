import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import urlQueryToFirebaseQuery from "../../assets/urlQueryToFirebaseQuery";
import Loader from "../Loader/Loader";
import Filter from "./Filter";
import { useFilter, useFilterKey } from "../../Context/filterContext";
import NoResult from "../NoResult";

export default function ProductListing({
  queryFn,
  queryKey,
  propertyKeyValue,
}) {
  const filterKey = useFilterKey();
  const filter = useFilter();
  const searchParam = useSearchParams()[0].get("f");
  const [page, setPage] = useState(0);
  const [lastDoc, setLastDoc] = useState(null);
  const [lastDocs, setLastDocs] = useState({});
  const { isPending, isError, error, data, isFetching, isSuccess } = useQuery({
    queryKey: [
      `${queryKey}--products-for-page-${page}-query-${searchParam || "A-Z"}${
        filterKey ? `-f:${filterKey}` : ""
      }`,
    ],
    queryFn: () =>
      queryFn(
        lastDocs[searchParam || "A-Z"],
        urlQueryToFirebaseQuery(searchParam),
        10,
        filter,
        propertyKeyValue
      ),
    placeholderData: keepPreviousData,
    staleTime: 86400000, //24hrs
  });

  useEffect(() => {
    if (!searchParam) return;
    setPage(0);
  }, [searchParam, filterKey]);

  useEffect(() => {
    setLastDocs((oldLastDocs) => ({
      ...oldLastDocs,
      [searchParam || "A-Z"]: lastDoc,
    }));
  }, [lastDoc]);

  useEffect(() => {
    if (isSuccess) setLastDoc(data.lastDocRef);
  }, [isSuccess]);

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
    <div className="grid md:grid-cols-[250px_auto] ">
      <Filter />
      <section className="relative">
        <div
          className={`absolute z-10 w-full text-center bg-[#3c1884ea] px-5 py-2 text-white text-lg font-semibold ${
            isFetching ? "scale-y-100" : "scale-y-0"
          } origin-top  transition-all duration-200`}
        >
          Fetching...
        </div>
        {/* products area */}
        {data.products.length ? (
          <div className="p-2 sm:p-6 flex flex-col gap-3 sm:gap-6 sm:grid grid-cols-3 xl:grid-cols-4">
            {data.products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        ) : (
          <NoResult />
        )}
        <div className="w-full bg-[#3c1884ea] flex justify-center gap-3 px-2 py-3 my-1">
          <button
            onClick={() => changePage("prev")}
            disabled={page == 0 ? true : isFetching}
            className=" border-2 border-white text-white w-1/2 max-w-[250px] py-1 rounded-full text-lg disabled:opacity-60 hover:bg-white hover:text-black h transition-all duration-100"
          >
            Previous
          </button>

          <button
            onClick={() => changePage("next")}
            disabled={
              !data.products.length || data.products.length < 10 || isFetching
            }
            className=" border-2 border-white text-white w-1/2 max-w-[250px] py-1 rounded-full text-lg disabled:opacity-60 hover:bg-white hover:text-black h transition-all duration-100"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
