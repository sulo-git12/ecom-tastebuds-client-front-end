import React from "react";
import { Link } from "react-router-dom";
import "../styles/master.css";

const Navigation = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link className="brand-name" to="/" >TasteBuds</Link>
          <Link to="/">Home</Link>
          <Link to="/Outlets">Outlets</Link>
          <Link to="/Outlet">Outlet</Link>
          <Link to="/Foods">Foods</Link>
          <Link to="/Wish-List">Wish-List</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/fis">FIS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
