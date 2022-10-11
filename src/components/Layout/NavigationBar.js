import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link key={0} className="brand-name" to="/TasteBuds">
            TasteBuds
          </Link>
          <Link key={1} to="/Outlet/:1/Foods">
            Outlets
          </Link>
          <Link key={2} to="/MainOutlets">
            Main-Outlets
          </Link>
          <Link key={3} to="/FoodOutlets/1">
            Outlet
          </Link>
          <Link key={4} to="/Favourites">
            Wish-List
          </Link>
          <Link key={5} to="/Itemcart">
            Itemcart (2)
          </Link>
          <Link key={6} to="/MyOrders">
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
