import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { CartContextProvider } from "./store/cart-context";

// ----- import pages
import NavigationBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import Outlets from "./pages/Outlets";
import Foods from "./pages/Foods";
import FoodOutlets from "./pages/FoodOutlet";
import FavFoodOutlets from "./pages/FavFoodOutletList";
import ItemCart from "./pages/ItemCart";
import MyOrder from "./pages/MyOrdersList";

// import main css files
import "./styles/master.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/master.css";


const domainaddress = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <Auth0Provider
    domain = {domainaddress}
    clientId = {clientID}
    redirectUri={window.location.origin} 
  >
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/TasteBuds" element={<Outlets />} />
        <Route path="/Outlet/:_id/Foods" element={<Foods />} />
        <Route path="/FoodOutlets/:outletId" element={<FoodOutlets />} />
        <Route path="/Favourites" element={<FavFoodOutlets />} />
        <Route path="/Itemcart" element={<ItemCart />} />
        <Route path="/MyOrders" element={<MyOrder />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </Auth0Provider>
  </CartContextProvider>
);
