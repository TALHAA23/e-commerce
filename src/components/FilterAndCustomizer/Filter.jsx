const options = ["any", "price low to high", "price high to low"];
export default function Filter() {
  return (
    <select name="filter" className="px-2 py-1 rounded border border-[#3C1884]">
      {options.map((option, index) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
