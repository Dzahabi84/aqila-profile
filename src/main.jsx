import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import ThemeProviderContext from "./context/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </ThemeProvider>
  </React.StrictMode>
);
