import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  /*  const [useFixed, setUseFixed] = useState(false);
  function Fixed() {
    if (window.scrollY >= 392) {
      setUseFixed(true);
    } else {
      setUseFixed(false);
    }
  }
  window.addEventListener("scroll", Fixed); */
  return (
    <div className="wysokosc">
      <nav className="Navbar fixed-top">
        <span className="nav-logo">Biuro Rachunkowe BALANS</span>
        <nav
          className={`nav-items ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link to="/Glowna">Głowna</Link>
          <Link to="/Oferta">Oferta</Link>
          <Link to="/Kontakt">Kontakt</Link>
          <Link to="/oNas">O Nas</Link>
        </nav>
        <nav
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <nav className="bar"></nav>
        </nav>
      </nav>
    </div>
  );
};
export default Navbar;
