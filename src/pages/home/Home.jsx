import { useThemeContext } from "../../context/ThemeContext";
import "./Home.sass";
import { useState } from "react";
import Filter from "../../components/filters/Filter";

const Home = () => {
  const { theme } = useThemeContext();
  return (
    <main className={theme === "Dark" ? "dark" : "light"}>
      <nav>
        <Filter/>
      </nav>
    </main>
  );
};

export default Home;
