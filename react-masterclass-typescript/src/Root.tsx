import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div className="Root">
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
