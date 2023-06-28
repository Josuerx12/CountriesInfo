import "./Country.sass";
import { useThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { theme } = useThemeContext();
  console.log(country);
  return (
    <div className={theme === "Dark" ? "countryDark" : "countryLight"}>
      <img src={country.flags.png} alt={country.flags.alt} />
      <div className="countryInfos">
        <h2>{country.name.common}</h2>
        <div className="Infos">
          <div className="geoInfos">
            <p>
              <span>Native Name: </span>
              {Object.values(country.name.nativeName)
                .map((i) => i.common)
                .join(", ")}
            </p>
            <p>
              <span>Population: </span>
              {country.population}
            </p>
            <p>
              <span>Region: </span>
              {country.region}
            </p>
            <p>
              <span>Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span>Capital: </span>
              {country.capital}
            </p>
          </div>
          <div className="ecoInfos">
            <p>
              <span>Top Level Domain: </span>
              {Object.values(country.tld)
                .map((i) => i)
                .join(", ")}
            </p>
            <p>
              <span>Currencies: </span>
              {Object.values(country.currencies).map((i) => i.name)}
            </p>
            <p>
              <span>Languages: </span>
              {Object.values(country.languages)
                .map((i) => i)
                .join(", ")}
            </p>
          </div>
        </div>

        {country.borders && (
          <p className="borderCountries">
            <span>Border Countries: </span>{" "}
            {/* {Object.values(country.borders).map((i) => (
              <Link to={`/info/${i}`}>{i}</Link>
            ))} */}
            {Object.values(country.borders).map((i) => (
              <Link>{i}</Link>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default Country;
