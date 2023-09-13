import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cred from "./pages/Home/Cred/Cred";
import Beneficios from "./pages/Home/Beneficios/Beneficios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cred" element={<Cred />} />
          <Route path="/beneficios" element={<Beneficios />} />
        </Routes>
        {/* </div> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
