import { useMutation } from "@tanstack/react-query";
import AvailabilityCheck from "../AdminComponents/AvailabilityCheck";
import "../AdminUtils/form.css";
import uploadProduct from "../AdminUtils/upload";
import uploadProductImage from "../AdminUtils/uploadProductImage";
const textFields = ["title", "category", "brand"];
export default function Upload() {
  const { mutate, isPending, isSuccess, data, isError, error } = useMutation({
    mutationKey: ["upload"],
    mutationFn: handleSubmit,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataToObject = {
      ...Object.fromEntries(formData.entries()),
      availability: formData.get("availability") == "on" ? true : false,
      publishDate: new Date(),
    };
    await uploadProduct(formDataToObject);
  }

  return (
    <div className=" h-screen flex gap-0 items-center justify-center">
      <form onSubmit={mutate} className="form space-y-2">
        <h1 className="form-title capitalize">upload new product</h1>
        {isError && (
          <p className=" text-center text-xs text-rose-700">{error.message}</p>
        )}
        {isSuccess && (
          <p className=" text-center text-xs text-green-700">
            Upload successfully, you can keep uploading!
          </p>
        )}
        {textFields.map((field) => (
          <input
            className="rounded-md border w-full py-4 px-1 text-[0.875rem] text-gray-400"
            type="text"
            name={field}
            placeholder={field}
          />
        ))}
        {/* price */}
        <input
          className="rounded-md border w-full py-4 px-1 text-[0.875rem] text-gray-400"
          type="number"
          name="price"
          placeholder="price"
        />
        {/* category */}
        <select
          name="category"
          className=" rounded-md border w-full py-4 px-1 text-[0.875rem] text-gray-400"
        >
          <option disabled selected>
            Choose a Category
          </option>
          <option>Option 1</option>
        </select>
        {/* Brands */}
        <select
          name="brand"
          className="rounded-md border w-full py-4 px-1 text-[0.875rem] text-gray-400"
        >
          <option disabled selected>
            Choose a brand
          </option>
          <option>Option 1</option>
        </select>
        {/* availablity */}
        <AvailabilityCheck />
        <label class="block">
          <span class="sr-only">Choose a photo</span>
          <input
            type="file"
            name="image"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
    "
          />
        </label>
        <button
          type="submit"
          className="submit disabled:opacity-40"
          disabled={isPending}
        >
          {isPending ? "Proccssing" : "Login"}
        </button>
      </form>
    </div>
  );
}
