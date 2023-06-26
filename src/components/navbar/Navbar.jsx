import { useThemeContext } from "../../context/ThemeContext";
import "./Navbar.sass";

import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <nav className={theme === "Dark" ? "navbardark" : "navbarlight"}>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>
        <CgDarkMode />
        {theme === "Dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
