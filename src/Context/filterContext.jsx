import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const FilterContext = createContext();

export const useFilterKey = () => useContext(FilterContext)[0];
export const useFilter = () => useContext(FilterContext)[1];
export const useFilterUpdater = () => useContext(FilterContext)[2];
export const useFilterVisablityControlsAndValue = () =>
  useContext(FilterContext)[3];

export default function FilterProvider({ children }) {
  const [filterKey, setFilterKey] = useState(null);
  const [isFilterVisable, setIsFilterVisable] = useState(false);
  const [filter, setFilter] = useState({ brand: [] });
  const updateFilter = (event) => {
    const { name, value, checked } = event.target;
    setFilter((prevFilter) => {
      const newFilter = checked
        ? [...prevFilter[name], value]
        : prevFilter[name].filter((item) => item !== value);
      // setFilterKey(newFilter.toString());
      setFilterKey(sortArray(newFilter).toString());
      return { ...prevFilter, [name]: newFilter };
    });
  };

  const updateFilterState = () => {
    setIsFilterVisable((prevState) => !prevState);
  };

  return (
    <FilterContext.Provider
      value={[
        filterKey,
        filter,
        updateFilter,
        [isFilterVisable, updateFilterState],
      ]}
    >
      {children}
    </FilterContext.Provider>
  );
}

const sortArray = (array) => array.sort((a, b) => b.localeCompare(a));
