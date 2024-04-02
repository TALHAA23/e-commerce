import {
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "@firebase/firestore";
import { productCollection } from "../assets/firebase";

export default async function getProductByCatagory(
  lastDoc,
  setLastDoc,
  sort = ["title", "asc"],
  itemsPerPage = 10,
  category
) {
  const [property, order] = sort;
  let productsQuery = lastDoc
    ? query(
        productCollection,
        where("category", "==", category),
        orderBy(property, order),
        startAfter(lastDoc),
        limit(itemsPerPage)
      )
    : query(
        productCollection,
        where("category", "==", category),
        orderBy(property, order),
        limit(itemsPerPage)
      );
  const querySnapshot = await getDocs(productsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newProducts = querySnapshot.docs.map((doc) => doc.data());
  setLastDoc(lastVisible);
  return newProducts;
}
