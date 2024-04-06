import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import getProductByKeyword from "../utils/getProductsByKeyword";
import SearchResult from "../components/SearchResult";
import Loader from "../components/Loader/Loader";
import urlQueryToFirebaseQuery from "../assets/urlQueryToFirebaseQuery";

export default function Find() {
  const searchParam = useSearchParams()[0];
  const { isPending, isError, error, data, isSuccess } = useQuery({
    queryKey: [
      `${searchParam.get("q")}${
        searchParam.get("f") ? `-f:${searchParam.get("f")}` : ""
      }`,
    ],
    queryFn: () =>
      getProductByKeyword(
        searchParam.get("q"),
        urlQueryToFirebaseQuery(searchParam.get("f"))
      ),
    staleTime: 86400000, //24hrs
  });
  if (isError) console.log(error);
  if (isPending) return <Loader />;
  else if (isError) return <h1>{error.message}</h1>;
  else if (!data.length)
    return <h1 className=" font-bold text-3xl ml-4 mt-4">No Result Found</h1>;

  return (
    <div>
      <h1 className=" font-bold text-3xl ml-4 mt-4">
        Showing Result for "{searchParam.get("q")}"
      </h1>
      <SearchResult results={data} />
    </div>
  );
}
