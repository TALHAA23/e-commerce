import { Link } from "react-router-dom";

export default function CreateMenuSection({
  sectionTitle,
  forProperty,
  sectionOptions,
}) {
  return (
    <div className=" my-2">
      <h1 className=" font-bold w-fit text-xl py-2 px-3 border-b-2 border-[#3C1884]">
        {sectionTitle}
      </h1>
      <div className=" flex flex-col pl-3 gap-1 my-2">
        {sectionOptions.map((option) => (
          <Link
            to={`/by-property/${forProperty}?q=${option}`}
            className="flex justify-between items-center w-full px-1 capitalize rounded-md hover:bg-gray-400"
          >
            <p>{option}</p>
            <img
              className="w-9"
              src="../../../public/icons/right-arrow-svgrepo-com.svg"
              alt=">"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
