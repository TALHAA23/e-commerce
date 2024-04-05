import { useSearchParams } from "react-router-dom";

const options = [
  "A-Z",
  "price low to high",
  "price high to low",
  "newest to oldest",
  "oldest to newest",
];
export default function Sorter() {
  const [searchParam, setSearchParam] = useSearchParams();

  function addSortToURL(event) {
    const queryParam = event.target.value;
    const query = new URLSearchParams(`f=${queryParam}`);
    setSearchParam(query);
  }

  return (
    <select
      name="filter"
      onChange={addSortToURL}
      className="py-1 w-fit rounded border-2 border-[#3C1884] text-sm sm:text-lg font-bold text-[#3C1884] focus:outline-none focus:border-2 capitalize"
      value={searchParam.get("f")}
    >
      {options.map((option, index) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
