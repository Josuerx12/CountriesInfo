import { useThemeContext } from "../../context/ThemeContext";
import "./Header.sass";

import { CgDarkMode } from "react-icons/cg";

const Header = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <header className={theme === "Dark" ? "headerdark" : "headerlight"}>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>
        <CgDarkMode />
        {theme === "Dark" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;
