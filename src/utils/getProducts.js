import {
  orderBy,
  limit,
  startAfter,
  query,
  getDocs,
  where,
  or,
} from "@firebase/firestore";
import { productCollection } from "../assets/firebase";
import Filter from "../components/FilterAndCustomizer/Filter";
export default async function getProducts(
  lastDoc,
  setLastDoc,
  queryCriteria = ["title", "asc"],
  itemsPerPage = 10
) {
  const [property, order] = queryCriteria;
  let productsQuery = lastDoc
    ? query(
        productCollection,
        orderBy(property, order),
        startAfter(lastDoc),
        limit(itemsPerPage)
      )
    : query(productCollection, orderBy(property, order), limit(itemsPerPage));

  const querySnapshot = await getDocs(productsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newProducts = querySnapshot.docs.map((doc) => doc.data());
  setLastDoc(lastVisible);
  return newProducts;
}
