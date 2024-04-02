import { Link } from "react-router-dom";
import ProductListing from "../components/ProductListing/ProductListing";
import getProducts from "../utils/getProducts";
export default function Home() {
  return <ProductListing queryFn={getProducts} queryKey={"home"} />;
}
