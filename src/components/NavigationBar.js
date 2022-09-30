import React from "react";
import { Link } from "react-router-dom";
import "../styles/master.css";

const Navigation = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link key={0} className="brand-name" to="/">
            TasteBuds
          </Link>
          <Link key={1} to="/">
            Home
          </Link>
          <Link key={2} to="/Outlets">
            Outlets
          </Link>
          <Link key={3} to="/Outlet">
            Outlet
          </Link>
          <Link key={4} to="/Foods">
            Foods
          </Link>
          <Link key={5} to="/Wish-List">
            Wish-List
          </Link>
          <Link key={6} to="/Profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
