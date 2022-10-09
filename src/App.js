import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import Outlets from "./pages/Outlets";
import MainOutlets from "./pages/MainOutlets";
import FoodOutlets from "./pages/FoodOutlet";
import FavFoodOutlets from "./pages/FavFoodOutletList";
import Outlet from "./pages/Outlet";
import ItemCart from "./pages/ItemCart";
import MyOrder from "./pages/MyOrdersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/master.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/Outlets" element={<Outlets />} />
          <Route path="/MainOutlets" element={<MainOutlets />} />
          <Route path="/FoodOutlets/:outletId" element={<FoodOutlets />} />
          <Route path="/Foods" element={<h1>Foods Component</h1>} />
          <Route path="/WishList" element={<FavFoodOutlets />} />
          <Route path="/Profile" element={<h1>Profile Component</h1>} />
          <Route path="/itemcart" element={<ItemCart />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
