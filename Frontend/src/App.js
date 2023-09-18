import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Cred from "./pages/Cred/Cred";
import Beneficios from "./pages/Beneficios/Beneficios";
import Map from "./components/Map";
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
        <Map />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
