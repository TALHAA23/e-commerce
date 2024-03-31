import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ProductListing from "../components/ProductListing/ProductListing";
import getProducts from "../utils/getProducts";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [searchParam, setSearchParam] = useSearchParams(0);
  const [lastDoc, setLastDoc] = useState(null);
  const { isPending, isError, error, isSuccess, data } = useQuery({
    queryKey: [`products-for-page-${searchParam.get("p")}`],
    queryFn: () => getProducts(lastDoc, setLastDoc),
    placeholderData: keepPreviousData,
    staleTime: 60 * 60 * 60,
  });

  if (isPending) return <h1>loading</h1>;
  else if (isError) return <h1>{error.message}</h1>;
  return (
    <div>
      <ProductListing products={data} />
    </div>
  );
}
