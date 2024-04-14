import React from "react";
import { Link, Outlet } from "react-router-dom";
import Productnav from "./Productnav";

const Product = () => {
  return (
    <>
        <Productnav/>
        <div className="container">
          <Outlet />
        </div>

    </>
  );
};

export default Product;
