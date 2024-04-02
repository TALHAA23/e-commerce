import { productCollection } from "../assets/firebase";
import { query, where, getDocs, or } from "@firebase/firestore";

export default async function getProductByKeyword(keyword) {
  // TODO: Convert the keyword to lowercase
  //   const lowercasedKeyword = keyword.toLowerCase();
  const lowercasedKeyword = keyword;
  // Create a range for the query
  const endKeyword = lowercasedKeyword.replace(/.$/, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 1)
  );
  let productsQuery = query(
    productCollection,
    where("title", ">=", lowercasedKeyword),
    where("title", "<", endKeyword)
  );
  const querySnapshot = await getDocs(productsQuery);
  let products = [];
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
  return products;
}
