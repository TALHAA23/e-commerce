import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ProductListing from "../components/ProductListing/ProductListing";
import getProducts from "../utils/getProducts";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [page, setPage] = useState(0);
  const [lastDoc, setLastDoc] = useState(null);
  const {
    isPending,
    isError,
    error,
    isSuccess,
    data,
    isPlaceholderData,
    isFetching,
  } = useQuery({
    queryKey: [`products-for-page-${page}`],
    queryFn: () => getProducts(lastDoc, setLastDoc),
    placeholderData: keepPreviousData,
    staleTime: 86400000, //24hrs
  });

  if (isPending && !isPlaceholderData) return <h1>loading</h1>;
  else if (isError) return <h1>{error.message}</h1>;
  return (
    <div>
      <ProductListing
        pageUpdater={setPage}
        products={data}
        disablePagination={isFetching}
        page={page}
      />
    </div>
  );
}
