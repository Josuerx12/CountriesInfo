import { useState } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  };
  return { theme, toggleTheme };
};
