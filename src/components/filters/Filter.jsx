import "./Filter.sass";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useThemeContext } from "../../context/ThemeContext";
import { useFilter } from "../../context/FilterContext";

const Filter = () => {
  const { theme } = useThemeContext();
  const { SearchFilter, setSearchFilter, setOptionFilter, OptionFilter } =
    useFilter();
  return (
    <form className={theme === "Dark" ? "filtersDark" : "filtersLight"}>
      <label>
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearchFilter(e.target.value)}
          value={SearchFilter}
        />
      </label>
      <select
        name="filterbyregion"
        className="filterregion"
        onChange={(e) => setOptionFilter(e.target.value)}
        value={OptionFilter}
      >
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
