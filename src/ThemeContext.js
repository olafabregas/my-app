
import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Theme state (light/dark)
  const [text, setText] = useState(""); // Text state

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, text, setText }}>
      {children}
    </ThemeContext.Provider>
  );
};
