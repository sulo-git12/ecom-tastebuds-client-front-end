import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/master.css";
import axios from "axios";
import FoodInShop from "./components/FoodInShop";

 

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/Outlet" element={<h1>Outlet Component</h1>} />
          <Route path="/Foods" element={<h1>Foods Component</h1>} />
          <Route path="/Wish-List" element={<h1>Wish-List Component</h1>} />
          <Route path="/Profile" element={<h1>Profile Component</h1>} />
          <Route path="/fis" element={<FoodInShop/>} />
        </Routes>
      </BrowserRouter>
      <div><React.Fragment>
    
    </React.Fragment></div>
      <Footer />
    </div>
  );
}

export default App;
