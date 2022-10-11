import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Outlets from "./pages/Outlets";
import Outlet from "./pages/Outlet";
import Foods from "./pages/Foods";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/Outlets" element={<Outlets />} />
          <Route path="/Outlets/:_id" element={<Outlet />} />
          <Route path="/Outlet/:_id/Foods" element={<Foods />} />
          <Route path="/Wish-List" element={<h1>Wish-List Component</h1>} />
          <Route path="/Profile" element={<h1>Profile Component</h1>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
