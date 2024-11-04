
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Component2() {
  const { text, theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}
