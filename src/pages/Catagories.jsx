import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getProductByCatagory from "../utils/getProductsByCatagory";
import ProductListing from "../components/ProductListing/ProductListing";

export default function Catagories() {
  const { category } = useParams();
  return <ProductListing queryFn={getProductByCatagory} queryKey={category} />;
}
