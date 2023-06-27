/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useFetchDocument } from "../hooks/useFetchCountries";
import { useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [optionFilter, setOptionFilter] = useState("");

  const url = "https://restcountries.com/v3.1/all";
  const { countries, loading, error } = useFetchDocument(url);

  const filteredCountries =
    countries &&
    countries
      .filter(
        (country) =>
          !searchFilter ||
          country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
      )
      .filter(
        (country) =>
          !optionFilter ||
          country.region.toLowerCase().includes(optionFilter.toLowerCase())
      );

  return (
    <FilterContext.Provider
      value={{
        filteredCountries,
        searchFilter,
        optionFilter,
        setSearchFilter,
        setOptionFilter,
        loading,
        error,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
