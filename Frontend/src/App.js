import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Cred from "./pages/Cred/Cred";
import Beneficios from "./pages/Beneficios/Beneficios";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cred" element={<Cred />} />
          <Route path="/beneficios" element={<Beneficios />} />
        </Routes>
        <Map />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
