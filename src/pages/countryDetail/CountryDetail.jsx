import './CountryDetail.sass'
import { useParams, Link } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import { useThemeContext } from "../../context/ThemeContext";
import { MdKeyboardBackspace } from "react-icons/md";
import Country from "../../components/country/Country";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const [currentCoutry, setCurrentCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { countryName } = useParams();

  const { theme } = useThemeContext();
  const { filteredCountries } = useFilter();

  async function getCurrentCountry() {
    try {
      const currentCoutry = await filteredCountries.filter(
        (country) => country.name.common === countryName
      );
      setCurrentCountry(...currentCoutry);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getCurrentCountry();
  }, [countryName]);

  return (
    <section className={theme === "Dark" ? "detailDark" : "detailLight"}>
      <Link to="/">
        <MdKeyboardBackspace /> Back
      </Link>
      {error != null && (
        <>
          <h3>
            Error: Back to the initial page and try again. If error persist try
            again latter...
          </h3>
          <p>Error to loading a page: Error code: {error}</p>
        </>
      )}
      {error === null && loading === true && <p>Loading data of the country</p>}
      {error === null && loading === false && <Country country={currentCoutry} />}
    </section>
  );
};

export default CountryDetail;
