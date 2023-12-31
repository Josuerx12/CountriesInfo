import { useThemeContext } from "../../context/ThemeContext";
import "./Home.sass";
import Filter from "../../components/filters/Filter";
import Countries from "../../components/countries/Countries";
import { useFilter } from "../../context/FilterContext";

const Home = () => {
  const { theme } = useThemeContext();
  const { filteredCountries, loading } = useFilter();
  return (
    <main className={theme === "Dark" ? "dark" : "light"}>
      <section>
        <Filter />
        <Countries
          countries={filteredCountries}
          loading={loading}
          theme={theme}
        />
      </section>
    </main>
  );
};

export default Home;
