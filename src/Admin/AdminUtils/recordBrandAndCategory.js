import { doc, arrayUnion, updateDoc, setDoc } from "firebase/firestore";
import { utilsCollection } from "../../assets/firebase";

export async function recordBrandAndCategory({ brand, category }) {
  try {
    const uniqueValuesDocRef = doc(utilsCollection, "brandsAndCategories");

    // Create a new document if it doesn't exist initially (optional)

    await updateDoc(uniqueValuesDocRef, {
      brands: arrayUnion(brand),
      categories: arrayUnion(category),
    });

    console.log("Unique elements added successfully"); // Update UI or handle success on client-side
  } catch (error) {
    console.error("Error adding unique elements:", error);
    // Handle errors on client-side (e.g., display error message)
  }
}
