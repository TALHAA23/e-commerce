import { doc, getDoc } from "firebase/firestore";
import { utilsCollection } from "../assets/firebase";

export async function getUtils() {
  try {
    const docRef = doc(utilsCollection, "brandsAndCategories");
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return {
        brands: data.brands || [],
        categories: data.categories || [],
      };
    } else {
      console.log("No utils document found");
      return { brands: [], categories: [] };
    }
  } catch (error) {
    return { brands: [], categories: [] };
  }
}
