import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import Outlets from "./pages/Outlets";
import Foods from "./pages/Foods";
import MainOutlets from "./pages/MainOutlets";
import FoodOutlets from "./pages/FoodOutlet";
import FavFoodOutlets from "./pages/FavFoodOutletList";
import ItemCart from "./pages/ItemCart";
import MyOrder from "./pages/MyOrdersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/error.css";
import "./styles/master.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" />
          <Route path="/MainOutlets" element={<MainOutlets />} />
          <Route path="/FoodOutlets/:outletId" element={<FoodOutlets />} />
          <Route path="/Outlets" element={<Outlets />} />
          <Route path="/Outlet/:_id/Foods" element={<Foods />} />
          <Route path="/Foods" element={<h1>Foods Component</h1>} />
          <Route path="/WishList" element={<FavFoodOutlets />} />
          <Route path="/itemcart" element={<ItemCart />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
