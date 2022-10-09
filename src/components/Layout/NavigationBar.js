import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
          <Link key={3} to="/MainOutlets">
            Main-Outlets
          </Link>
          <Link key={4} to="/FoodOutlets/1">
            Outlet
          </Link>
          <Link key={5} to="/WishList">
            Wish-List
          </Link>
          <Link key={6} to="/Profile">
            Profile
          </Link>
          <Link key={7} to="/itemcart">
            Itemcart ()
          </Link>
          <Link key={8} to="/myOrders">
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
