import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Outlets from "./pages/Outlets";
import Outlet from "./pages/Outlet";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/Outlets" element={<Outlets />} />
          <Route path="/Outlets/:_id" element={<Outlet />} />
          <Route path="/Foods" element={<h1>Foods Component</h1>} />
          <Route path="/Wish-List" element={<h1>Wish-List Component</h1>} />
          <Route path="/Profile" element={<h1>Profile Component</h1>} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
