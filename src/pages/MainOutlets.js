import React from "react";
import { Link } from "react-router-dom";

const MainOutlets = () => {
  return (
    <div>
      <Link to="/FoodOutlets/1">
        <button type="button" className="btn btn-primary">
          Outlet No 1
        </button>
      </Link>
      {"     "}
      <Link to="/FoodOutlets/2">
        <button type="button" className="btn btn-primary">
          Outlet No 2
        </button>
      </Link>
      {"     "}
      <Link to="/FoodOutlets/3">
        <button type="button" className="btn btn-primary">
          Outlet No 3
        </button>
      </Link>
      {"     "}
      <Link to="/FoodOutlets/4">
        <button type="button" className="btn btn-primary">
          Outlet No 4
        </button>
      </Link>
      {"     "}
      <Link to="/FoodOutlets/5">
        <button type="button" className="btn btn-primary">
          Outlet No 5
        </button>
      </Link>
      {"     "}
      <Link to="/FoodOutlets/6">
        <button type="button" className="btn btn-primary">
          Outlet No 6
        </button>
      </Link>
    </div>
  );
};

export default MainOutlets;
