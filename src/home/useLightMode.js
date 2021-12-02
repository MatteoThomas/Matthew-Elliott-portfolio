import { useEffect, useState } from "react";

export const useLightMode = () => {
  const [theme, setTheme] = useState("dark");

  // SETS THE THEME VALUE  IN LOCAL STORAGE
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    // SETTING LOCAL STORAGE THEME AND STATE
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    // ON MOUNT CHECKS AND RETRIEVES LOCAL STORAGE ITEM THEME
    const localTheme = window.localStorage.getItem("theme");
    // CHECKS IF BROWSER SUPPORTS MEDIA QUERIES
    window.matchMedia &&
    // CHECKS IF BROWSER SUPPORTS DARK MODE
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    // CHECKS IF LOCAL THEME VALUE IS NOT SET / IF NOT (TRUE), SETS TO "DARK"
    !localTheme
      ? setMode("dark")
      : // IF SET (FALSE), A NESTED TERNARY OPERATOR SETS LOCAL THEME
      localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, []);

  return [theme, toggleTheme];
};
