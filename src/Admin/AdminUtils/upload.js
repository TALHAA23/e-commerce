import { addDoc } from "firebase/firestore";
import uploadProductImage from "./uploadProductImage"; // Assuming uploadProductImage is in a separate file
import { productCollection } from "../../assets/firebase";
export default async function uploadProduct(productData) {
  const lowercaseProductData = {
    ...productData,
    title: productData.title?.toLowerCase(),
    category: productData.category?.toLowerCase(),
    brand: productData.brand?.toLowerCase(),
  };
  // Upload image and get download URL
  let imageUrl;
  if (productData.image) {
    try {
      imageUrl = await uploadProductImage(productData.image);
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  }

  // Update image property with download URL (if available)
  lowercaseProductData.image = imageUrl;
  console.log(lowercaseProductData);

  // Get a reference to the products collection in Firestore
  try {
    // Add the product document to Firestore
    const docRef = await addDoc(productCollection, lowercaseProductData);
    console.log("Product added with ID:", docRef.id);
    return docRef.id; // Return the document ID
  } catch (error) {
    console.error("Error adding product to Firestore:", error);
    throw error; // Re-throw error for handling in the calling component
  }
}
