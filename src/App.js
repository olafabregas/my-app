// src/App.js
import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import Component2 from "./Component2";
import ThemeToggle from "./ThemeToggle"; // Toggle component to switch themes

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeToggle /> {/* Renders theme toggle button */}
        <Component2 />
      </ThemeProvider>
    </div>
  );
}

export default App;
