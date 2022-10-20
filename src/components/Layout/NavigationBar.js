import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const cartCtx = useContext(CartContext);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    //Count the items in the cart
    let itemCount = 0;
    cartCtx.cartItems.forEach((singleItem) => {
      itemCount = itemCount + singleItem.qty;
    });
    setCartItemsCount(itemCount);
  }, [cartCtx.cartItems]);


  return (
    <div>
      <ul className="nav-ul">
        <li>
          {isAuthenticated ? (
            <>
              <Link key={0} className="brand-name" to="/TasteBuds">
                TasteBuds
              </Link>
              <Link key={1} to="/Favourites">
                Wish-List
              </Link>
              <Link key={2} to="/Itemcart">
                Itemcart ({cartItemsCount})
              </Link>
              <Link key={3} to="/MyOrders">
                My Orders
              </Link>
            </>
          ) : (
            <>
              <Link key={0} className="brand-name" to="/TasteBuds">
                TasteBuds
              </Link>
            </>
          )}
        </li>
        {isAuthenticated && (
          <li>
            {" "}
            <p className="username">&nbsp;&nbsp; User : {user.name} </p>
          </li>
        )}
        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        {isAuthenticated ? (
          <li>
            <button
              className="logout-btn"
              onClick={() => logout({ returnTo: window.location.origin })}>
              {" "}
              Log Out{" "}
            </button>
          </li>
        ) : (
          <li>
            <button className="login-btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
