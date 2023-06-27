/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Countries.sass";

const Countries = ({ countries, loading, theme }) => {
  return (
    <section className={theme === "Dark" ? "countriesDark" : "countriesLight"}>
      {loading === true && <p>Loading data...</p>}
      {countries &&
        countries.map((country) => (
          <Link
            to={`/info/${country.name.common}`}
            key={country.name.common}
            className="countryCard"
          >
            <img src={country.flags.png} alt={country.flags.alt} />
            <div className="informations">
              <h2>{country.name.common}</h2>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
};

export default Countries;
