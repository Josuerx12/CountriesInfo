import { useThemeContext } from "../../context/ThemeContext";
import "./Home.sass";
import Filters from "../../components/filters/Filters";

const Home = () => {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <div className={theme === "Dark" ? "dark" : "light"}>
      <Filters />
    </div>
  );
};

export default Home;
