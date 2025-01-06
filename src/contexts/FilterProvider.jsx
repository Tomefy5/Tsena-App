import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <FilterContext.Provider value={{activeFilter, setActiveFilter}}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
