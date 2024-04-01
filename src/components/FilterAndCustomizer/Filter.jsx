import { useSearchParams } from "react-router-dom";

const options = [
  "A-Z",
  "price low to high",
  "price high to low",
  "newest to oldest",
  "oldest to newest",
];
export default function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();

  function createFilterQuery(event) {
    const queryParam = event.target.value;
    const query = new URLSearchParams(`f=${queryParam}`);
    setSearchParam(query);
  }

  return (
    <select
      name="filter"
      onChange={createFilterQuery}
      className="px-2 py-1 rounded border border-[#3C1884] focus:outline-none focus:border-2 capitalize"
      value={searchParam.get("f")}
    >
      {options.map((option, index) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
