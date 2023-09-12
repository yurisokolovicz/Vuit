import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./App.css";
import Cred from "./pages/Home/Cred/Cred";
import Beneficios from "./pages/Home/Beneficios/Beneficios";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cred" element={<Cred />} />
          <Route path="/beneficios" element={<Beneficios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
