import React from "react";
import { Outlet } from "react-router-dom";
import Circle from "./Circle";
import Header from "./screens/components/Header";

function Root() {
  return (
    <div className="Root">
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
