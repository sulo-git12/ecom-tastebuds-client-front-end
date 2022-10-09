import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Outlets from "./pages/Outlets";
import Outlet from "./pages/Outlet";
import MyOrders from "./pages/MyOrdersList";
import Itemcart from "./pages/ItemCart";
import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/master.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<h1>Home Component</h1>} />
            <Route path="/Outlets" element={<Outlets />} />
            <Route path="/Outlet" element={<Outlet />} />
            <Route path="/Foods" element={<h1>Foods Component</h1>} />
            <Route path="/Wish-List" element={<h1>Wish-List Component</h1>} />
            <Route path="/Profile" element={<h1>Profile Component</h1>} />
            <Route path="/itemcart" element={<Itemcart />} />
            <Route path="/myOrders" element={<MyOrders />} />
          </Routes>
      </BrowserRouter>
     
      {/* <Footer /> */}
    </div>
  );
};

export default App;
