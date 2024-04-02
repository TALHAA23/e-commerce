import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext)[0];
export const useFilterUpdater = () => useContext(FilterContext)[1];

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState({ brand: [] });
  console.log(filter);

  const updateFilter = (event) => {
    const { name, value, checked } = event.target;
    setFilter((prevFilter) => {
      const newFilter = checked
        ? [...prevFilter[name], value]
        : prevFilter[name].filter((item) => item !== value);
      return { ...prevFilter, [name]: newFilter };
    });
  };

  return (
    <FilterContext.Provider value={[filter, updateFilter]}>
      {children}
    </FilterContext.Provider>
  );
}
