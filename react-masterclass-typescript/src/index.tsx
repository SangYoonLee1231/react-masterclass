import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./Router";
import { lightTheme, darkTheme } from "./theme";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
