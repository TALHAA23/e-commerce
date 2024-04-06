import AvailabilityCheck from "./AvailabilityCheck";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../AdminUtils/delete";
import { updateProduct } from "../AdminUtils/update";
import { useEffect, useRef } from "react";
const fields = ["title", "brand", "category", "price", "amazonAddress"];
export default function ModificationCard(prop) {
  const cardRef = useRef();
  const changeMutation = useMutation({
    mutationKey: [`change:${prop.id}`],
    mutationFn: handleSubmit,
  });
  const deleteMutation = useMutation({
    mutationKey: [`delete:${prop.id}`],
    mutationFn: (variables) => deleteProduct(variables),
  });

  useEffect(() => {
    if (!deleteMutation.isSuccess) return;
    cardRef.current.remove();
  }, [deleteMutation.isSuccess]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (prop.availability && !formData.has("availability"))
      formData.set("availability", "off");
    [...formData.entries()].map(([key, value]) => {
      const valueIsEmptyOrIsNotModified = !value || value == prop[key];
      const fileIsNotAttached = value instanceof File && !value.name;
      if (valueIsEmptyOrIsNotModified || fileIsNotAttached)
        formData.delete(key);
      if (key == "availability") {
        const availability = value == "on" ? true : false;
        if (availability == prop.availability) formData.delete(key);
      }
    });
    if (![...formData.keys()].length) throw new Error("nothing has changed");
    const formDataToObject = {
      ...Object.fromEntries(formData.entries()),
    };
    if ("availability" in formDataToObject)
      formDataToObject.availability =
        formDataToObject.availability == "on" ? true : false;

    const lowercaseFormData = toLowercaseObject(formDataToObject);
    console.log("updating...");
    await updateProduct(prop.id, lowercaseFormData);
  }

  function triggerDeleteOperation() {
    const confirmation = confirm("Are you sure to delete?");
    if (confirmation) {
      deleteMutation.mutate(prop.id);
    }
  }

  return (
    <div ref={cardRef} className="relative h-[200px] flex shadow-md border">
      <div className="absolute right-0 z-10  bg-[#3c1884c0] text-white px-3 text-sm capitalize">
        {changeMutation?.isPending || deleteMutation?.isPending
          ? "processing"
          : changeMutation?.isError || deleteMutation?.isError
          ? changeMutation?.error?.message || deleteMutation?.error?.message
          : changeMutation?.isSuccess || deleteMutation?.isSuccess
          ? "completed successfully"
          : ""}
      </div>
      <div className=" relative">
        <img
          src={prop.image}
          alt="milk"
          loading="lazy"
          className=" h-full max-w-[100px] sm:max-w-max aspect-square object-cover rounded-md p-1"
        />
        <label
          htmlFor="image"
          className=" absolute bottom-0 bg-black text-white w-[96%] mx-1 text-center text-sm py-2"
        >
          Change Image
        </label>
      </div>
      <form
        onSubmit={changeMutation.mutate}
        className="w-full py-1 grid grid-rows-6 grid-cols-1 p-1 items-center"
      >
        {fields.map((field) => (
          <input
            type="text"
            name={field}
            id={field}
            placeholder={`${field}: ${prop[field]}`}
            className="text-xs sm:text-sm border h-[90%] pl-2 text-slate-600 rounded"
          />
        ))}
        <input type="file" name="image" id="image" hidden />
        <AvailabilityCheck defaultChecked={prop.availability} />
        <div className=" flex h-full gap-2">
          {["update", "delete"].map((btn) => (
            <button
              type={btn == "update" ? "submit" : "button"}
              onClick={btn == "delete" ? triggerDeleteOperation : undefined}
              className={`grow capitalize rounded-md font-semibold sm:text-lg text-white  ${
                btn == "update" ? "bg-orange-700" : "bg-red-600"
              } hover:opacity-70`}
            >
              {btn}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

function toLowercaseObject(obj) {
  const newObj = {};
  for (const key in obj)
    if (typeof obj[key] === "string") newObj[key] = obj[key].toLowerCase();
    else newObj[key] = obj[key];
  return newObj;
}
