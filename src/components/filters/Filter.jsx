import "./Filter.sass";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Filter = (setCountry, setFilter) => {
  return (
    <form>
      <label>
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <select name="filterbyregion" onChange={(e) => setFilter(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Filter;
