import {
  orderBy,
  limit,
  startAfter,
  query,
  getDocs,
} from "@firebase/firestore";
import { productCollection } from "../assets/firebase";
export default async function getProducts(
  lastDoc,
  setLastDoc,
  itemsPerPage = 10
) {
  let productsQuery = lastDoc
    ? query(
        productCollection,
        orderBy("title", "asc"),
        startAfter(lastDoc),
        limit(itemsPerPage)
      )
    : query(productCollection, orderBy("title", "asc"), limit(itemsPerPage));

  const querySnapshot = await getDocs(productsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newProducts = querySnapshot.docs.map((doc) => doc.data());
  setLastDoc(lastVisible);
  return newProducts;
}
