import { updateDoc, doc } from "firebase/firestore";
import { productCollection } from "../../assets/firebase";
import uploadProductImage from "./uploadProductImage";

export async function updateProduct(productId, data) {
  if ("image" in data && data.image instanceof File)
    data.image = await uploadProductImage(data.image);
  try {
    const productRef = doc(productCollection, productId);
    await updateDoc(productRef, data);
    console.log(`Product with ID: ${productId} updated successfully.`);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error; // Re-throw the error for handling in the calling function (optional)
  }
}
