import { useThemeContext } from "../../context/ThemeContext";
import "./Home.sass";

const Home = () => {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <div className={theme === "Dark" ? "dark" : "light"}>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
