import { useState } from "react";
import AvailabilityCheck from "./AvailabilityCheck";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../AdminUtils/delete";
const fields = ["title", "brand", "category", "price"];
export default function ModificationCard(prop) {
  const [unEdited, setUnedited] = useState(Object.values(prop));
  const [edited, setEdited] = useState(prop);
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationKey: [`delete:${prop.title}`],
    mutationFn: (variables) => deleteProduct(variables),
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setEdited((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataToObject = {
      ...Object.fromEntries(formData.entries()),
      availability: formData.get("availability") == "on" ? true : false,
      price: parseInt(formData.get("price")),
    };
  }

  function triggerDeleteOperation() {
    const confirmation = confirm("Are you sure to delete?");
    if (confirmation) {
      mutate(prop.id);
    }
  }

  return (
    <div className="relative h-[200px] flex shadow-md border">
      <div className="absolute m-1 bg-[#3c1884] text-white px-6 py-2 rounded">
        {isPending
          ? "Deleting"
          : isError
          ? error.message
          : isSuccess
          ? "Successfully Deleted"
          : ""}
      </div>
      <img
        src="/milk.jpg"
        alt="milk"
        className=" h-full max-w-[100px] sm:max-w-max aspect-square object-cover rounded-md p-1"
      />
      <form
        onSubmit={handleSubmit}
        className="w-full py-1 grid grid-rows-6 grid-cols-1 p-1 items-center"
      >
        {fields.map((field) => (
          <input
            // onChange={handleChange}
            type="text"
            name={field}
            id={field}
            placeholder={`${field}: ${prop[field]}`}
            className="text-xs sm:text-sm border h-[90%] pl-2 text-slate-600 rounded"
          />
        ))}
        <AvailabilityCheck />
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

function areObjectsEqual(obj1, obj2) {
  // Check if objects have the same number of properties
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all properties and their values match
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
