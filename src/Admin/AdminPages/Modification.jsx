import { useMutation } from "@tanstack/react-query";
import ModificationCard from "../AdminComponents/ModificationCard";
import { useEffect, useState } from "react";
import getProductByKeyword from "../../utils/getProductsByKeyword";
import Loader from "../../components/Loader/Loader";

export default function Modification() {
  const { mutate, isPending, isError, error, data, isSuccess } = useMutation({
    mutationKey: [`modification`],
    mutationFn: (variables) => getProductByKeyword(variables),
    staleTime: 86400000, //24hrs
  });

  function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    const result = mutate(searchQuery);
    return result;
  }

  return (
    <div className="flex flex-col justify-center p-2 sm:p-4">
      <h1 className=" text-center font-bold text-3xl">
        Search for a product you want to modify
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[300px] h-[50px] flex justify-center py-2 mx-auto"
      >
        <input
          type="search"
          name="search"
          placeholder="search here"
          required
          className="peer w-full h-full text-black text-sm border-2 rounded-l-full bg-white/90 px-2"
        />

        <button className=" right-0 w-[40px] px-3 rounded-r-full h-full bg-slate-500">
          <img
            src="/icons/search.svg"
            alt="search"
            className=" h-full aspect-square"
          />
        </button>
      </form>
      {isPending ? (
        <Loader />
      ) : isError ? (
        <h1 className=" text-center text-rose-700">{error.message}</h1>
      ) : (
        <div className=" w-full max-w-[700px] mx-auto space-y-4 border-t-2">
          {data?.map((item) => (
            <ModificationCard {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
