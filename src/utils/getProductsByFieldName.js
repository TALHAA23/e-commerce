import {
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "@firebase/firestore";
import { productCollection } from "../assets/firebase";

export default async function getProductsByFieldName(
  lastDoc,
  sort = ["title", "asc"],
  itemsPerPage = 10,
  filter = {},
  fieldNameAndValueArray
) {
  const [property, order] = sort;
  const [fieldName, fieldValue] = fieldNameAndValueArray;
  let productsQuery = lastDoc
    ? query(
        productCollection,
        where(fieldName, "==", fieldValue),
        orderBy(property, order),
        startAfter(lastDoc),
        limit(itemsPerPage)
      )
    : query(
        productCollection,
        where(fieldName, "==", fieldValue),
        orderBy(property, order),
        limit(itemsPerPage)
      );
  const querySnapshot = await getDocs(productsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const newProducts = querySnapshot.docs.map((doc) => doc.data());
  return { products: newProducts, lastDocRef: lastVisible };
}
