import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

// ----- import pages
import NavigationBar from "./components/Layout/NavigationBar";
// import Footer from "./components/Layout/Footer";
import Outlets from "./pages/Outlets";
import Foods from "./pages/Foods";
import MainOutlets from "./pages/MainOutlets";
import FoodOutlets from "./pages/FoodOutlet";
import FavFoodOutlets from "./pages/FavFoodOutletList";
import ItemCart from "./pages/ItemCart";
import MyOrder from "./pages/MyOrdersList";

// import main css files
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/error.css";
import "./styles/master.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Outlets />} />
      <Route path="/Outlet/:_id/Foods" element={<Foods />} />
      <Route path="/MainOutlets" element={<MainOutlets />} />
      <Route path="/FoodOutlets/:outletId" element={<FoodOutlets />} />
      <Route path="/Favourites" element={<FavFoodOutlets />} />
      <Route path="/Itemcart" element={<ItemCart />} />
      <Route path="/MyOrders" element={<MyOrder />} />
    </Routes>
    {/* <Footer /> */}
  </Router>
);
