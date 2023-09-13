import React from "react";

import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <div id="menu">
        <GiHamburgerMenu id="burguer" />
        <FaArrowRight id="arrow" />
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
