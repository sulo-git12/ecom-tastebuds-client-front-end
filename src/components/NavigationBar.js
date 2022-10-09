import React, { useContext } from "react";
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
<<<<<<< HEAD
          <Link key={3} to="/Outlets/6335d94791ea97c87af4cfc6">
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
=======
          <Link key={3} to="/FoodOutlets/1">
            Outlet
          </Link>
          <Link key={4} to="/WishList">
            Wish-List
          </Link>
          <Link key={5} to="/Profile">
            Profile
          </Link>
          <Link key={7} to="/itemcart">
            Itemcart ()
          </Link>
          <Link key={6} to="/myOrders">
            My Orders
          </Link>
>>>>>>> 9792b08 (Add My order page and item cart page to app.js)
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
