import { addDoc } from "firebase/firestore";
import uploadProductImage from "./uploadProductImage"; // Assuming uploadProductImage is in a separate file
import { productCollection } from "../../assets/firebase";
import { recordBrandAndCategory } from "./recordBrandAndCategory";
export default async function uploadProduct(productData) {
  const lowercaseProductData = {
    ...productData,
    title: productData.title?.toLowerCase(),
    category: productData.category?.toLowerCase(),
    brand: productData.brand?.toLowerCase(),
  };
  // let imageUrl;
  if (productData.image instanceof File) {
    try {
      if (!productData.image.name)
        throw new Error("Attached image or use an image address");
      lowercaseProductData.image = await uploadProductImage(productData.image);
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  }
  // Update image property with download URL (if available)
  // lowercaseProductData.image = imageUrl;
  try {
    const docRef = await addDoc(productCollection, lowercaseProductData);
    await recordBrandAndCategory({
      brand: lowercaseProductData.brand,
      category: lowercaseProductData.category,
    });
    console.log("Product added with ID:", docRef.id);
    return docRef.id; // Return the document ID
  } catch (error) {
    console.error("Error adding product to Firestore:", error);
    throw error; // Re-throw error for handling in the calling component
  }
}
