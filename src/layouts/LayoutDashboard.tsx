import React from "react";
import Navbar from "../components/navbar";

const LayoutDashboard = (Component: any) => {
  return (
    <div>
      <Navbar />
      <Component />
    </div>
  );
};

export default LayoutDashboard;
