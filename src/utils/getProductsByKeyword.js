import { productCollection } from "../assets/firebase";
import { query, where, getDocs, or, orderBy } from "@firebase/firestore";

export default async function getProductByKeyword(
  keyword,
  sort = ["title", "asc"]
) {
  const [property, order] = sort;
  const lowercasedKeyword = keyword.toLowerCase().trim();
  // Create a range for the query
  const endKeyword = lowercasedKeyword.replace(/.$/, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 1)
  );
  let productsQuery = query(
    productCollection,
    where("title", ">=", lowercasedKeyword),
    where("title", "<", endKeyword),
    orderBy(property, order)
  );
  const querySnapshot = await getDocs(productsQuery);
  let products = [];
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
}
