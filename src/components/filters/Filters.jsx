import { useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import "./Filters.sass";

const Filters = () => {
  const [country, setCountry] = useState("");

  const searchCountry = (e) => {
    e.preventDefault();
    console.log(country);
  };
  return (
    <form>
      <label>
        <input
          name="searchCountries"
          type="text"
          onChange={(e) => setCountry(e.target.value)}
        />
        <PiMagnifyingGlassLight />
      </label>
    </form>
  );
};

export default Filters;
