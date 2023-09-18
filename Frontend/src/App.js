import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cred from "./pages/Cred/Cred";
import Beneficios from "./pages/Beneficios/Beneficios";
import GoogleMapsApi from "./components/GoogleMapsApi/GoogleMapsApi";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cred" element={<Cred />} />
        <Route path="/beneficios" element={<Beneficios />} />
      </Routes>
      <div className="container-map">
        <GoogleMapsApi />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
