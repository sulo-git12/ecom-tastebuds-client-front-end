import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
<<<<<<< HEAD
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/master.css";
=======
import Outlets from "./pages/Outlets";
import Outlet from "./pages/Outlet";
import MyOrders from "./pages/MyOrdersList";
import Itemcart from "./pages/ItemCart";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 9792b08 (Add My order page and item cart page to app.js)

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <NavigationBar />

        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/Outlets" element={<Outlets />} />
          <Route path="/Outlets/:_id" element={<Outlet />} />
          <Route path="/Foods" element={<h1>Foods Component</h1>} />
          <Route path="/Wish-List" element={<h1>Wish-List Component</h1>} />
          <Route path="/Profile" element={<h1>Profile Component</h1>} />
          <Route path="/fis" element={<FoodInShop/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
=======
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
>>>>>>> 9792b08 (Add My order page and item cart page to app.js)
    </div>
  );
};

export default App;
