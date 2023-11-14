import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import GlobalProviderContext from "./context/Global.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalProviderContext>
        <App />
      </GlobalProviderContext>
    </ThemeProvider>
  </React.StrictMode>
);
