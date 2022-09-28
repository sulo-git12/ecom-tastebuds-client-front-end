import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
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
