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
export default async function getProducts(
  lastDoc,
  sort = ["title", "asc"],
  itemsPerPage = 10,
  filter = {}
) {
  const filterEntries = Object.entries(filter);
  const [property, order] = sort;
  let productsQuery = lastDoc
    ? query(
        productCollection,
        or(
          ...filterEntries
            .map(([key, value]) => value.map((val) => where(key, "==", val)))
            .flat()
        ),
        orderBy(property, order),
        startAfter(lastDoc),
        limit(itemsPerPage)
      )
    : query(
        productCollection,

        or(
          ...filterEntries
            .map(([key, value]) => value.map((val) => where(key, "==", val)))
            .flat()
        ),
        orderBy(property, order),
        limit(itemsPerPage)
      );

  const querySnapshot = await getDocs(productsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newProducts = querySnapshot.docs.map((doc) => doc.data());
  return { products: newProducts, lastDocRef: lastVisible };
}
