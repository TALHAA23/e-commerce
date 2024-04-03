import { useParams, useSearchParams } from "react-router-dom";
import getProductByCatagory from "../utils/getProductsByFieldName";
import ProductListing from "../components/ProductListing/ProductListing";

export default function ProductsByProperty() {
  const { property } = useParams();
  const searchParam = useSearchParams()[0].get("q");
  return (
    <ProductListing
      queryKey={searchParam}
      queryFn={getProductByCatagory}
      propertyKeyValue={[property, searchParam]} //show product with the give creds
    />
  );
}
