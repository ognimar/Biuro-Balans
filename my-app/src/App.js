import React from "react";
import Navbar from "./components/UI/NavBar";
import Glowna from "./components/Strony/Glowna";
import OfertaHandler from "./components/Strony/Oferta";
import KontaktHandler from "./components/Strony/Kontakt";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div >
      <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/Glowna" element={<Glowna />}/>
          <Route path="/Oferta" element={<OfertaHandler />}/>
          <Route path="/Kontakt" element={<KontaktHandler />}/>
          <Route path="/oNas" element={<oNasHandler />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
