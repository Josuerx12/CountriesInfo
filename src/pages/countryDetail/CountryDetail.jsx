import { useParams, Link } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import { useThemeContext } from "../../context/ThemeContext";
import { MdKeyboardBackspace } from "react-icons/md";

const CountryDetail = () => {
  let { countryName } = useParams();
  const { theme } = useThemeContext();
  const { filteredCountries, loading } = useFilter();

  return (
    <div>
      <Link to="/">
        <MdKeyboardBackspace /> Back
      </Link>
    </div>
  );
};

export default CountryDetail;
