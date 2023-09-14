import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setShowHamburgerMenu(false);
    console.log(menuOpen);
  };

  const toggleHamburger = () => {
    setShowHamburgerMenu(true);
  };

  return (
    <nav id="nav">
      <div id="menu" className={`menu ${menuOpen ? "expanded" : ""}`}>
        {showHamburgerMenu ? (
          <GiHamburgerMenu id="burguer" onClick={toggleMenu} />
        ) : (
          <FaArrowRight id="arrow" onClick={toggleHamburger} />
        )}
      </div>
      <div className="container-menu">
        <ul id="nav-links">
          <NavLink className="nav-button" to="/">
            VUIT SEGUROS
          </NavLink>
          <NavLink className="nav-button" to="/cred">
            VUIT CRED
          </NavLink>
          <NavLink className="nav-button" to="/beneficios">
            VUIT BENEFICIOS
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
