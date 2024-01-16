import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";

function Root() {
  return (
    <div className="Root">
      <div>
        <Header />
        <App />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
