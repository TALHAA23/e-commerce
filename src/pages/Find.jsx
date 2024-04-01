import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import getProductByKeyword from "../utils/getProductsByKeyword";
import SearchResult from "../components/SearchResult";
import Loader from "../components/Loader/Loader";

export default function Find() {
  const searchParam = useSearchParams()[0].get("q");
  const { isPending, isError, error, data, isSuccess } = useQuery({
    queryKey: [searchParam],
    queryFn: () => getProductByKeyword(searchParam),
    staleTime: 86400000, //24hrs
  });
  if (isPending) return <Loader />;
  else if (isError) return <h1>{error.message}</h1>;
  else if (!data.length)
    return <h1 className=" font-bold text-3xl ml-4 mt-4">No Result Found</h1>;

  return (
    <div>
      <h1 className=" font-bold text-3xl ml-4 mt-4">
        Showing Result for "{searchParam}"
      </h1>
      <SearchResult results={data} />
    </div>
  );
}
